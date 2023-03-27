import Footer from "./footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./contact.css";

import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { API_GET, API_POST } from "./api";
import CommentItem from "./Commentitem";
import ContactItem from "./Contactitem";
import { useParams } from "react-router-dom";
import ProductItem from "./Productitem";

export default function Contact(props) {
  let params = useParams();
  const [commentTypes, setCommentTypes] = useState([]);
  const [commentTypeId, setCommentTypeId] = useState(0);
  const [comments, setComments] = useState([]);
  const [contactId, setContactId] = useState(0);
  const [contacts, setContacts] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [productTypeId, setProductTypeId] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      let json = await response.json();
      setContactId(json.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:8000/api/contact" + contactId,
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
      setContacts(json.data);
    }

    fetchData();
  }, [contactId]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/api/comment_types", {
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
        "http://localhost:8000/api/comments/type/" + commentTypeId,
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
      setComments(json.data);
    }

    fetchData();
  }, [commentTypeId]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/api/product_types", {
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
        "http://localhost:8000/api/products/type/" + productTypeId,
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

  const fetchComments = async () => {
    let json = await API_GET("comments/type/" + commentTypeId);
    setComments(json.data);
  };

  const onDelete = async (data) => {
    let json = await API_POST("comment/delete", {
      comment_id: data.comment_id,
    });

    if (json.result) {
      fetchComments();
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/api/product_types", {
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
        "http://localhost:8000/api/products/type/" + productTypeId,
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

  if (localStorage.getItem("access_token"))
    return (
      <div>
        <Navbar />
        <div className="container mt-3">
          {products
            .filter((item) => [25, 26, 27, 28, 29].includes(item.product_id))
            .map((item) => (
              <ProductItem key={item.product_id} data={item} />
            ))}
        </div>

        <div className="btn me-3">
          <select
            value={commentTypeId}
            onChange={(e) => setCommentTypeId(e.target.value)}
          >
            <option value={0}>ความพึงพอใจ</option>
            {commentTypes.map((item) => (
              <option key={item.comment_type_id} value={item.comment_type_id}>
                {item.comment_type_name}
              </option>
            ))}
          </select>
        </div>

        <Link to={"/comment/add"} className="btn btn-outline-primary me-3">
          Comment
        </Link>

        <Link to={"/ReportComment"} className="btn btn-outline-primary me-3">
          Report
        </Link>

        <div className="container mt-3">
          {comments.map((item) => (
            <CommentItem
              key={item.comment_id}
              data={item}
              onDelete={onDelete}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
}
