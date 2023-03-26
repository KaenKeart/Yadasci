import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { API_GET, API_POST } from "./api";
import ProductItem from "./Productitem";
import Comment from "./Comment";

export default function Home() {
  const [productTypes, setProductTypes] = useState([]);
  const [productTypeId, setProductTypeId] = useState(0);
  const [products, setProducts] = useState([]);

  const [comment, setComment] = useState("");
  const [commentTypes, setCommentTypes] = useState([]);
  const [commentTypeId, setCommentTypeId] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/api/product_types", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      let json = await response.json();
      setProductTypes(json.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:8080/api/products/type/" + productTypeId,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );

      const json = await response.json();
      setProducts(json.data);
    }

    fetchData();
  }, [productTypeId]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/api/product_types", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      let json = await response.json();
      setProductTypes(json.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:8080/api/products/type/" + productTypeId,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );

      const json = await response.json();
      setProducts(json.data);
    }

    fetchData();
  }, [productTypeId]);

  //
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/api/comment_types", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      let json = await response.json();
      setCommentTypes(json.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:8080/api/comment/type/" + commentTypeId,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      );

      const json = await response.json();
      setComment(json.data);
    }

    fetchData();
  }, [commentTypeId]);
  //

  const fetchProducts = async () => {
    let json = await API_GET("products/type/" + productTypeId);
    setProducts(json.data);
  };

  const onDelete = async (data) => {
    let json = await API_POST("product/delete", {
      product_id: data.product_id,
    });

    if (json.result) {
      fetchProducts();
    }
  };

  const fetchComment = async () => {
    let json = await API_GET("comment/type/" + commentTypeId);
    setComment(json.data);
  };

  const onDeleteComment = async (data) => {
    let json = await API_POST("comment/delete", {
      comment_id: data.comment_id,
    });

    if (json.result) {
      fetchComment();
    }
  };

  if (localStorage.getItem("access_token")) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <select
              value={productTypeId}
              onChange={(e) => setProductTypeId(e.target.value)}
            >
              <option value={0}>ทุกประเภทสินค้า</option>
              {productTypes.map((item) => (
                <option key={item.product_type_id} value={item.product_type_id}>
                  {item.product_type_name}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            <select
              value={commentTypeId}
              onChange={(e) => setCommentTypeId(e.target.value)}
            >
              <option value={0}>ทุกประเภทคอมเมนต์</option>
              {commentTypes &&
                commentTypes.map((item) => (
                  <option
                    key={item.comment_type_id}
                    value={item.comment_type_id}
                  >
                    {item.comment}
                  </option>
                ))}
            </select>
          </div>
          <div className="col">
            <Link to={"/product/add"} className="btn btn-outline-primary me-3">
              เพิ่มสินค้า
            </Link>
            <Link to={"/comment/add"} className="btn btn-outline-primary me-3">
              เพิ่มคอมเมนต์
            </Link>
            <Link to={"/report"} className="btn btn-outline-primary me-3">
              รายงาน
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            {products.map((item) => (
              <ProductItem
                key={item.product_id}
                data={item}
                onDelete={onDelete}
              />
            ))}
          </div>
          <div className="col">
            {comment.map((item) => (
              <Comment key={item.comment_id} data={item} onDelete={onDelete} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <Navigate to="/" replace />;
}
