const express = require("express");
const util = require("util");
var jwt = require("jsonwebtoken");
var md5 = require("md5");
const multer = require("multer");
const path = require("path");
const Product = require("./libs/Product");
const Contact = require("./libs/Contact");
const User = require("./libs/User");
const Comment = require("./libs/Comment");

const app = express();
const post = 8000;

const bodyParser = require("body-parser");

const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mysql = require("mysql");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "yadasci",
});

pool.query = util.promisify(pool.query);
app.listen(post, () => {});

app.use(express.static(path.resolve(__dirname, "build")));

app.use("/images", express.static("images"));

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  pool.query(
    "SELECT * FROM users WHERE user_name = ? AND user_pwd = MD5(?)",
    [username, password],
    function (error, result, fields) {
      if (error) {
        res.json({
          result: false,
          message: error.message,
        });
      }

      if (result.length) {
        res.json({
          result: true,
        });
      } else {
        res.json({
          result: false,
          message: "ไม่พบ Username หรือ password ไม่ถูกต้อง",
        });
      }
    }
  );
});

app.post("/api/authen_request", (req, res) => {
  const sql = "SELECT * FROM users WHERE MD5(user_name) = ?";
  pool.query(sql, [req.body.username], (error, results) => {
    var response;
    if (error) {
      response = {
        result: false,
        message: error.message,
      };
    } else {
      if (results.length) {
        var payload = { username: req.body.username };
        var secretKey = "MySecretKey";
        const authToken = jwt.sign(payload, secretKey);
        response = {
          result: true,
          data: {
            auth_token: authToken,
          },
        };
      } else {
        response = {
          result: false,
          message: "Username ไม่ถูกต้อง",
        };
      }
    }

    res.json(response);
  });
});

app.post("/api/access_request", (req, res) => {
  const authenSignature = req.body.authen_signature;
  const authToken = req.body.auth_token;

  var decoded = jwt.verify(authToken, "MySecretKey");

  if (decoded) {
    const query =
      "SELECT user_id, user_name, first_name, last_name, email, gender FROM users";
    pool.query(query, [authenSignature], (error, results) => {
      var response;
      if (error) {
        response = {
          result: false,
          message: error.message,
        };
      } else {
        if (results.length) {
          var payload = {
            user_id: results[0].user_id,
            username: results[0].username,
            first_name: results[0].first_name,
            last_name: results[0].last_name,
            email: results[0].email,
            gender: results[0].gender,
          };
          const accessToken = jwt.sign(payload, "MySecretKey");
          response = {
            result: true,
            data: { access_token: accessToken, account_info: payload },
          };
        } else {
          response = {
            result: false,
            message: "Username หรือ Password ไม่ถูกต้อง ",
          };
        }
      }
      res.json(response);
    });
  }
});

