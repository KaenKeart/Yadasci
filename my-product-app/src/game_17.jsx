import { Carousel } from 'react-bootstrap';
import Footer from './footer';
import Navbar from './Navbar';  
import game_17 from '../src/img/game_17.jpg'
import game_17_1 from '../src/img/game_17-1.jpg'
import './game.css';
import { Link } from "react-router-dom";
function Game17() {

    return (

<div>
    <Navbar/> 
     <div id="slide_game">
            <Carousel >
      <Carousel.Item interval={1000}>
    <img src={game_17} className="img_responsive" alt="..."  />
      </Carousel.Item>
      <Carousel.Item interval={500}>
    <img src={game_17_1} className="img_responsive" alt="..."/>
      </Carousel.Item>
    </Carousel> 
     </div>
    <section id="basket">
                          <form className="cart" action="#" method="post" encType="multipart/form-data">
                          <div className="quantity">
                            <h4 >เหมียวระเบิด (เกมฮิต)</h4>		
        <ul className="elementor-icon-list-items">
          <li className="elementor-icon-list-item">
            <span className="elementor-icon-list-icon">
				</span>
            <span className="elementor-icon-list-text">ประเภทบอร์ดเกม: ปาร์ตี้</span>
          </li>
          <li className="elementor-icon-list-item">
            <span className="elementor-icon-list-icon">
				</span>
            <span className="elementor-icon-list-text">อายุ: 7+</span>
          </li>
          <li className="elementor-icon-list-item">
            <span className="elementor-icon-list-icon">
				</span>
            <span className="elementor-icon-list-text">จำนวนผู้เล่น: 2-5 คน</span>
          </li>
          <li className="elementor-icon-list-item">
            <span className="elementor-icon-list-icon">
				</span>
            <span className="elementor-icon-list-text">เวลาในการเล่น: 15 นาที</span>
          </li>
        </ul>

        <p>฿950</p>  
                          <input type="number" id="quantity_63f673ea16af6" className="input-text qty text" step={1} min={1} max name="quantity" defaultValue={1} title="จำนวน" size={4} placeholder inputMode="numeric" autoComplete="off" />
                          </div>
                          
                          <button type="submit" name="add-to-cart" value={31988} className="single_add_to_cart_button button alt">หยิบใส่ตะกร้า</button>
                        </form>
      </section>
 
      <h3 id="DetailGame">รายละเอียด “เกมนี้ก็คล้ายๆ UNO (อูโน่) เพียงแต่มีแพะ มีขนมโตเกียววิเศษ แล้วก็มีแมวเหมียวที่ฆ่าคุณได้” – CNN
       สร้างสรรค์โดย Elan Lee (XBOX, ARGs), Matthew Inman (The Oatmeal), และ Shane Small (XBOX, Marvel) เกมแมวระเบิดเป็นเกมที่สร้างปรากฎการณ์ใน Kickstarter เมื่อปี 2015 โดยมีผู้ร่วมระดมทุนกว่า 219,000 คน รูปแบบการเล่น เหมือนการเดิมพันรัสเชียนรูเล็ตต์ที่ต้องอาศัยกลยุทธ์และพลังแมวเหมียว ผู้เล่นจะผลัดกันจั่วการ์ดจนกว่าจะมีคนจั่วเจอแมวระเบิด และระเบิดตัวตายออกจากเกม นอกจากว่าจะมีการ์ดปลดระเบิดที่ช่วยให้รอดตายจากแมวด้วยการใช้ปากกาเลเซอร์ล่อแมว เกาพุง หรือแซนวิชกัญชาแมว ส่วนการ์ดอื่นๆ ในกองมีไว้เพื่อช่วยให้ผู้เล่นสามารถหลีกเลี่ยงหรือย้ายที่แมวระเบิดได้</h3>
       <Link to={`http://localhost:3000/comment/add/17`}>Comment</Link>
    <Footer/>
</div>      

   )
}
export default Game17;