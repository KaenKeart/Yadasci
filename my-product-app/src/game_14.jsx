import { Carousel } from 'react-bootstrap';
import Footer from './footer';
import Navbar from './Navbar';  
import game_14 from '../src/img/game_14.jpg'
import game_14_1 from '../src/img/game_14-1.jpg'
import './game.css';
import { Link } from "react-router-dom";
function Game14() {

    return (

<div>
    <Navbar/> 
     <div id="slide_game">
            <Carousel >
      <Carousel.Item interval={1000}>
    <img src={game_14} className="img_responsive" alt="..."  />
      </Carousel.Item>
      <Carousel.Item interval={500}>
    <img src={game_14_1} className="img_responsive" alt="..."/>
      </Carousel.Item>
    </Carousel> 
     </div>
    <section id="basket">
                          <form className="cart" action="#" method="post" encType="multipart/form-data">
                          <div className="quantity">
                            <h4 >นักท่องฝัน (เกมเด็ก)</h4>		
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
            <span className="elementor-icon-list-text">จำนวนผู้เล่น: 4-10 คน</span>
          </li>
          <li className="elementor-icon-list-item">
            <span className="elementor-icon-list-icon">
				</span>
            <span className="elementor-icon-list-text">เวลาในการเล่น: 30 นาที</span>
          </li>
        </ul>

        <p>฿1400</p>  
                          <input type="number" id="quantity_63f673ea16af6" className="input-text qty text" step={1} min={1} max name="quantity" defaultValue={1} title="จำนวน" size={4} placeholder inputMode="numeric" autoComplete="off" />
                          </div>
                          
                          <button type="submit" name="add-to-cart" value={31988} className="single_add_to_cart_button button alt">หยิบใส่ตะกร้า</button>
                        </form>
      </section>
 
      <h3 id="DetailGame">รายละเอียด เกม When i Dream 🌈 เกมแนวปาร์ตี้ แสนสนุก ที่มาในธีม ที่ผู้เล่นทุกคนจะสวมบทบาทจะผลัดกันเป็นนักท่องฝัน และต้องพยายามเดาคำตอบ ให้ได้มากที่สุดในช่วงค่ำคืน ผู้เล่นอื่นๆจะสวมบทบาทเป็น เหล่าภูติแห่งความฝัน 🧚🏻‍♀️เหล่าภูติความฝันจะช่วยบอกใบ้ แต่ในการบอกใบ้ ให้ นักท่องฝันเดาคำศัพท์ในการด์ให้ได้ แต่ภูติ จะมีทั้งตัวที่จะช่วยบอกคำถูก ✅ และบอกคำผิด ❌ แถมยังมีทั้งผิดทั้งถูกอีกด้วย❗️
โดยเกมนี้ นักท่องฝันเเต่ละคนจะถูกแบ่ง เป็น 2 ช่วง ช่วงกลางคืน กับช่วงกลางวัน 🤦‍♂️ช่วงการคืนเราจะทำการหลับตา และพยายาม ตอบคำศักพท์ แต่ละคำจาก คำใบ้ ของภูติแห่งความฝัน แต่ก็ต้องระวัง เพราะบางคนจะใช่คำลวง หลอกเราอยู่ ส่วนกลางเมื่อหมดเวลา เราก็จะต้อง พูดทวนคำศัพท์ที่เราตอบไป 🗣ให้ได้มากที่สุด โดยยังปิดตาอยู่ ตอบผิดหรือถูก ภูติแต่ละคนก็จะไม่เพ่งพราย ออกมาบอกเราก่อนเลย จนกว่าจะยอมลืมตา เกมนี้ทั้งฮา ทั้งสนุก 🤗แถมยังได้ใช้จินตนาการ</h3>
<Link to={`http://localhost:3000/comment/add/14`}>Comment</Link>
    <Footer/>
</div>      

   )
}
export default Game14;