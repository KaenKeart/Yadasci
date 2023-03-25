import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./Navbar";
import game_01 from "../src/img/game_01.jpg";
import game_01_2 from "../src/img/game_01-2.jpg";
import "./game.css";
import "./comment.css";

import { Link } from "react-router-dom";

function Game01() {
  return (
    <div>
      <Navbar />
      <div id="slide_game">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={game_01} className="img_responsive" alt="..." />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={game_01_2} className="img_responsive" alt="..." />
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
            </ul>

            <p>฿3650</p>
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
        อุปกรณ์ในกล่อง คู่มืออ้างอิงกติกา แผ่นแผนที่ 24 แผ่น
        การ์ดนักสืบและฟิกเกอร์เข้าคู่กัน 8 คู่ การ์ดไอเทมทั่่วไป 40 ใบ
        การ์ดไอเทมพิเศษ 22 ใบ โทเคนค้นหา / โต้ตอบ16 อัน โทเคนสำรวจ / สายตา 16
        อัน โทเคนบุคคล 22 อัน การ์ดเวท 30 ใบ การ์ดสถานะ 37 ใบ โทเคนสิ่่งกีดขวาง
        4 อัน โทเคนทางลับ 4 อัน โทเคนไฟ /ความมืด 18 อัน การ์ดแดเมจ 40 ใบ
        การ์ดฮอร์เรอร์ 40 ใบ โทเคนกำแพง 8 อัน โทเคนประตู 4 อัน โทเคนระบุตัว 6
        อัน โทเคนมอนสเตอร์และฟิกเกอร์เข้าคู่กัน 24 คู่ โทเคนเบาะแส 26 อัน
        ลูกเต๋า 5 ลูก ซอง (ต้องซื้อแยก) ซองใส่การ์ด: Blue Turquiose ขนาดซอง: 70
        x 120 มม. จำนวน: 8 ซอง / 1 แพค ซองใส่การ์ด: Light Green Peridot ขนาดซอง:
        41 x 63 มม. จำนวน: 221 ซอง / 5 แพค
      </h3>
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default Game01;
