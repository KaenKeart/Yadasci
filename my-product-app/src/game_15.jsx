import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./Navbar";
import game_15 from "../src/img/game_15.jpg";
import game_15_1 from "../src/img/game_15-1.jpg";
import "./game.css";
import "./comment.css";

import { Link } from "react-router-dom";
function Game15() {
  return (
    <div>
      <Navbar />
      <div id="slide_game">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={game_15} className="img_responsive" alt="..." />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={game_15_1} className="img_responsive" alt="..." />
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
            <h4>Get Packing (เกมเด็ก)</h4>
            <ul className="elementor-icon-list-items">
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  ประเภทบอร์ดเกม: ครอบครัว
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">อายุ: 6+</span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  จำนวนผู้เล่น: 2-4 คน
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  เวลาในการเล่น: 15 นาที
                </span>
              </li>
            </ul>

            <p>฿950</p>
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
        รายละเอียด บอร์ดเกมแนว Puzzle
        ที่รอการพิสูจน์ฝีมือการจัดกระเป๋าของคุณให้ปิดได้ลงตัว มีของเยอะแยะไปหมด
        ทั้งห่วงยาง แว่นตา กางเกง รองเท้า แต่ละชิ้นก็คนละทรง
        โจทย์มีความยากง่ายถึง 3 ระดับให้เลือก พร้อมเฉลยในกล่อง
        เป็นเกมที่เหมาะสำหรับเด็ก ๆ
        หรือแม้แต่ผู้ใหญ่ที่ชอบไขปัญหาก็ไว้ฝึกสมองได้อย่างดี
      </h3>
      <br />
      <Link
        id="comment"
        to={`http://localhost:3000/comment/add/15`}
        className="btn btn-primary"
      >
        Comment
      </Link>
      <br />
      <Footer />
    </div>
  );
}
export default Game15;
