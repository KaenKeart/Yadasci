import Footer from './footer';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
import game_22 from '../src/img/game_22.jpg'
import game_23 from '../src/img/game_23.jpg'




function Page01() {

    return (
        <div>
            <Navbar/>

  <h1><span style={{color: '#000000'}}>บอร์ดเกม</span>
    <span style={{color: '#5B785B'}}>เก่า</span>
  </h1>
  <main>
    <section>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="game_22.jsx"><img src={game_22} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>ไชน่าทาวน์</h6>
          <div className="text-end text-danger">1,450 ราคา
          </div>
          <Link href="#" className="btn btn-primary">หยิบใส่ตะกร้า</Link>
        </div>
      </div>

      <div className="card float-start me-4" style={{width: '18rem'}}>
        <Link to="game_23.jsx"><img src={game_23} className="card-img-top" alt="..." width={250} height={250} /></Link>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>หนึ่งคืนปริศนาเกมล่ามนุษย์หมาป่า</h6>
          <div className="text-end text-danger">850 ราคา
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
export default Page01;