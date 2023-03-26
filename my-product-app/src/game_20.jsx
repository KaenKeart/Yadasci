import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./Navbar";
import game_20 from "../src/img/game_20.jpg";
import game_20_1 from "../src/img/game_20-1.jpg";
import "./game.css";

import { Link } from "react-router-dom";
function Game20() {
  return (
    <div>
      <Navbar />
      <div id="slide_game">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={game_20} className="img_responsive" alt="..." />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={game_20_1} className="img_responsive" alt="..." />
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
            <h4>ค้าเพรช (เกมฮิต)</h4>
            <ul className="elementor-icon-list-items">
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  ประเภทบอร์ดเกม: ครอบครัว
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">อายุ: 10+</span>
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
                  เวลาในการเล่น: 30 นาที
                </span>
              </li>
            </ul>

            <p>฿1500</p>
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
        รายละเอียด เกมค้าเพชรเป็นเกมที่เราจะต้องสะสมเพชรในการซื้อการ์ดต่างๆ
        การ์ดแต่ละใบจะเหมือนเรากำลังเพิ่มการขับเคลื่อนอุตสาหกรรมอัญมณีของเราให้เติบโตขึ้น
        การ์ดจะมีตั้งแต่ แหล่งหาเพชร การขนส่ง คนเจียรไน ไปถึงการเปิดหน้าร้าน
        เพื่อจะให้ได้แต้มเกียรติยศเยอะที่สุดในตอนจบเกม
        และในบางครั้งถ้าเราจัดการธุรกิจของเราได้ดีพอเหล่าขุนนางก็จะแวะเวียนมาชื่นชมด้วย
        ก็จะยิ่งเป็นเกียรติให้กับร้านค้าของเราเป็นอย่างมาก
      </h3>
      <br />

      <br />
      <Footer />
    </div>
  );
}
export default Game20;
