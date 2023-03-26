import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./Navbar";
import game_21 from "../src/img/game_21.jpg";
import game_21_1 from "../src/img/game_21-1.jpg";
import "./game.css";

import { Link } from "react-router-dom";
function Game21() {
  return (
    <div>
      <Navbar />
      <div id="slide_game">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={game_21} className="img_responsive" alt="..." />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={game_21_1} className="img_responsive" alt="..." />
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
            <h4>เกาะภูตพิทักษ์ (เกมใหม่)</h4>
            <ul className="elementor-icon-list-items">
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  ประเภทบอร์ดเกม: กลยุทธ์
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">อายุ: 13+</span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  จำนวนผู้เล่น: 1-4 คน
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  เวลาในการเล่น: 90-120 นาที
                </span>
              </li>
            </ul>

            <p>฿2995</p>
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
        รายละเอียด ‘เกาะภูตพิทักษ์’ คือเกมช่วยกันเล่นสำหรับผู้เล่น 1-4 คน
        ซึ่งผู้เล่นจะสวมบทบาทเป็นเหล่าภูตแห่งธรรมชาติที่คอยปกปักษ์คุ้มครองเกาะจากนักล่าอาณานิคมที่เดินทางเข้ามาเบียดเบียนทั้งธรรมชาติบนเกาะ
        และกลุ่มชนพื้นเมืองที่ชื่อว่า ‘ดาฮาน’
        ในแต่ละตาเหล่าภูตจะได้เคลื่อนไหวพร้อมกัน
        ใช้พลังที่มีเพื่อขับไล่ผู้รุกราน ค้ำจุนเกาะ และช่วยเหลือดาฮาน
        อย่างไรก็ตามเหล่าภูตนั้นแรกเริ่มจะเป็นเพียงจิตวิญญานขนาดเล็ก
        และมีพลังอำนาจที่จำกัด จึงจำเป็นที่จะต้องเรียนรู้ยุทธวิธีใหม่ๆ
        เพื่อให้สามารถรับมือกับผู้รุกรานที่ขยายพื้นที่บนเกาะอย่างรวดเร็วให้ได้ทันท่วงที
        และเหล่าผู้รุกรานเองก็จะเคลื่อนไหว (ตามระบบเกม)
        เพื่อขยายอาณาเขตตั้งรกรากบนเกาะ ก่อให้เกิด “ความเสื่อมโทรม”
        ตามเส้นทางที่พวกเขารุกคืบไป เหล่าภูต (และดาฮาน) จะต้องกำจัดผู้รุกราน
        และขับไล่ผู้รอดชีวิตที่ยังหลงเหลืออยู่ออกไปให้หมดจากเกาะเพื่อเอาชนะเกม
        หรือหากพวกคุณลงมือช้าเกินไป
        และไม่สามารถขับไล่เหล่าผู้รุกรานได้ก่อนที่พวกเขาจะยึดพื้นที่
        พวกเขาจะยึดพื้นที่มั่นได้สำเร็จ คุณจะแพ้! ในเกมนี้
      </h3>
      <br />

      <br />
      <Footer />
    </div>
  );
}
export default Game21;
