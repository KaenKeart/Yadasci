import Footer from './footer';
import Navbar from './Navbar';

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
        <a href="game_08.html"><img src="img/game_08.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>พลิกพิภพดาวอังคาร อาณานิคม</h6>
          <div className="text-end text-danger">950 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_09.html"><img src="img/game_09.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>พลิกพิภพดาวอังคาร ปฏิบัติการดาวศุกร์</h6>
          <div className="text-end text-danger">950 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_10.html"><img src="img/game_10.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>พลิกพิภพดาวอังคาร ปฐมบท</h6>
          <div className="text-end text-danger">650 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_12.html"><img src="img/game_12.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>คฤหาสน์วิปลาส ไขประตูสู่วิวรณ์</h6>
          <div className="text-end text-danger">1,100 ราคา
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
export default Page03;