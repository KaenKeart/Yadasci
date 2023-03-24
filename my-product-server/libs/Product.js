const mysql = require("mysql");

module.exports = {
    createProduct: async (pool, productName, productTypeId, price, stock) => {
        var sql = "INSERT INTO products (product_name, product_type_id, price, stock) "
                    + "VALUES (?, ?, ?, ?)";
        sql = mysql.format(sql, [productName, productTypeId, price, stock]);

        return await pool.query(sql);
    },

    createUsers: async (pool, username, password, firstName, lastName, email) => {
        var sql = "INSERT INTO users (user_name, user_pwd, first_name, last_name, email) "
                    + "VALUES (?, ?, ?, ?, ?)";
        sql = mysql.format(sql, [username, password, firstName, lastName, email]);

        return await pool.query(sql);
    },

    createComment1: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment1 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment2: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment2 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment3: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment3 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment4: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment4 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment5: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment5 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment6: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment6 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment7: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment7 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment8: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment8 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment9: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment9 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment10: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment10 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment11: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment11 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment12: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment12 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment13: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment13 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment14: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment14 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment15: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment15 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment16: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment16 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment17: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment17 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment18: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment18 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment19: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment19 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment20: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment20 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment21: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment21 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment22: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment22 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment23: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment23 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },
    createComment24: async (pool, usercom, comment) => {
        var sql = "INSERT INTO comment24 (user_com, comment) "
                    + "VALUES (?, ?)";
        sql = mysql.format(sql, [usercom, comment]);

        return await pool.query(sql);
    },

    getByProductId: async (pool, productId) => {
        var sql = "SELECT * FROM products WHERE product_id = ?";
        sql = mysql.format(sql, [productId]);

        return await pool.query(sql);
    },

    updateProduct: async (pool, productId, productName, productTypeId, price, stock) => {
        var sql = "UPDATE products SET "
                + "product_name=?,"
                + "product_type_id=?,"
                + "price=?,"
                + "stock=? "
                + "WHERE product_id = ?";
        sql = mysql.format(sql, [productName, productTypeId ,price, stock, productId]);

        return await pool.query(sql);
    },

    deleteProduct: async (pool, productId) => {
        var sql = "DELETE FROM products WHERE product_id = ?";
        sql = mysql.format(sql, [productId]);

        return await pool.query(sql);
    },

    updateImage: async (pool, productId, fileName) => {
        var sql = "UPDATE products SET image_url = ? "
                    + "WHERE product_id = ?";
        sql = mysql.format(sql, [fileName, productId]);

        return await pool.query(sql);
    },

    getSumProduct: async (pool) => {
        var sql = "SELECT a.product_type_id,"
                    + "b.product_type_name,"
                    + "SUM(a.stock) as product_count "
                    + "FROM products a "
                    + "JOIN product_types b ON a.product_type_id = b.product_type_id "
                    + "GROUP BY a.product_type_id, b.product_type_name";
        
        return await pool.query(sql);
    }
}