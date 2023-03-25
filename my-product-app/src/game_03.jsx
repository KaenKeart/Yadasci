import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./Navbar";
import game_03 from "../src/img/game_03.jpg";
import game_03_1 from "../src/img/game_03-1.jpg";
import "./game.css";
import "./comment.css";

import { Link } from "react-router-dom";
function Game03() {
  return (
    <div>
      <Navbar />
      <div id="slide_game">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={game_03} className="img_responsive" alt="..." />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={game_03_1} className="img_responsive" alt="..." />
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
            <h4>7 สิ่งมหัศจรรย์</h4>
            <ul className="elementor-icon-list-items">
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  ประเภทบอร์ดเกม: ครอบครัว,กลยุทธ์
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">อายุ: 10+</span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  จำนวนผู้เล่น: 2-7 คน
                </span>
              </li>
            </ul>

            <p>฿1800</p>
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
        สวมบทบาทผู้ปกครองอารยธรรมมหาอํานาจทั้งเจ็ดในประวัติศาสตร์โลก
        ใช้ทรัพยากรที่มีอย่างชาญฉลาด เพื่อพัฒนาอารยธรรมให้เจริญรุ่งเรือง
        สานสัมพันธไมตรีด้านการค้าพร้อมทั้งตระเตรียมไพร่พละกําลังทหารเพื่อคานอํานาจกับอารยธรรมอื่น
        ๆ ทิ้งร่องรอยของอารยธรรมไว้ให้ หลงเหลืออยู่ในประวัติศาสตร์
        โดยการสร้างสิ่งปลูกสร้างขนาดมหึมาที่จะยังคงตั้งตระหง่านอยู่คู่กาลเวลา
      </h3>
      <br />
      <Link
        id="comment"
        to={`http://localhost:3000/comment/add/3`}
        className="btn btn-primary"
      >
        Comment
      </Link>
      <br />
      <Footer />
      <Footer />
    </div>
  );
}
export default Game03;
