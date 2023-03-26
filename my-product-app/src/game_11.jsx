import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./Navbar";
import game_11 from "../src/img/game_11.jpg";
import game_11_1 from "../src/img/game_11-1.jpg";
import "./game.css";

import { Link } from "react-router-dom";
function Game11() {
  return (
    <div>
      <Navbar />
      <div id="slide_game">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={game_11} className="img_responsive" alt="..." />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={game_11_1} className="img_responsive" alt="..." />
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
            <h4>คฤหาสน์วิปลาส (ภาคเสริม) ถนนลี้ลับแห่งอาร์คัม</h4>
            <ul className="elementor-icon-list-items">
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  ประเภทบอร์ดเกม: กลยุทธ์
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">อายุ: 14+</span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  จำนวนผู้เล่น: 1-5 คน
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  เวลาในการเล่น: 60-90 นาที
                </span>
              </li>
            </ul>

            <p>฿2650</p>
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
        ภาคเสริม ถนนลี้ลับแห่งอาร์คัม
        มาพร้อมกับสถานที่อันโด่งดังของเมืองอาร์คัมและความลับอันชั่วร้ายที่ปิดซ่อนอยู่ภายในนั้น
        เนื้อเรื่องตอนใหม่ 3 ตอนที่เพิ่มเข้ามาจะท้าทายความสามารถของนักสืบ
        เมื่อต้องเผชิญหน้ากับผู้รุกรานจากโพ้นดารา พลังอำนาจอันเกินจินตนาการ
        และเหล่าอาชญากรร้ายแสนป่าเถื่อน
        เพื่อที่จะต่อกรกับทั้งอสูรร้ายจากบรรพกาลและเหล่าคนชั่วช้าในโลกปัจจุบัน
        นักสืบจำเป็นต้องปลุกพลังที่แท้จริงในตัวให้ตื่นขึ้นด้วยเวทมนตร์เหนือธรรมชาติ
        วัตถุลี้ลับอันทรงพลังและน้ำยาสีอำพันพิศวง ไม่ว่าจะต้องจ่ายราคาด้วยอะไร
        คุณก็จำเป็นต้องปกป้องเมืองอาร์คัมแห่งนี้ไว้ให้จงได้
      </h3>
      <br />

      <br />
      <Footer />
    </div>
  );
}
export default Game11;
