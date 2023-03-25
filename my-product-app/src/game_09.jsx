import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./Navbar";
import game_09 from "../src/img/game_09.jpg";
import game_09_1 from "../src/img/game_09-1.jpg";
import "./game.css";
import "./comment.css";

import { Link } from "react-router-dom";
function Game09() {
  return (
    <div>
      <Navbar />
      <div id="slide_game">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={game_09} className="img_responsive" alt="..." />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={game_09_1} className="img_responsive" alt="..." />
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
            <h4>ภาคเสริมพลิกพิภพดาวอังคาร (ภาคเสริม) ปฏิบัติการดาวศุกร์</h4>
            <ul className="elementor-icon-list-items">
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  ประเภทบอร์ดเกม: กลยุทธ์
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">อายุ: 12+</span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  จำนวนผู้เล่น: 1-5 คน
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
        ดาวศุกร์แม้จะได้ชื่อว่าเป็นดาวเคราะห์ที่มีสภาพภูมิประเทศโหดร้ายที่สุดในระบบสุริยะ…
        แต่กลับเต็มไปด้วยความเป็นไปได้ที่รอให้บุกเบิก! สูงขึ้นไปเหนือชั้นเมฆกรด…
        ด้วยพิกัดความสูงห่างไกลจากพื้นผิวดาวศุกร์ที่ร้อนระอุ
        มนุษยชาติได้เริ่มสร้างอาณานิคมไปพร้อมๆ กับการดำเนินการปรับสภาพดาว
        และนี่เป็นโอกาสอันดีที่องค์กรของคุณจะได้สร้างชื่อด้วยการสร้างเมืองอาณานิคมลอยฟ้า
        ตัดทอนแสงอาทิตย์เพื่อลดสภาวะเรือนกระจก
        และปรับสภาพดาวเคราะห์ให้สิ่งมีชีวิตสามารถดำรงชีพอยู่ได้ในที่สุด!
        “ปฏิบัติการดาวศุกร์” เป็นภาคเสริมสำหรับเกมพลิกพิภพดาวอังคาร
        โดยต้องเล่นร่วมกับเกมพลิกพิภพดาวอังคารภาคหลัก
        และสามารถนำไปใช้เล่นร่วมกับภาคเสริมชุดอื่นๆ รวมถึงกติกาพิเศษอื่นๆ ได้ ใน
        “ปฏิบัติการดาวศุกร์”
        ผู้เล่นจะได้แบ่งสรรทรัพยากรเพื่อดำเนินการปรับสภาพดาวศุกร์
        สร้างเมืองใหม่ๆ ในระบบสุริยะวงใน ภาคเสริมชุดนี้มาพร้อมกับการ์ดใหม่ๆ
        องค์กรใหม่ๆ รวมทั้งผลงานสำคัญและรางวัลเกียรติยศที่ไม่เคยมีมาก่อน!
        “ปฏิบัติการดาวศุกร์” เป็นภาคเสริมสำหรับเกมพลิกพิภพดาวอังคาร
        โดยต้องเล่นร่วมกับเกมพลิกพิภพดาวอังคารภาคหลัก
        และสามารถนำไปใช้เล่นร่วมกับภาคเสริมชุดอื่นๆ รวมถึงกติกาพิเศษอื่นๆได้
      </h3>
      <br />

      <br />
      <Footer />
    </div>
  );
}
export default Game09;
