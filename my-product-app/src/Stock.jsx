import Footer from "./footer";
import { API_GET, API_POST } from "./api";
import ProductItem from "./Productitem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo_YADA from "../src/img/Logo_YADA.png";
import "./Navbar.css";

function Stock() {
  const [productTypes, setProductTypes] = useState([]);
  const [productTypeId, setProductTypeId] = useState(0);
  const [products, setProducts] = useState([]);
  const [shouldShowDeleteButton, setShouldShowDeleteButton] = useState(true);
  const [shouldShowEditButton, setShouldShowEditbutton] = useState(true);

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

  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://getbootstrap.com/docs/5.3/assets/css/docs.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="Project_01.css" type="text/css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="bootstrap/css/bootstrap.min.css"
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
                  <li className="nav-item">
                    <Link
                      to="/home"
                      className="nav-link active"
                      aria-current="page"
                    >
                      หน้าหลัก
                    </Link>
                  </li>

                  <Link to={"/stock"} className="nav-link">
                    คลังสินค้า
                  </Link>
                  <Link to=" " className="nav-link">
                    ประเภทสินค้า
                  </Link>
                  <Link to={"/product/add"} className="nav-link">
                    เพิ่มสินค้า
                  </Link>
                  <Link to={"/report"} className="nav-link">
                    รายงาน
                  </Link>
                  <Link to=" " className="nav-link">
                    <i class="bi bi-cart3" id="cart-icon"></i>
                  </Link>
                </ul>
                <Link to="/user_info" className="nav-link" id="UserNav">
                  ข้อมูลผู้ใช้
                </Link>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div className="container mt-3">
        {products.map((item) => (
          <ProductItem
            key={item.product_id}
            data={item}
            onDelete={onDelete}
            showButtons={true}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
export default Stock;
