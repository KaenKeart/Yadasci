import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Game01 from '../src/img/Game01.PNG'
import Game02 from '../src/img/Game02.png'
import Game03 from '../src/img/Game03.png'
import Game04 from '../src/img/Game04.png'
import Game11 from '../src/img/game_11.jpg'
import Game21 from '../src/img/game_21.jpg'
import Game24 from '../src/img/game_24.jpg'
import FavCart from './FavCart'
import Footer from './footer'
import Navbar from './Navbar'
import style from './Project_01.css'
import { API_GET, API_POST } from "./api"
import ProductItem from "./Productitem"
import { useEffect, useState } from "react"

function Project() {
  const [productTypes, setProductTypes] = useState([]);
    const [productTypeId, setProductTypeId] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "http://localhost:8000/api/product_types",
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        'content-Type': 'application/json',
                        Authorization: "Bearer " + localStorage.getItem("access_token")
                    }
                }
            );

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
                        'content-Type': 'application/json',
                        Authorization: "Bearer " + localStorage.getItem("access_token")
                    }
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
    }

    const onDelete = async (data) => {
        let json = await API_POST("product/delete", {
            product_id: data.product_id
        });

        if (json.result) {
            fetchProducts();
        }
    }


    return (
        <div>
          <Navbar/> 
          <div id="slide">
            <Carousel >
      <Carousel.Item interval={1000}>
                  <img src={Game01} width={800} className="img_responsive" alt="..." height={400} />
      </Carousel.Item>
      <Carousel.Item interval={500}>
                  <img src={Game02} width={800} className="img_responsive" alt="..." height={400} />
      </Carousel.Item>
      <Carousel.Item>
                  <img src={Game03} width={800} className="img_responsive" alt="..." height={400} />
      </Carousel.Item>
      <Carousel.Item>
                  <img src={Game04} width={800} className="img_responsive" alt="..." height={400} />
      </Carousel.Item>
    </Carousel>
     </div>

  <br />
  <br />
  <h1 className="text-center"><span style={{color: '#000000'}}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-stars" viewBox="0 0 16 16">
        <path d="M7.657
                          6.247c.11-.33.576-.33.686 0l.645
                          1.937a2.89
                          2.89 0 0 0 1.829
                          1.828l1.936.645c.33.11.33.576 0
                          .686l-1.937.645a2.89 2.89 0 0
                          0-1.828
                          1.829l-.645
                          1.936a.361.361 0 0 1-.686
                          0l-.645-1.937a2.89
                          2.89 0 0
                          0-1.828-1.828l-1.937-.645a.361.361 0
                          0 1
                          0-.686l1.937-.645a2.89 2.89 0 0 0
                          1.828-1.828l.645-1.937zM3.794
                          1.148a.217.217
                          0 0 1 .412
                          0l.387 1.162c.173.518.579.924 1.097
                          1.097l1.162.387a.217.217 0 0 1 0
                          .412l-1.162.387A1.734
                          1.734 0 0 0 4.593 5.69l-.387
                          1.162a.217.217
                          0 0 1-.412
                          0L3.407 5.69A1.734 1.734 0 0 0 2.31
                          4.593l-1.162-.387a.217.217 0 0 1
                          0-.412l1.162-.387A1.734
                          1.734 0 0 0 3.407
                          2.31l.387-1.162zM10.863.099a.145.145
                          0
                          0 1 .274
                          0l.258.774c.115.346.386.617.732.732l.774.258a.145.145
                          0
                          0 1 0 .274l-.774.258a1.156 1.156 0 0
                          0-.732.732l-.258.774a.145.145 0 0
                          1-.274
                          0l-.258-.774a1.156 1.156 0 0
                          0-.732-.732L9.1
                          2.137a.145.145 0 0 1
                          0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
      </svg>บอร์ดเกม</span>
    <span style={{color: '#5B785B'}}>มาใหม่</span>
  </h1>
  <main>
  <div className="container mt-3">
    {
        products.filter(item => [22, 23, 24].includes(item.product_id))
        .map(item => (
            <ProductItem 
                key={item.product_id}
                data={item} 
                onDelete={onDelete} 
            />
        ))
    }
</div>
    
    <section>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_21.html"><img src={Game21} className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>เกาะภูตพิทักษ์</h6>
          <div className="text-end text-danger">2,995 ราคา
          </div>
          <FavCart/>

        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_11.html"><img src={Game11} className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>คฤหาสน์วิปลาส ถนนลี้ลับแห่งอาร์คัม</h6>
          <div className="text-end text-danger">2,650 ราคา
          </div>
          <FavCart/>

        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_24.html"><img src={Game24} className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>เมืองอาชญากรนครย่อส่วนฟูลเฮาส์</h6>
          <div className="text-end text-danger">1,100 ราคา
          </div>
          <FavCart/>
        </div>
      </div>
    </section>
  </main>
  <div className="toast-container position-fixed bottom-0 end-0
          p-3">
    <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <svg className="bd-placeholder-img rounded me-2" width={20} height={20} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid
                      slice" focusable="false"><rect width="100%" height="100%" fill="#5B785B" /></svg>
        <strong className="me-auto">YADA</strong>
        <small className="text-muted">just now</small>
         <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
      </div>
      
      <div className="toast-body">
        Welcome to YADASCI Board Game
      </div>
    </div>
  </div>
  <Footer/> 
</div>

    )
}
export default Project;