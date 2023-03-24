import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./Navbar";
import game_24 from "../src/img/game_24.jpg";
import game_24_1 from "../src/img/game_24-1.jpg";
import "./game.css";
import "./comment.css";

import { Link } from "react-router-dom";
function Game24() {
  return (
    <div>
      <Navbar />
      <div id="slide_game">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={game_24} className="img_responsive" alt="..." />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={game_24_1} className="img_responsive" alt="..." />
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
            <h4>เมืองอาชญากรนครย่อส่วนฟูลเฮาส์ (เกมใหม่)</h4>
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
                  จำนวนผู้เล่น: 1-4 คน
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  เวลาในการเล่น: 15-45 นาที
                </span>
              </li>
            </ul>

            <p>฿1100</p>
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
        รายละเอียด กลับมาในธีมสืบสวนกันอีกครั้ง กับเกม MicroMacro : Crime City
        หรือชื่อภาษาไทย “เมืองอาชญากร นครย่อส่วน”
        เกมกระดานที่จะให้ผู้เล่นได้รับบทบาทเป็นนักสืบที่คอยสืบหาความจริงจากเหตุอาชญากรรมต่าง
        ๆ ในเมืองนี้ โดยตัวเกมจะมาพร้อมกับแผนที่ขนาดใหญ่
        และการ์ดใสที่ทำหน้าที่เปรียบเสมือนแว่นขยายของนักสืบะ
        รวมไปถึงการ์ดเนื้อเรื่องกว่า 120 ใบ
        ซึ่งในแต่ละการ์ดจะเป็นเนื้อหาของคดีต่าง ๆ ที่เกิดขึ้นในเมืองนี้
        ผู้เล่นจะต้องหาเบาะแสโดยใช้แว่นขยายส่องไปตามแผนที่
        หากสามารถไขปริศนาได้จนจบเรื่องจะถือว่าเป็นผู้ชนะค่ะ โดยเกมเมืองอาชญากร
        นครย่อส่วน ถือเป็นเกมที่สามารถเล่นคนเดียวได้ !! ถือว่าแปลกมากกกก ใครสาย
        Solo เล่นได้ถูกใจแน่นอน หรือจะชวนเพื่อนมาช่วยกันไขปริศนาก็ได้
        ใช้เวลาในการเล่นประมาณ 15-45 นาที ขึ้นอยู่กับความยากง่ายของคดี
        และเป็นเกมที่เหมาะสำหรับผู้เล่นอายุ 14 ปี ขึ้นไป
        อีกทั้งเกมนี้ยังได้รับรางวัล Spiel des Jahres 2021
        รางวัลชนะเลิศบอร์ดเกมยอดเยี่ยมประจำปี 2021
        ก็มีรางวัลการันตีแบบนี้ถือว่าไม่ธรรมดาเลยนะคะ
        ใครที่อยากรับบทเป็นนักสืบถือว่าไม่ควรพลาดอย่างยิ่งเลยค่ะ
      </h3>
      <br />
      <Link
        id="comment"
        to={`http://localhost:3000/comment/add/1`}
        className="btn btn-primary"
      >
        Comment
      </Link>
      <br />
      <Footer />
    </div>
  );
}
export default Game24;
