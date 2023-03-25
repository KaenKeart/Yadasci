import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./Navbar";
import game_04 from "../src/img/game_04.jpg";
import game_04_1 from "../src/img/game_04-1.jpg";
import "./game.css";
import "./comment.css";

import { Link } from "react-router-dom";
function Game04() {
  return (
    <div>
      <Navbar />
      <div id="slide_game">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={game_04} className="img_responsive" alt="..." />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={game_04_1} className="img_responsive" alt="..." />
          </Carousel.Item>
        </Carousel>
      </div>
      <section id="basket">
        <form
          className="cart"
          action="#"
          method="post"
          encType="multipart/form-data"
        >
          <div className="quantity">
            <h4>เกมล่าปริศนามนุษย์หมาป่า</h4>
            <ul className="elementor-icon-list-items">
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  ประเภทบอร์ดเกม: ปาร์ตี้
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">อายุ: 8+</span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  จำนวนผู้เล่น: 5-75 คน
                </span>
              </li>
            </ul>

            <p>฿850</p>
            <input
              type="number"
              id="quantity_63f673ea16af6"
              className="input-text qty text"
              step={1}
              min={1}
              max
              name="quantity"
              defaultValue={1}
              title="จำนวน"
              size={4}
              placeholder
              inputMode="numeric"
              autoComplete="off"
            />
          </div>

          <Link id="pick" to="/cart" className="btn btn-primary">
            หยิบใส่ตะกร้า
          </Link>
        </form>
      </section>
      <h3 id="DetailGame">
        เกมล่าปริศนามนุษย์หมาป่า เป็นเกมแนวตัดตัวเลือกระหว่างผู้เล่น 2 ทีม
        คือทีมชาวบ้าน และมนุษย์หมาป่า ฝ่ายชาวบ้านจะไม่รู้ว่าใครเป็นมนุษย์หมาป่า
        และฝั่งหมาป่าต้องพยายามแฝงตัวค่อย ๆ กำจัดฝ่ายชาวบ้านไปทีละคน เพื่อชัยชนะ
        โดยตัวเกมจะมี ผู้ดำเนินเกม (ที่ไม่อยู่ฝ่ายใด) เป็นคนทำหน้าที่ดำเนินเกม
      </h3>
      <br />
      <Link
        id="comment"
        to={`http://localhost:3000/comment/add/4`}
        className="btn btn-primary"
      >
        Comment
      </Link>
      <br />
      <Footer />
    </div>
  );
}
export default Game04;
