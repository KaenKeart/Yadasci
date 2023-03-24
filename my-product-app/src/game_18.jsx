import { Carousel } from 'react-bootstrap';
import Footer from './footer';
import Navbar from './Navbar';  
import game_18 from '../src/img/game_18.jpg'
import game_18_1 from '../src/img/game_18-1.jpg'
import './game.css';
import { Link } from "react-router-dom";
function Game18() {

    return (

<div>
    <Navbar/> 
     <div id="slide_game">
            <Carousel >
      <Carousel.Item interval={1000}>
    <img src={game_18} className="img_responsive" alt="..."  />
      </Carousel.Item>
      <Carousel.Item interval={500}>
    <img src={game_18_1} className="img_responsive" alt="..."/>
      </Carousel.Item>
    </Carousel> 
     </div>
    <section id="basket">
                          <form className="cart" action="#" method="post" encType="multipart/form-data">
                          <div className="quantity">
                            <h4 >ผู้ตรวจการแห่งนอตติงแฮม (เกมฮิต)</h4>		
        <ul className="elementor-icon-list-items">
          <li className="elementor-icon-list-item">
            <span className="elementor-icon-list-icon">
				</span>
            <span className="elementor-icon-list-text">ประเภทบอร์ดเกม: ปาร์ตี้</span>
          </li>
          <li className="elementor-icon-list-item">
            <span className="elementor-icon-list-icon">
				</span>
            <span className="elementor-icon-list-text">อายุ: 14+</span>
          </li>
          <li className="elementor-icon-list-item">
            <span className="elementor-icon-list-icon">
				</span>
            <span className="elementor-icon-list-text">จำนวนผู้เล่น: 3-5 คน</span>
          </li>
          <li className="elementor-icon-list-item">
            <span className="elementor-icon-list-icon">
				</span>
            <span className="elementor-icon-list-text">เวลาในการเล่น: 60 นาที</span>
          </li>
        </ul>

        <p>฿1450</p>  
                          <input type="number" id="quantity_63f673ea16af6" className="input-text qty text" step={1} min={1} max name="quantity" defaultValue={1} title="จำนวน" size={4} placeholder inputMode="numeric" autoComplete="off" />
                          </div>
                          
                          <button type="submit" name="add-to-cart" value={31988} className="single_add_to_cart_button button alt">หยิบใส่ตะกร้า</button>
                        </form>
      </section>
 
      <h3 id="DetailGame">รายละเอียด เกมเจรจาต่อรองที่มาในรูปแบบของการนำสินค้าเข้าเมืองที่เต็มไปด้วยการชิงเหลียมเพื่อชัยชนะ เกมนี้ผู้เล่นจะสวมบทบาทพ่อค้าแม่ค้า และจะต้องทำทุกวิถีทางเพื่อทำกำไรให้ได้มากที่สุดจากสินค้าที่มี ทั้งจากสินค้าที่ได้รับอนุญาต หรือลักลอบขนของเถี่อนราคาแพงเข้ามาขาย  ชึ่งปราการด่านแรกนั้นคือท่านผู้ตรวจการหน้าเลือดแห่งเมืองนอตทิงแฮม</h3>
      <Link to={`http://localhost:3000/comment/add/18`}>Comment</Link>
    <Footer/>
</div>      

   )
}
export default Game18;