import React from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Logo_YADA from "../src/img/Logo_YADA.png";

export default function Navbar() {
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://getbootstrap.com/docs/5.3/assets/css/docs.css"
        rel="stylesheet"
      />
      <header>
        <nav
          className="navbar navbar-expand-lg "
          style={{ backgroundColor: "#5B785B" }}
        >
          <div className="container-fluid">
            <Link to="/home" href="Project_01.html">
              <img src={Logo_YADA} alt="..." width={120} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                >
                  หน้าหลัก
                </Link>

                <Link to={"/stock"} className="nav-link btn">
                  คลังสินค้า
                </Link>
                <Link to="/product_type" className="nav-link btn">
                  ประเภทสินค้า
                </Link>

                <Link to=" " className="nav-link btn">
                  <i class="bi bi-cart3" id="cart-icon"></i>
                </Link>
              </ul>
              <Link to="/user_info" className="nav-link btn" id="UserNav">
                ข้อมูลผู้ใช้
              </Link>
              <Link
                to="/"
                className="btn btn-danger"
                style={{ marginRight: "5px" }}
              >
                Logout
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
