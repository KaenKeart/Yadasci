import { Carousel } from "react-bootstrap";
import Footer from "./footer";
import Navbar from "./Navbar";
import game_06 from "../src/img/game_06.jpg";
import game_06_1 from "../src/img/game_06-1.jpg";
import "./game.css";
import { Link } from "react-router-dom";
function Game06() {
  return (
    <div>
      <Navbar />
      <div id="slide_game">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={game_06} className="img_responsive" alt="..." />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={game_06_1} className="img_responsive" alt="..." />
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
            <h4>เกมแม่เหล็กหมากรุกสากล</h4>
            <ul className="elementor-icon-list-items">
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  ประเภทบอร์ดเกม: ครอบครัว
                </span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">อายุ: 5+</span>
              </li>
              <li className="elementor-icon-list-item">
                <span className="elementor-icon-list-icon"></span>
                <span className="elementor-icon-list-text">
                  จำนวนผู้เล่น: 2 คน
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
        วิธีการเล่น เตรียมบอร์ดเกม ตำแหน่งเริ่มต้น: แถวแรก: รุค บิช็อป ควีน คิง
        บิช็อป ไนท์ รุค – แถวสอง: พอว์น วิธีเล่น การเดิน:
        ฝ่ายขาวเริ่มเดินหมากก่อน จากนั้นจึงผลัดกันเดินคนละตัว
        ตัวหมากทุกตัวสามารถเดินเข้าไปยึดพื้นที่ว่างหรือเข้ายึดพื้นที่ที่มีตัวหมากของฝ่ายตรงข้ามอยู่ได้โดยการยึดตัวหมากของฝ่ายตรงข้ามตัวนั้นออกจากกระดาน
        ผู้เล่นไม่สามารถเดินหมากตาที่จะเปิดช่องให้คิงของตัวเองถูกยึดได้
        หากฝ่ายใดฝ่ายหนึ่งไม่สามารถเดินหมากได้อีกเนื่องจากคิงถูกรุกและไม่มีตาเดินให้รอด
        จะถือว่าถูก “รุกจน” (checkmate) และแพ้เกม
        ตัวหมากแต่ละตัวมีรูปแบบการเดินที่ต่างกันไป คิง
        ตัวหมากที่สำคัญที่สุดของแต่ละฝ่าย เดินได้ทุกทิศ ระยะหนึ่งช่อง
        คิงสามารถเดินแบบพิเศษได้ เรียกว่าการเข้าป้อม (castling)
        โดยเล่นผสานกับรุค รุค เดินตามแนวตั้งหรือแนวนอน ระยะกี่ช่องก็ได้ บิช็อป
        เดินเป็นแนวทแยง ระยะกี่ช่องก็ได้ ควีน เดินตามแนวตั้ง แนวนอน หรือแนวทแยง
        ระยะกี่ช่องก็ได้ ไนท์ เดินเป็นรูปตัว L ในลักษณะแนวตรง 2
        ช่องแล้วเดินออกข้าง 1 ช่อง และสามารถเดินข้ามหมากตัวอื่นได้ พอว์น
        สามารถเดินไปที่ว่างข้างหน้าระยะ 1 ช่องในแนวตั้ง
        หรือหากเป็นการเดินตาแรกของพอว์นตัวนั้น สามารถเดินไปข้างหน้าได้ 2
        ช่องหากไม่มีตัวหมากอื่นขวางทาง
        พอว์นจะสามารถเดินเข้ายึดตัวหมากของฝ่ายตรงข้ามได้เฉพาะเมื่อตัวหมากนั้นอยู่ในช่องทแยงข้างหน้าเท่านั้น
        (เดินตรง ยึดทแยง) วิธีจบ เมื่อฝ่ายใด ฝ่ายนึง “รุกจน” (checkmate)
        คิงฝ่ายตรงข้ามได้ จะชนะ
      </h3>
      <Link to={`http://localhost:3000/comment/add/6`}>Comment</Link>
      <Footer />
    </div>
  );
}
export default Game06;
