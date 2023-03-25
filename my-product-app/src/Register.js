import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { API_GET } from "./api";

export default function Register() {
  let params = useParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [validated, setValidated] = useState(false);
  const [userId, setUserId] = useState(0);
  const [gender, setGender] = useState(0);

  useEffect(() => {
    async function fetchData(userId) {
      let json = await API_GET("register");

      var data = json.data[0];

      setUserId(data.user_id);
      setUsername(data.user_name);
      setPassword(data.user_pwd);
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setEmail(data.email);
      setGender(data.gender);
    }

    if (params.userId != "add") {
      fetchData([params.userId]);
    }
  }, [params.userId]);

  // const doCreateUsers = async () => {
  //     const response = await fetch(
  //         "http://localhost:8000/register",
  //         {
  //             method: "POST",
  //             headers: {
  //                 Accept: "application/json",
  //                 'Content-Type': 'application/json',
  //                 Authorization: "Bearer " + localStorage.getItem("access_token")
  //             },
  //             body: JSON.stringify({
  //                 user_name: username,
  //                 user_pwd: password,
  //                 first_name: firstName,
  //                 last_name: lastName,
  //                 email : email
  //             })
  //         }
  //     );
  //     let json = await response.json();
  //     if (json.result) {
  //         window.location = "/";
  //     }
  // }

  const onSave = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    const response = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        user_name: username,
        user_pwd: password,
        first_name: firstName,
        last_name: lastName,
        email: email,
        gender: gender,
      }),
    });
    let json = await response.json();
    if (json.result) {
      window.location = "/";
    }
  };

  return (
    <>
      <div id="userDetail" className="container m-auto">
        <Form noValidate validated={validated} onSubmit={onSave}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="validateUserName">
              <Form.Label>username</Form.Label>
              <Form.Control
                required
                type="text"
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอก username
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="validatePassWord">
              <Form.Label>password</Form.Label>
              <Form.Control
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอก password
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="validateFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                value={firstName}
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอก First Name
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="validateLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอก Last Name
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="validateEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอก Email
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="validateGender">
              <Form.Label>Gender </Form.Label>
              <Form.Control
                required
                type="text"
                value={gender}
                placeholder="Gender"
                onChange={(e) => setGender(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอก Gender
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
