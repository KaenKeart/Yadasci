import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./Navbar";
import game_05 from "../src/img/game_05.jpg";
import game_05_1 from "../src/img/game_05-1.jpg";
import "./game.css";

import { Link } from "react-router-dom";
function Game05() {
  return (
    <div>
      <Navbar />
      <div id="slide_game">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={game_05} className="img_responsive" alt="..." />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={game_05_1} className="img_responsive" alt="..." />
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
            <h4>ปีกปักษา</h4>
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
                  จำนวนผู้เล่น: 1-5 คน
                </span>
              </li>
            </ul>

            <p>฿1900</p>
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
        ปีกปักษา เป็นเกมที่ต้องแข่งกันในฐานะผู้ชื่นชอบนกในแขนงต่างๆ
        ไม่ว่าจะเป็นนักวิจัยนก นักดูนก หรือนักสะสมสิ่งต่างๆเกี่ยวกับนก
        ที่จะออกไปตามหานกที่ดีที่สุดในอาณาเขตรักษาพันธุ์ที่เราดูแล
        ซึ่งนกแต่ละชนิดก็จะมีการเชื่อมโยงความสามารถพิเศษ ให้เราได้คะแนนมากขึ้น
      </h3>
      <br />

      <br />
      <Footer />
    </div>
  );
}
export default Game05;
