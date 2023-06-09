// import 'bootstrap/dist/css/bootstrap.min.css';
import { API_GET, API_POST } from "./api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function CommentDetail() {
  let params = useParams();

  const [commentId, setCommentId] = useState(0);
  const [commentName, setCommentName] = useState("");
  const [commentTypes, setCommentTypes] = useState([]);
  const [commentTypeId, setCommentTypeId] = useState(0);
  const [validated, setValidated] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/api/comment_types", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      let json = await response.json();
      setCommentTypes(json.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/api/comment_types", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      let json = await response.json();
      setCommentTypes(json.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData(commentId) {
      let json = await API_GET("comment/" + commentId);

      var data = json.data[0];

      setCommentId(data.comment_id);
      setCommentName(data.comment_name);
      setCommentTypeId(data.comment_type_id);
    }

    if (params.commentId !== "add") {
      fetchData([params.commentId]);
    }
  }, [params.commentId]);

  const doCreateComment = async () => {
    const response = await fetch("http://localhost:8000/api/comment/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        comment_name: commentName,
        comment_type_id: commentTypeId,
      }),
    });
    let json = await response.json();
    if (json.result) {
      window.location = "/contact";
    }
  };

  const doUpdateComment = async () => {
    const json = await API_POST("comment/update", {
      comment_id: commentId,
      comment_name: commentName,
      comment_type_id: commentTypeId,
    });

    if (json.result) {
      window.location = "/contact";
    }
  };

  const onSave = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (params.commentId === "add") {
        doCreateComment();
      } else {
        doUpdateComment();
      }
    }

    setValidated(true);
  };

  return (
    <>
      <div className="container m-auto">
        <Form noValidate validated={validated} onSubmit={onSave}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="validateCommentName">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                required
                type="text"
                value={commentName}
                placeholder="Comment"
                onChange={(e) => setCommentName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอก Comment
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="validateCommentName">
              <Form.Label>ความพึงพอใจ</Form.Label>
              <Form.Select
                value={commentTypeId}
                onChange={(e) => setCommentTypeId(e.target.value)}
                required
              >
                <option label="ความพึงพอใจ"></option>
                {!loading &&
                  commentTypes &&
                  commentTypes.map((item) => (
                    <option
                      key={item.comment_type_id}
                      value={item.comment_type_id}
                    >
                      {item.comment_type_name}
                    </option>
                  ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                กรุณากรอก ความพึงพอใจ
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Button variant="primary" as="input" type="submit" value="SAVE" />
          </Row>
        </Form>
      </div>
    </>
  );
}
