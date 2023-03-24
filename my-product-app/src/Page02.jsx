import { Link } from 'react-router-dom';
import Footer from './footer';
import Navbar from './Navbar';
import game_06 from '../src/img/game_06.jpg'
import game_07 from '../src/img/game_07.jpg'
import game_13 from '../src/img/game_13.jpg'
import game_14 from '../src/img/game_14.jpg'
import game_15 from '../src/img/game_15.jpg'
import game_16 from '../src/img/game_16.jpg'

function Page02() {

    return (
        <div>
  <Navbar/>
  <h1><span style={{color: '#000000'}}>บอร์ดเกม</span>
    <span style={{color: '#5B785B'}}>เด็ก</span>
  </h1>
  <main>
    <section>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="/game_06"><img src={game_06} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>หมากรุกสากลแม่เหล็ก</h6>
          <div className="text-end text-danger">140 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="/game_07"><img src={game_07} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>เกมแม่เหล็กบันไดงู</h6>
          <div className="text-end text-danger">199 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="/game_13"><img src={game_13} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>ราชันแห่งโตเกียว</h6>
          <div className="text-end text-danger">1,450 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="/game_14"><img src={game_14} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>นักท่องฝัน</h6>
          <div className="text-end text-danger">1,400 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="/game_15"><img src={game_15} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>Get Packing</h6>
          <div className="text-end text-danger">950 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="/game_16"><img src={game_16} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>เกมจดหมายรัก (SSR)</h6>
          <div className="text-end text-danger">450 ราคา
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
export default Page02;