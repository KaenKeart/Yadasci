import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./Navbar";
import game_08 from "../src/img/game_08.jpg";
import game_08_1 from "../src/img/game_08-1.jpg";
import "./game.css";
import { Link } from "react-router-dom";
function Game08() {
  return (
    <div>
      <Navbar />
      <div id="slide_game">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={game_08} className="img_responsive" alt="..." />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={game_08_1} className="img_responsive" alt="..." />
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
            <h4>ภาคเสริมพลิกพิภพดาวอังคาร (ภาคเสริม) อาณานิคม</h4>
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

          <button
            type="submit"
            name="add-to-cart"
            value={31988}
            className="single_add_to_cart_button button alt"
          >
            หยิบใส่ตะกร้า
          </button>
        </form>
      </section>

      <h3 id="DetailGame">
        เมื่อ “โลก” ของมนุษยชาติ ไม่ได้จำกัดอยู่เพียงแค่ดาวโลกอีกต่อไป
        องค์กรต่างๆ
        พากันขยายขอบเขตการดำเนินงานไปไกลสุดขอบระบบสุริยะเพื่อให้ได้มาซึ่งแร่ธาตุและทรัพยากรที่จำเป็น
        แม้ดาวเคราะห์น้อยและดาวบริวารเล็กๆ จะไม่เหมาะสำหรับการปรับสภาพดาว
        แต่การสร้างอาณานิคมลงบนดาวต่างๆ
        จะช่วยเพิ่มพูนผลกำไรและนำพาองค์กรของคุณไปสู่เป้าหมายที่ใหญ่กว่า…
        การปรับสภาพดาวอังคาร! ส่งกองยานพาณิชย์ออกไปยังดวงจันทร์บริวารอันไกลโพ้น!
        สร้างอาณานิคมบนชั้นเมฆของดาวพฤหัส!
        ชักนำองค์กรของคุณให้พุ่งทะยานไปสู่ความสำเร็จ! “อาณานิคม”
        จะนำพาผู้เล่นออกเดินทางไปยังระบบสุริยะวงนอก เพิ่มระบบดาวอาณานิคมต่างๆ
        ให้ผู้เล่นสร้างอาณานิคมหรือส่งกองยานไปติดต่อค้าขายกับอาณานิคมที่ตั้งอยู่ได้
        พร้อมทั้งการ์ดและองค์กรใหม่ๆ “อาณานิคม”
        เป็นภาคเสริมสำหรับเกมพลิกพิภพดาวอังคาร
        โดยต้องเล่นร่วมกับเกมพลิกพิภพดาวอังคารภาคหลัก
        และสามารถนำไปใช้เล่นร่วมกับภาคเสริมชุดอื่นๆ รวมถึงกติกาพิเศษอื่นๆได้
      </h3>
      <Link to={`http://localhost:3000/comment/add/8`}>Comment</Link>
      <Footer />
    </div>
  );
}
export default Game08;
