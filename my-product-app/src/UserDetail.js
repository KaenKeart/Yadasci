// import 'bootstrap/dist/css/bootstrap.min.css';
import { API_GET, API_POST } from "./api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function UserDetail() {
  let params = useParams();

  const [userId, setUserId] = useState(0);
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    async function fetchData(userId) {
      const response = await fetch("http://localhost:8000/api/user", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      let json = await response.json();
      setUserId(json.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData(userId) {
      let json = await API_GET("user/" + userId);

      var data = json.data[0];

      setUserId(data.user_id);
      setUserName(data.user_name);
      setPassWord(data.user_pwd);
      setFirstName(data.first_name);
      setLastName(data.lastname);
      setEmail(data.email);
      setGender(data.gender);
    }

    if (params.userId != "add") {
      fetchData([params.userId]);
    }
  }, [params.userId]);

  const doCreateUsers = async () => {
    const response = await fetch("http://localhost:8000/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        user_name: username,
        user_pwd: password,
        first_name: firstname,
        last_name: lastname,
        email: email,
        gender: gender,
      }),
    });
    let json = await response.json();
    if (json.result) {
      window.location = "/home";
    }
  };

  const doUpdateUsers = async () => {
    const json = await API_POST("user/update/" + userId, {
      user_name: username,
      user_pwd: password,
      first_name: firstname,
      last_name: lastname,
      email: email,
      gender: gender,
    });

    if (json.result) {
      window.location = "/api/user";
    }
  };

  const onSave = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (params.productId == "add") {
        doCreateUsers();
      } else {
        doUpdateUsers();
      }
    }

    setValidated(true);
  };

  return (
    <>
      <div id="UserDetail" className="container m-auto">
        <Form noValidate validated={validated} onSubmit={onSave}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="validateUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                value={username}
                placeholder="username"
                onChange={(e) => setUserName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอก Username
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="validatePassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassWord(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอก Password
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="validateFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                value={firstname}
                placeholder="Firstname"
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
                value={lastname}
                placeholder="Lastname"
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
              <Form.Label>Gender</Form.Label>
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
