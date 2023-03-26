import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./Navbar";
import game_22 from "../src/img/game_22.jpg";
import game_22_1 from "../src/img/game_22-1.jpg";
import "./game.css";

import { Link } from "react-router-dom";
function Game22() {
  return (
    <div>
      <Navbar />
      <div id="slide_game">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={game_22} className="img_responsive" alt="..." />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={game_22_1} className="img_responsive" alt="..." />
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
            <h4>ไชน่าทาวน์ (เกมเก่า)</h4>
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
                  จำนวนผู้เล่น: 3-5 คน
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  เวลาในการเล่น: 60 นาที
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
        รายละเอียด ณ นครนิวยอร์คในช่วงยุค 60
        เป็นช่วงทีช่าวจีนต่างหลั่งไหลอพยพเข้าไปตั้ง
        รกรากในบริเวณไชน่าทาวน์กันอย่างอุ่นหนาฝาคั่ง อันเป็นผลพวงมาจากกฎหมาย
        ด้านการอพยพฉบับใหม่ ไชน่าทาวน์จึงขยายอาณาเขตไปทางเหนือจนถึงฝั่งถนน
        แคนัลสตรีท จรดถนนโบเวอรี่สตรีททางตะวันออก
        โดยเหล่าผู้อพยพจากแดนมังกรทั้งชายและหญิงหลายพันคนที่เข้ามาแสวงโชคใน
        เมืองศิวิไลซ์แห่งนี้ล้วนขยันขันแข็ง
        ลงทุนกว้านซื้ออาคารพาณิชย์เพื่อประกอบธุรกิจต่าง ๆ
        เพื่อสร้างฐานะให้มั่งคั่งตาม อุดมคติของ “ความฝันอเมริกันชน”! ในเกม
        “ไชน่าทาวน์” นี้
        ผู้เล่นจะได้สวมบทบาทเป็นพ่อค้าแม่ค้าชาวจีนโพ้นทะเลที่หอบเอาทรัพย์สินและความฝัน
        ทั้งหมดมาทุ่มเพื่อสร้างฐานะในเมือง “บิ๊กแอปเปิล” แห่งนี้!
        ด้วยหัวการค้าที่คุณมี… คุณมัน่ใจแค่ไหนว่าจะขยับ
        ขยายกิจการได้จนมั่งคั่งมากกว่าใคร ๆ
      </h3>
      <br />

      <br />
      <Footer />
    </div>
  );
}
export default Game22;
