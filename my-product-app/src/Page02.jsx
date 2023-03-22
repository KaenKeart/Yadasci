import Logo_YADA from '../src/img/Logo_YADA.png'
import Footer from './footer';
import Navbar from './Navbar';

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
        <a href="game_06.html"><img src="img/game_06.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>หมากรุกสากลแม่เหล็ก</h6>
          <div className="text-end text-danger">140 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_07.html"><img src="img/game_07.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>เกมแม่เหล็กบันไดงู</h6>
          <div className="text-end text-danger">199 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_13.html"><img src="img/game_13.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>ราชันแห่งโตเกียว</h6>
          <div className="text-end text-danger">1,450 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_14.html"><img src="img/game_14.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>นักท่องฝัน</h6>
          <div className="text-end text-danger">1,400 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_15.html"><img src="img/game_15.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>Get Packing</h6>
          <div className="text-end text-danger">950 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_16.html"><img src="img/game_16.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>เกมจดหมายรัก (SSR)</h6>
          <div className="text-end text-danger">450 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
    </section>
  </main>
    <Footer/>

</div>

            )
}
export default Page02;