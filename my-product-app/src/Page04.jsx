import Footer from './footer';
import Navbar from './Navbar';

function Page02() {

    return (

<div>
            <Navbar/>

  <br /><h1 id="section"><span style={{color: '#000000'}}> บอร์ดเกม</span>
    <span style={{color: '#5B785B'}}>ยอดนิยม</span>
  </h1>
  <main>
    <section>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_01.html"><img src="img/game_01.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>คฤหาสน์วิปลาส</h6>
          <div className="text-end text-danger">3,650 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_02.html"><img src="img/game_02.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>เกมโค่นอำนาจ</h6>
          <div className="text-end text-danger">700 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_03.html"><img src="img/game_03.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>7 สิ่งมหัศจรรย์</h6>
          <div className="text-end text-danger">1,800 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_04.html"><img src="img/game_04.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>เกมล่าปริศนามนุษย์หมาป่า</h6>
          <div className="text-end text-danger">850 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_05.html"><img src="img/game_05.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>ปีกปักษา</h6>
          <div className="text-end text-danger">1,900 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_17.html"><img src="img/game_17.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>เหมียว ระเบิด</h6>
          <div className="text-end text-danger">950 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_18.html"><img src="img/game_18.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>ผู้ตรวจการแห่งนอตติงแฮม</h6>
          <div className="text-end text-danger">1,450 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_19.html"><img src="img/game_19.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>พลิกพิภพดาวอังคาร</h6>
          <div className="text-end text-danger">2,450 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_20.html"><img src="img/game_20.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>เกมค้าเพชร</h6>
          <div className="text-end text-danger">1,500 ราคา
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