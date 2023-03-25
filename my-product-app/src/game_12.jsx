import Footer from "./footer";
import Navbar from "./Navbar";
import game_12 from "../src/img/game_12.jpg";
import "./game.css";
import "./comment.css";

import { Link } from "react-router-dom";
function Game12() {
  return (
    <div>
      <Navbar />

      <img src={game_12} className="img_responsive" alt="..." />

      <section id="basket">
        <form
          className="cart"
          action="#"
          method="post"
          encType="multipart/form-data"
        >
          <div className="quantity">
            <h4>คฤหาสน์วิปลาส (ภาคเสริม) ไขประตูสู่วิวรณ์</h4>
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
        อุปกรณ์ในกล่อง แผ่นแผนที่ 6 แผ่น โทเคนไฟ / ความมืด 16 อัน การ์ดนักสืบ
        และฟิกเกอร์เข้าคู่กัน 2 คู่ โทเคนมอนสเตอร์ และฟิกเกอร์เข้าคู่กัน 4 คู่
        การ์ดไอเทมทั่วไป 8 ใบ การ์ดไอเทมพิเศษ 1 ใบ การ์ดเวท 10 ใบ การ์ดสถานะ 9
        ใบ การ์ดแดเมจ 4 ใบ การ์ดฮอร์เรอร์ 4 ใบ โทเคนบุคคล 7 อัน โทเคนเบาะแส 10
        อัน โทเคนกุญแจ 4 อัน โทเคนกำแพง 2 อัน ซอง (ต้องซื้อแยก) ซองใส่การ์ด:
        Blue Turquiose ขนาดซอง: 70 x 120 มม. จำนวน: 2 ซอง / 1 แพค ซองใส่การ์ด:
        Light Green Peridot ขนาดซอง: 41 x 63 มม. จำนวน: 36 ซอง / 1 แพค
      </h3>
      <br />
      <Link
        id="comment"
        to={`http://localhost:3000/comment/add/12`}
        className="btn btn-primary"
      >
        Comment
      </Link>
      <br />
      <Footer />
    </div>
  );
}
export default Game12;
