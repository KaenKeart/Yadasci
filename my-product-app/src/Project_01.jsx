import { Carousel } from "react-bootstrap";
import Game01 from "../src/img/Game01.PNG";
import Game02 from "../src/img/Game02.png";
import Game03 from "../src/img/Game03.png";
import Game04 from "../src/img/Game04.png";
import Footer from "./footer";
import Navbar from "./Navbar";
import "./Project_01.css";
import { API_GET, API_POST } from "./api";
import ProductItem from "./Productitem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Project() {
  const [productTypes, setProductTypes] = useState([]);
  const [productTypeId, setProductTypeId] = useState(0);
  const [products, setProducts] = useState([]);

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
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css"
        rel="stylesheet"
      />
      <Navbar />
      <div id="slide">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              src={Game01}
              width={800}
              className="img_responsive"
              alt="..."
              height={400}
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              src={Game02}
              width={800}
              className="img_responsive"
              alt="..."
              height={400}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Game03}
              width={800}
              className="img_responsive"
              alt="..."
              height={400}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Game04}
              width={800}
              className="img_responsive"
              alt="..."
              height={400}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <br />
      <br />
      <h1 className="text-center">
        <span style={{ color: "#000000" }}>
          <i class="bi bi-stars"></i>
          บอร์ดเกม
        </span>
        <span style={{ color: "#5B785B" }}>มาใหม่</span>
      </h1>
      <main>
        <div className="container mt-3">
          {products
            .filter((item) => [21, 11, 24].includes(item.product_id))
            .map((item) => (
              <ProductItem
                key={item.product_id}
                data={item}
                onDelete={onDelete}
              />
            ))}
        </div>
      </main>
      <div className="toast-container position-fixed bottom-0 end-0 p-5">
        <div
          className="toast fade show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <svg
              className="bd-placeholder-img rounded me-2"
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid
                      slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#5B785B" />
            </svg>
            <strong className="me-auto">YADASCI</strong>
            <small className="text-muted">just now</small>
          </div>
          <div className="toast-body">
            Welcome to YADASCI Board Game{" "}
            <Link
              to="/contact"
              className="btn"
              id="ContactUs"
              style={{ fontSize: "10px" }}
            >
              Contact us
            </Link>
          </div>

          <div class="container"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Project;
