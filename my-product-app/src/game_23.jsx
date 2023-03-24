import { Carousel } from 'react-bootstrap';
import Footer from './footer';
import Navbar from './Navbar';  
import game_23 from '../src/img/game_23.jpg'
import game_23_1 from '../src/img/game_23-1.jpg'
import './game.css';
import { Link } from "react-router-dom";
function Game23() {

    return (

<div>
    <Navbar/> 
     <div id="slide_game">
            <Carousel >
      <Carousel.Item interval={1000}>
    <img src={game_23} className="img_responsive" alt="..."  />
      </Carousel.Item>
      <Carousel.Item interval={500}>
    <img src={game_23_1} className="img_responsive" alt="..."/>
      </Carousel.Item>
    </Carousel> 
     </div>
    <section id="basket">
                          <form className="cart" action="#" method="post" encType="multipart/form-data">
                          <div className="quantity">
                            <h4 >หนึ่งคืนปริศนาเกมล่ามนุษย์หมาป่า (เกมเก่า)</h4>		
        <ul className="elementor-icon-list-items">
          <li className="elementor-icon-list-item">
            <span className="elementor-icon-list-icon">
				</span>
            <span className="elementor-icon-list-text">ประเภทบอร์ดเกม: ปาร์ตี้</span>
          </li>
          <li className="elementor-icon-list-item">
            <span className="elementor-icon-list-icon">
				</span>
            <span className="elementor-icon-list-text">อายุ: 8+</span>
          </li>
          <li className="elementor-icon-list-item">
            <span className="elementor-icon-list-icon">
				</span>
            <span className="elementor-icon-list-text">จำนวนผู้เล่น: 3-10 คน</span>
          </li>
          <li className="elementor-icon-list-item">
            <span className="elementor-icon-list-icon">
				</span>
            <span className="elementor-icon-list-text">เวลาในการเล่น: 10 นาที</span>
          </li>
        </ul>

        <p>฿850</p>  
                          <input type="number" id="quantity_63f673ea16af6" className="input-text qty text" step={1} min={1} max name="quantity" defaultValue={1} title="จำนวน" size={4} placeholder inputMode="numeric" autoComplete="off" />
                          </div>
                          
                          <button type="submit" name="add-to-cart" value={31988} className="single_add_to_cart_button button alt">หยิบใส่ตะกร้า</button>
                        </form>
      </section>
 
      <h3 id="DetailGame">รายละเอียด ในเกมหนึ่งคืนปริศนาเกมล่ามนุษย์หมาป่า เป็นเกมที่สามารถเล่นได้รวดเร็ว สำหรับผู้เล่น 3-10 คน โดยแต่ละคนจะได้รับบทบาทเป็นคนในหมู่บ้าน ที่จะมีมนุษย์หมาป่าแฝงตัวเข้ามา คนอื่นๆต้องพยายามหามนุษย์หมาป่า เพื่อที่จะกำจัดออกจากหมู่บ้านไป โดยต้องระวังที่จะโหวตผิดคน เพราะถ้าทุกคนจับคนผิดเราทุกคนจะถูกกินและแพ้เกมนี้</h3>
      <Link to={`http://localhost:3000/comment/add/23`}>Comment</Link>
    <Footer/>
</div>      

   )
}
export default Game23;