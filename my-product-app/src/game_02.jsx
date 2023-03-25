import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./Navbar";
import game_02 from "../src/img/game_02.jpg";
import game_02_1 from "../src/img/game_02-1.jpg";
import "./game.css";
import "./comment.css";

import { Link } from "react-router-dom";
function Game02() {
  return (
    <div>
      <Navbar />
      <div id="slide_game">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={game_02} className="img_responsive" alt="..." />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={game_02_1} className="img_responsive" alt="..." />
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
            <h4>เกมโค่นอำนาจ</h4>
            <ul className="elementor-icon-list-items">
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  ประเภทบอร์ดเกม: ปาร์ตี้
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">อายุ: 13+</span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  จำนวนผู้เล่น: 2-6 คน
                </span>
              </li>
            </ul>

            <p>฿700</p>
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
        ในเกมโค่นอำนาจ
        เราจะเป็นผู้นำตระกูลที่จะต้องทำหน้าที่ในนำพาตระกูลเราให้ไปอยู่ในจุดสูงสุดของการปกครอง
        โดยผู้เล่นแต่ละคนจะมีอิทธิพลในสายอาชีพต่างๆที่ไม่เหมือนกัน
        ซึ่งเราจะต้องจัดสรรทรัพยากรที่เรามี
        และการใช้อิทธิพลเหล่านี้ให้ถูกจังหวะเพื่อชัยชนะ
      </h3>
      <br />
      <Link
        id="comment"
        to={`http://localhost:3000/comment/add/2`}
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
export default Game02;
