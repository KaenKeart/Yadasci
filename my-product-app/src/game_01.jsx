import { Carousel } from 'react-bootstrap';
import Footer from './footer';
import Navbar from './Navbar';  
import game_01 from '../src/img/game_01.jpg'
import game_01_2 from '../src/img/game_01-2.jpg'
import './game.css';





function Game01() {

    return (

<div>
    <Navbar/> 
     <div id="slide_game">
            <Carousel >
      <Carousel.Item interval={1000}>
    <img src={game_01} className="img_responsive" alt="..."  />
      </Carousel.Item>
      <Carousel.Item interval={500}>
    <img src={game_01_2} className="img_responsive" alt="..."/>
      </Carousel.Item>
    </Carousel> 
     </div>
    <section id="basket">
                          <form className="cart" action="#" method="post" encType="multipart/form-data">
                          <div className="quantity">
                            <h4 >คฤหาสน์วิปลาส (ภาคเสริม) ถนนลี้ลับแห่งอาร์คัม</h4>		
        <ul className="elementor-icon-list-items">
          <li className="elementor-icon-list-item">
            <span className="elementor-icon-list-icon">
				</span>
            <span className="elementor-icon-list-text">ประเภทบอร์ดเกม: กลยุทธ์</span>
          </li>
          <li className="elementor-icon-list-item">
            <span className="elementor-icon-list-icon">
				</span>
            <span className="elementor-icon-list-text">อายุ: 14+</span>
          </li>
          <li className="elementor-icon-list-item">
            <span className="elementor-icon-list-icon">
				</span>
            <span className="elementor-icon-list-text">จำนวนผู้เล่น: 1-5 คน</span>
          </li>
          <li className="elementor-icon-list-item">
            <span className="elementor-icon-list-icon">
				</span>
            <span className="elementor-icon-list-text">เวลาในการเล่น: 60-90 นาที</span>
          </li>
        </ul>

        <p>฿2650</p>  
                          <input type="number" id="quantity_63f673ea16af6" className="input-text qty text" step={1} min={1} max name="quantity" defaultValue={1} title="จำนวน" size={4} placeholder inputMode="numeric" autoComplete="off" />
                          </div>
                          
                          <button type="submit" name="add-to-cart" value={31988} className="single_add_to_cart_button button alt">หยิบใส่ตะกร้า</button>
                        </form>
      </section>

<div style={{ padding: "20px" }}>
  <textarea
    placeholder="แกน"
    defaultValue={""}
    style={{
      margin: "20px",
      width: "300px",
      height: "200px",
      backgroundColor: "#F5F5F5",
      color: "#333"
    }}
  />
</div>




    
    <Footer/>
</div>      

   )
}
export default Game01;