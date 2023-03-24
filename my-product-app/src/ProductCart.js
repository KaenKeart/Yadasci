// import 'bootstrap/dist/css/bootstrap.min.css';
import { API_GET } from "./api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";


export default function ProductDetail() {
  let params = useParams();

  const [productId, setProductId] = useState(0);
  const [productName, setProductName] = useState("");
  const [productTypes, setProductTypes] = useState([]);
  const [productTypeId, setProductTypeId] = useState(0);
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [sales, setsales] = useState(0);
  const [validated, setValidated] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  //ใช้ดึงข้อมูล
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/api/product_types", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      let json = await response.json();
      setProductTypes(json.data);
    }
    fetchData();
  }, []);
  //
  useEffect(() => {
    async function fetchData(productId) {
      let json = await API_GET("product/" + productId);

      var data = json.data[0];

      setProductId(data.product_id);
      setProductName(data.product_name);
      setProductTypeId(data.product_type_id);
      setPrice(data.price);
      setStock(data.stock);
      setImageUrl(data.image_url);
    }

    if (params.productId != "add") {
      fetchData([params.productId]);
    }
  }, [params.productId]);

  const doCreateCart = async () => {
    const response = await fetch("http://localhost:8000/api/product/cart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      body: JSON.stringify({
        sales: sales,
      }),
    });
    let json = await response.json();
    if (json.result) {
      window.location = "/home";
    }
  };


  //ใช้เก็บข้อมูล
  const onSave = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {

        doCreateCart();

    }

    setValidated(true);
  };

  return (
    <>
      <div id="ProductDetail" className="container m-auto">
        <Form noValidate validated={validated} onSubmit={onSave}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="validateProductName">
              <Form.Label>จำนวนสินค้า</Form.Label>
              <Form.Control
                required
                type="number"
                value={stock}
                min={0}
                placeholder="ราคาสินค้า"
                onChange={(e) => setStock(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอก จำนวนสินค้า
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
