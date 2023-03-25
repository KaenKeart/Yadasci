import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./Navbar";
import game_07 from "../src/img/game_07.jpg";
import game_07_1 from "../src/img/game_07-1.jpg";
import "./game.css";
import "./comment.css";

import { Link } from "react-router-dom";
function Game07() {
  return (
    <div>
      <Navbar />
      <div id="slide_game">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={game_07} className="img_responsive" alt="..." />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={game_07_1} className="img_responsive" alt="..." />
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
            <h4>เกมแม่เหล็กบันไดงู</h4>
            <ul className="elementor-icon-list-items">
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  ประเภทบอร์ดเกม: ครอบครัว
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">อายุ: 3+</span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  จำนวนผู้เล่น: 2-4 คน
                </span>
              </li>
            </ul>

            <p>฿199</p>
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
        วิธีการเล่น ผู้เล่นเลือกแม่เหล็กไปคนละ 1 ชิ้น
        ผู้เล่นที่อายุน้อยที่สุดเริ่มเล่นเป็นคนแรก
        เมื่อถึงตาเล่นให้ผู้เล่นทอยเต๋า
        จากนั้นเดินชิ้นส่วนแม่เหล็กของตัวเองไปตามช่องเท่ากับจำนวนหน้าเต๋าที่ทอยได้
        หากตกที่ช่องว่าง ให้ทำแอคชั่นที่กำหนดไว้ในช่องนั้น
        หากตกช่องบันไดให้ขึ้นไปสุดบันได
        หากตกช่องที่มีงูให้เดินลงข้างล่างจนสุดตัวงู หากตกช่องตัวเลข
        ให้ย้ายไปช่องที่มีเลขกำกับไว้ทันที วิธีจบ
        เป็นคนแรกที่ไปถึงช่องสุดท้ายที่อยู่ด้านบนของกระดาน
      </h3>
      <br />
      <Link
        id="comment"
        to={`http://localhost:3000/comment/add/7`}
        className="btn btn-primary"
      >
        Comment
      </Link>
      <br />
      <Footer />
    </div>
  );
}
export default Game07;
