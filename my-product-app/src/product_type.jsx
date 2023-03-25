import Footer from "./footer";
import Navbar from "./Navbar";
import "./product_type.css";
import { API_GET, API_POST } from "./api";
import ProductItem from "./Productitem";
import { useEffect, useState } from "react";

function ProductType() {
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
      <Navbar />
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
export default ProductType;
