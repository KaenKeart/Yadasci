import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { API_GET } from "./api";

export default function Comment11() {
  let params = useParams();
  const [usercom, setUserCom] = useState("");
  const [comment, setComment] = useState("");
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let json = await API_GET("comment/add/11");
      var data = json.data[0];

      setUserCom(data.user_com);
      setComment(data.comment);
    }

    fetchData();
  }, [params.userId]);

  const onSave = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    const response = await fetch("http://localhost:8000/comment/add/11", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        user_com: usercom,
        comment: comment,
      }),
    });

    let json = await response.json();

    if (json.result) {
      window.location = "/game_11";
    }
  };

  return (
    <>
      <div id="Comment" className="container m-auto">
        <Form noValidate validated={validated} onSubmit={onSave}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="validateUserCom">
              <Form.Label>User</Form.Label>
              <Form.Control
                required
                type="text"
                value={usercom}
                placeholder="Username"
                onChange={(e) => setUserCom(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอก Username
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="validateComment">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                required
                type="text"
                value={comment}
                placeholder="Comment"
                onChange={(e) => setComment(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอก Comment
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
