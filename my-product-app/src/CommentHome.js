import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { API_GET, API_POST } from "./api";
import Commentitem from "./Commentitem";

export default function CommentHome(props) {
  const [commentTypes, setCommentTypes] = useState([]);
  const [commentTypeId, setCommentTypeId] = useState(0);
  const [comments, setComments] = useState([]);

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

  if (localStorage.getItem("access_token")) {
    return (
      <div className="container">
        <select
          value={commentTypeId}
          onChange={(e) => setCommentTypeId(e.target.value)}
        >
          <option value={0}>ทุกประเภทสินค้า</option>
          {commentTypes.map((item) => (
            <option key={item.comment_type_id} value={item.comment_type_id}>
              {item.comment_type_name}
            </option>
          ))}
        </select>

        <Link to={"/comment/add"} className="btn btn-outline-primary me-3">
          เพิ่ม
        </Link>

        <Link to={"/report"} className="btn btn-outline-primary me-3">
          รายงาน
        </Link>

        <div className="container mt-3">
          {comments.map((item) => (
            <Commentitem
              key={item.comment_id}
              data={item}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    );
  }

  return <Navigate to="/" replace />;
}
