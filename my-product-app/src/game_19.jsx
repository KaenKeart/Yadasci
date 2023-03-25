import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./Navbar";
import game_19 from "../src/img/game_19.jpg";
import game_19_1 from "../src/img/game_19-1.jpg";
import "./game.css";

import { Link } from "react-router-dom";
function Game19() {
  return (
    <div>
      <Navbar />
      <div id="slide_game">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={game_19} className="img_responsive" alt="..." />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={game_19_1} className="img_responsive" alt="..." />
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
            <h4>ภาคเสริมพลิกพิภพดาวอังคาร (ภาคเสริม) ปฐมบท</h4>
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
                  เวลาในการเล่น: 90-120 นาที
                </span>
              </li>
            </ul>

            <p>฿650</p>
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
        รายละเอียด ขณะที่องค์กรมหาอำนาจทั่วโลกกำลังตระเตรียมทรัพยากร
        เทคโนโลยีและกำลังพลเพื่อเริ่มดำเนินการอภิมหาโครงการปรับสภาพดาว
        เป็นเวลาที่ผู้นำองค์กรเช่นคุณจะต้องตัดสินใจว่าจะนำพาองค์กรไปในทิศทางใด
        เพื่อสร้างผลงานจารึกไว้ในประวัติศาสตร์ดาวอังคาร
        และนี่คือปฐมบทสู่การพลิกพิภพดาวสีแดง! ในภาคเสริม “ปฐมบท”
        ชุดนี้ผู้เล่นจะได้เลือกเล่นการ์ดปฐมบทซึ่งจะส่งผลให้การเริ่มต้นโครงการปรับสภาพดาวเป็นไปอย่างก้าวกระโดดด้วยการเพิ่มศักยภาพให้กับองค์กรของคุณตั้งแต่เริ่มเกม
        นอกจากนั้นยังมาพร้อมกับองค์กรใหม่ทั้ง 5 และการ์ดโครงการใหม่ 7
        ใบที่จะยิ่งช่วยเสริมอรรถรสให้ภาพรวมการปรับสภาพดาวสมจริงยิ่งขึ้นด้วยโครงการในระยะเริ่มต้น
        “ปฐมบท” เป็นภาคเสริมสำหรับเกมพลิกพิภพดาวอังคาร
        โดยต้องเล่นร่วมกับเกมพลิกพิภพดาวอังคารภาคหลัก
        และสามารถนำไปใช้เล่นร่วมกับภาคเสริมชุดอื่นๆ รวมถึงกติกาพิเศษอื่นๆ ได้
      </h3>
      <br />

      <br />
      <Footer />
    </div>
  );
}
export default Game19;
