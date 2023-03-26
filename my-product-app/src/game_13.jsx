import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./Navbar";
import game_13 from "../src/img/game_13.jpg";
import game_13_1 from "../src/img/game_13-1.jpg";
import "./game.css";

import { Link } from "react-router-dom";
function Game13() {
  return (
    <div>
      <Navbar />
      <div id="slide_game">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={game_13} className="img_responsive" alt="..." />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={game_13_1} className="img_responsive" alt="..." />
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
            <h4>ราชันแห่งโตเกียว (เกมเด็ก)</h4>
            <ul className="elementor-icon-list-items">
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  ประเภทบอร์ดเกม: ครอบครัว
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">อายุ: 8+</span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  จำนวนผู้เล่น: 2-6 คน
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  เวลาในการเล่น: 30 นาที
                </span>
              </li>
            </ul>

            <p>฿1450</p>
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
        รายละเอียด เป็นบอร์ดเกมที่สายต่อสู้ต้องโดน จะเล่นเกมนี้
        ไม่ต้องคิดวางแผนให้ปวดหัว บวกไปเลย เลือกสัตว์ประหลาด ทอยเต๋าให้ดี
        แล้วเลือกระหว่างเก็บพลังงานเพื่อแลกการ์ดเพิ่มสกิลพิเศษ
        เพิ่มเลือดให้ตัวเองไม่ให้ตาย เข้าเมืองไปตีตัวอื่นให้ตาย
        หรือจะเก็บแต้มให้ครบ 20 เพื่อชนะ ตัดสินใจให้ดี
        ตีตัวอื่นเพลินเกินจะโดนเขาตีเลือกหมดตายแทนไม่รู้ตัว เล่นง่าย แต่มันส์มาก
        การันตีด้วยรางวัล Golden Geek Best ถึง 3 สาขา Party Family และ
        Children’s Board Game ปี 2012 พร้อมแล้วลุย!
      </h3>
      <br />

      <br />
      <Footer />
    </div>
  );
}
export default Game13;
