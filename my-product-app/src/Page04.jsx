import { Link } from 'react-router-dom';
import Footer from './footer';
import Navbar from './Navbar';
import game_01 from '../src/img/game_01.jpg'
import game_02 from '../src/img/game_02.jpg'
import game_03 from '../src/img/game_03.jpg'
import game_04 from '../src/img/game_04.jpg'
import game_05 from '../src/img/game_05.jpg'
import game_17 from '../src/img/game_17.jpg'
import game_18 from '../src/img/game_18.jpg'
import game_19 from '../src/img/game_19.jpg'
import game_20 from '../src/img/game_20.jpg'

function Page04() {

    return (

<div>
            <Navbar/>
  <br /><h1 id="section"><span style={{color: '#000000'}}> บอร์ดเกม</span>
    <span style={{color: '#5B785B'}}>ยอดนิยม</span>
  </h1>
  <main>
    <section>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="/game_01"><img src={game_01} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>คฤหาสน์วิปลาส</h6>
          <div className="text-end text-danger">3,650 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="game_02.jsx"><img src={game_02} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>เกมโค่นอำนาจ</h6>
          <div className="text-end text-danger">700 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="game_03.jsx"><img src={game_03} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>7 สิ่งมหัศจรรย์</h6>
          <div className="text-end text-danger">1,800 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="game_04.jsx"><img src={game_04} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>เกมล่าปริศนามนุษย์หมาป่า</h6>
          <div className="text-end text-danger">850 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="game_05.jsx"><img src={game_05} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>ปีกปักษา</h6>
          <div className="text-end text-danger">1,900 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="game_17.jsx"><img src={game_17} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>เหมียว ระเบิด</h6>
          <div className="text-end text-danger">950 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="game_18.jsx"><img src={game_18} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>ผู้ตรวจการแห่งนอตติงแฮม</h6>
          <div className="text-end text-danger">1,450 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="game_19.jsx"><img src={game_19} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>พลิกพิภพดาวอังคาร</h6>
          <div className="text-end text-danger">2,450 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="game_20.jsx"><img src={game_20} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>เกมค้าเพชร</h6>
          <div className="text-end text-danger">1,500 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>
    </section>
  </main>
    <Footer/>


</div>

   )
}
export default Page04;