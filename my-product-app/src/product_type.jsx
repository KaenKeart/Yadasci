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
      <table>
        <tr>
          <td>
            <div id="type1" className="container mt-3">
              <h1 className="text-center">
                <span style={{ color: "#000000" }}>
                  <i class="bi bi-stars"></i>
                  บอร์ดเกม
                </span>
                <span style={{ color: "#5B785B" }}>เด็ก</span>
              </h1>
              {products
                .filter((item) => [1].includes(item.product_type_id))
                .map((item) => (
                  <ProductItem
                    key={item.product_type_id}
                    data={item}
                    onDelete={onDelete}
                    showButtons={true}
                  />
                ))}
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div id="type2" className="container mt-3">
              <h1 className="text-center">
                <span style={{ color: "#000000" }}>
                  <i class="bi bi-stars"></i>
                  บอร์ดเกม
                </span>
                <span style={{ color: "#5B785B" }}>ภาคเสริม</span>
              </h1>
              {products
                .filter((item) => [2].includes(item.product_type_id))
                .map((item) => (
                  <ProductItem
                    key={item.product_type_id}
                    data={item}
                    onDelete={onDelete}
                    showButtons={true}
                  />
                ))}
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div id="type3" className="container mt-3">
              <h1 className="text-center">
                <span style={{ color: "#000000" }}>
                  <i class="bi bi-stars"></i>
                  บอร์ดเกม
                </span>
                <span style={{ color: "#5B785B" }}>เก่า</span>
              </h1>
              {products
                .filter((item) => [3].includes(item.product_type_id))
                .map((item) => (
                  <ProductItem
                    key={item.product_type_id}
                    data={item}
                    onDelete={onDelete}
                    showButtons={true}
                  />
                ))}
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div id="type4" className="container mt-3">
              <h1 className="text-center">
                <span style={{ color: "#000000" }}>
                  <i class="bi bi-stars"></i>
                  บอร์ดเกม
                </span>
                <span style={{ color: "#5B785B" }}>ยอดนิยม</span>
              </h1>
              {products
                .filter((item) => [4].includes(item.product_type_id))
                .map((item) => (
                  <ProductItem
                    key={item.product_type_id}
                    data={item}
                    onDelete={onDelete}
                    showButtons={true}
                  />
                ))}
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div id="type4" className="container mt-3">
              <h1 className="text-center">
                <span style={{ color: "#000000" }}>
                  <i class="bi bi-stars"></i>
                  บอร์ดเกม
                </span>
                <span style={{ color: "#5B785B" }}>มาใหม่</span>
              </h1>
              {products
                .filter((item) => [5].includes(item.product_type_id))
                .map((item) => (
                  <ProductItem
                    key={item.product_type_id}
                    data={item}
                    onDelete={onDelete}
                    showButtons={true}
                  />
                ))}
            </div>
          </td>
        </tr>
      </table>
      <br />
      <br />

      <Footer />
    </div>
  );
}
export default ProductType;
