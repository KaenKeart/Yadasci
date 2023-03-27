import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { API_GET, API_POST } from "./api";
import Footer from "./footer";
import Navbar from "./Navbar";
import UserItem from "./Useritem";

export default function User() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/api/user", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      let json = await response.json();
      setUserId(json.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/api/user/" + userId, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      const json = await response.json();
      setUsers(json.data);
    }

    fetchData();
  }, [userId]);

  const fetchUsers = async () => {
    let json = await API_GET("user/" + userId);
    setUsers(json.data);
  };

  const onDelete = async (data) => {
    let json = await API_POST("user/delete", {
      user_id: data.user_id,
    });

    if (json.result) {
      fetchUsers();
    }
  };

  if (localStorage.getItem("access_token")) {
    return (
      <div className="container">
        <Navbar />
        <Link to={"/register"} className="btn btn-outline-primary me-3">
          เพิ่ม
        </Link>

        <Link to={"/user/report"} className="btn btn-outline-primary me-3">
          รายงาน
        </Link>

        <div className="container mt-3">
          {users.map((item) => (
            <UserItem key={item.user_id} data={item} onDelete={onDelete} />
          ))}
        </div>
        <Footer />
      </div>

    );
  }

  return <Navigate to="/user" replace />;
}