let checkAuth = (req, res, next) => {
  let token = null;

  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.query && req.query.token) {
    token = req.query.token;
  } else {
    token = req.body.token;
  }

  if (token) {
    jwt.verify(token, "MySecretKey", (err, decoded) => {
      if (err) {
        res.send(
          JSON.stringify({
            result: false,
            message: "ไม่ได้เข้าสู่ระบบ",
          })
        );
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(401).send("Not authorized");
  }
};
app.post("/api/product/upload/:productId", checkAuth, (req, res) => {
  var productId = req.params.productId;
  var fileName;
  var storage = multer.diskStorage({
    destination: (req, flie, cp) => {
      cp(null, "images");
    },
    filename: (req, file, cp) => {
      fileName = productId + "-" + file.originalname;
      cp(null, fileName);
    },
  });

  var upload = multer({ storage: storage }).single("file");
  upload(req, res, async (err) => {
    if (err) {
      res.json({
        result: false,
        message: err.message,
      });
    } else {
      var result = Product.updateImage(pool, productId, fileName);

      res.json({
        result: true,
        data: fileName,
      });
    }
  });
});

app.get("/api/product_types", checkAuth, (req, res) => {
  const query = "SELECT * FROM product_types";

  pool.query(query, (error, results) => {
    if (error) {
      res.json({
        result: false,
        message: error.message,
      });
    } else {
      res.json({
        result: true,
        data: results,
      });
    }
  });
});

//
app.post("/api/comment/upload/:commentId", checkAuth, (req, res) => {
  var commentId = req.params.commentId;
  var fileName;
  var storage = multer.diskStorage({
    destination: (req, flie, cp) => {
      cp(null, "images");
    },
    filename: (req, file, cp) => {
      fileName = commentId + "-" + file.originalname;
      cp(null, fileName);
    },
  });

  var upload = multer({ storage: storage }).single("file");
  upload(req, res, async (err) => {
    if (err) {
      res.json({
        result: false,
        message: err.message,
      });
    } else {
      var result = Comment.updateImage(pool, commentId, fileName);

      res.json({
        result: true,
        data: fileName,
      });
    }
  });
});

app.get("/api/comment_types", checkAuth, (req, res) => {
  const query = "SELECT * FROM comment_types";

  pool.query(query, (error, results) => {
    if (error) {
      res.json({
        result: false,
        message: error.message,
      });
    } else {
      res.json({
        result: true,
        data: results,
      });
    }
  });
});

app.get("/api/comments/type/:commentTypeId", checkAuth, (req, res) => {
  const commentTypeId = req.params.commentTypeId;
  const sql =
    "SELECT a.*, b.comment_type_name " +
    "FROM comments a " +
    "JOIN comment_types b ON a.comment_type_id = b.comment_type_id ";

  if (commentTypeId == 0) {
    pool.query(sql, (error, results) => {
      if (error) {
        res.json({
          result: false,
          message: error.message,
        });
      } else {
        res.json({
          result: true,
          data: results,
        });
      }
    });
  } else {
    pool.query(
      sql + "WHERE a.comment_type_id = ?",
      [commentTypeId],
      (error, results) => {
        if (error) {
          res.json({
            result: false,
            message: error.message,
          });
        } else {
          res.json({
            result: true,
            data: results,
          });
        }
      }
    );
  }
});

app.post("/api/comment/add", checkAuth, async (req, res) => {
  const input = req.body;

  try {
    var result = await Comment.createComment(
      pool,
      input.comment_name,
      input.comment_type_id,
      input.price,
      input.stock
    );

    res.json({
      result: true,
    });
  } catch (ex) {
    res.json({
      result: false,
      message: ex.message,
    });
  }
});

app.post("/api/comment/update", checkAuth, async (req, res) => {
  const input = req.body;
  console.log(req.body);
  try {
    var result = await Comment.createComment(
      pool,
      input.comment_name,
      input.comment_type_id
    );
    console.log(result);
    res.json({
      result: true,
    });
  } catch (ex) {
    res.json({
      result: false,
      message: ex.message,
    });
  }
});

app.post("/api/comment/update", checkAuth, async (req, res) => {
  const input = req.body;

  try {
    var result = await Comment.updateComment(
      pool,
      input.comment_id,
      input.comment_name,
      input.comment_type_id
    );

    res.json({
      result: true,
    });
  } catch (ex) {
    res.json({
      result: false,
      message: ex.message,
    });
  }
});

app.post("/api/comment/delete", checkAuth, async (req, res) => {
  const input = req.body;

  try {
    var result = await Comment.deleteComment(pool, input.comment_id);

    res.json({
      result: true,
    });
  } catch (ex) {
    res.json({
      result: false,
      message: ex.message,
    });
  }
});
//

app.get("contact", checkAuth, (req, res) => {
  const query = "SELECT * FROM contact";

  pool.query(query, (error, results) => {
    if (error) {
      res.json({
        result: false,
        message: error.message,
      });
    } else {
      res.json({
        result: true,
        data: results,
      });
    }
  });
});

app.get("/api/products/type/:productTypeId", checkAuth, (req, res) => {
  const productTypeId = req.params.productTypeId;
  const sql =
    "SELECT a.*, b.product_type_name " +
    "FROM products a " +
    "JOIN product_types b ON a.product_type_id = b.product_type_id ";

  if (productTypeId == 0) {
    pool.query(sql, (error, results) => {
      if (error) {
        res.json({
          result: false,
          message: error.message,
        });
      } else {
        res.json({
          result: true,
          data: results,
        });
      }
    });
  } else {
    pool.query(
      sql + "WHERE a.product_type_id = ?",
      [productTypeId],
      (error, results) => {
        if (error) {
          res.json({
            result: false,
            message: error.message,
          });
        } else {
          res.json({
            result: true,
            data: results,
          });
        }
      }
    );
  }
});

app.post("/api/product/add", checkAuth, async (req, res) => {
  const input = req.body;

  try {
    var result = await Product.createProduct(
      pool,
      input.product_name,
      input.product_type_id,
      input.price,
      input.stock
    );

    res.json({
      result: true,
    });
  } catch (ex) {
    res.json({
      result: false,
      message: ex.message,
    });
  }
});

app.post("/register", checkAuth, async (req, res) => {
  const input = req.body;

  try {
    var result = await User.createUsers(
      pool,
      input.user_name,
      input.user_pwd,
      input.first_name,
      input.last_name,
      input.email,
      input.gender
    );

    res.json({
      result: true,
    });
  } catch (ex) {
    res.json({
      result: false,
      message: ex.message,
    });
  }
});

app.get("/api/product/:productId", async (req, res) => {
  const productId = req.params.productId;

  try {
    var result = await Product.getByProductId(pool, productId);

    res.json({
      result: true,
      data: result,
    });
  } catch (ex) {
    res.json({
      result: false,
      message: ex.message,
    });
  }
});

app.get("/api/comment/:commentId", async (req, res) => {
  const commentId = req.params.commentId;

  try {
    var result = await Comment.getByCommentId(pool, commentId);

    res.json({
      result: true,
      data: result,
    });
  } catch (ex) {
    res.json({
      result: false,
      message: ex.message,
    });
  }
});

app.get("/api/contact/:contactId", async (req, res) => {
  const contactId = req.params.contactId;

  try {
    var result = await Contact.getByContactId(pool, contactId);

    res.json({
      result: true,
      data: result,
    });
  } catch (ex) {
    res.json({
      result: false,
      message: ex.message,
    });
  }
});

app.get("/api/contact", async (req, res) => {
  const contactId = req.params.contactId;

  try {
    var result = await Contact.getByContactId(pool, contactId);

    res.json({
      result: true,
      data: result,
    });
  } catch (ex) {
    res.json({
      result: false,
      message: ex.message,
    });
  }
});

app.post("/api/product/update", checkAuth, async (req, res) => {
  const input = req.body;

  try {
    var result = await Product.updateProduct(
      pool,
      input.product_id,
      input.product_name,
      input.product_type_id,
      input.price,
      input.stock
    );

    res.json({
      result: true,
    });
  } catch (ex) {
    res.json({
      result: false,
      message: ex.message,
    });
  }
});

app.post("/api/product/delete", checkAuth, async (req, res) => {
  const input = req.body;

  try {
    var result = await Product.deleteProduct(pool, input.product_id);

    res.json({
      result: true,
    });
  } catch (ex) {
    res.json({
      result: false,
      message: ex.message,
    });
  }
});

app.get("/api/report", checkAuth, async (req, res) => {
  try {
    var result = await Product.getSumProduct(pool);

    res.json({
      result: true,
      data: result,
    });
  } catch (ex) {
    res.json({
      result: false,
      message: ex.message,
    });
  }
});

app.post("/api/user/delete", checkAuth, async (req, res) => {
  const input = req.body;

  try {
    var result = await User.deleteUser(pool, input.user_id);

    res.json({
      result: true,
    });
  } catch (ex) {
    res.json({
      result: false,
      message: ex.message,
    });
  }
});

app.get("/api/user/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    var result = await User.getByUserId(pool, userId);

    res.json({
      result: true,
      data: result,
    });
  } catch (ex) {
    res.json({
      result: false,
      message: ex.message,
    });
  }
});

app.post("/api/user/update/:userId", checkAuth, async (req, res) => {
  const input = req.body;

  try {
    var result = await User.updateUser(
      pool,
      input.user_id,
      input.user_name,
      input.user_pwd,
      input.first_name,
      input.last_name,
      input.email,
      input.gender
    );

    res.json({
      result: true,
    });
  } catch (ex) {
    res.json({
      result: false,
      message: ex.message,
    });
  }
});
