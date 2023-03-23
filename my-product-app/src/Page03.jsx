import { Link } from 'react-router-dom';
import Footer from './footer';
import Navbar from './Navbar';
import game_08 from '../src/img/game_08.jpg'
import game_09 from '../src/img/game_09.jpg'
import game_10 from '../src/img/game_10.jpg'
import game_12 from '../src/img/game_12.jpg'

function Page03() {

    return (
        <div>
            <Navbar/>

  <h1><span style={{color: '#000000'}}>ภาค</span>
    <span style={{color: '#5B785B'}}>เสริม</span>
  </h1>
  <main>
    <section>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="game_08.jsx"><img src={game_08} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>พลิกพิภพดาวอังคาร อาณานิคม</h6>
          <div className="text-end text-danger">950 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="game_09.jsx"><img src={game_09} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>พลิกพิภพดาวอังคาร ปฏิบัติการดาวศุกร์</h6>
          <div className="text-end text-danger">950 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="game_10.jsx"><img src={game_10} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>พลิกพิภพดาวอังคาร ปฐมบท</h6>
          <div className="text-end text-danger">650 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="game_12.jsx"><img src={game_12} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>คฤหาสน์วิปลาส ไขประตูสู่วิวรณ์</h6>
          <div className="text-end text-danger">1,100 ราคา
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
export default Page03;