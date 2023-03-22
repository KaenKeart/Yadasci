import Game01 from '../src/img/Game01.PNG'
import Game02 from '../src/img/Game02.png'
import Game03 from '../src/img/Game03.png'
import Game04 from '../src/img/Game04.png'
import Game11 from '../src/img/game_11.jpg'
import Game21 from '../src/img/game_21.jpg'
import Game24 from '../src/img/game_24.jpg'
import Footer from './footer'
import Navbar from './Navbar'
import styles from './Project_01.css'

function Project() {

    return (
        <div>
          <Navbar/> 
  <div id="slide">
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Game01} width={800} className="img_rsponsive" height={400} />
        </div>
        <div className="carousel-item">
          <img src={Game02} width={800} className="img_rsponsive" height={400} />
        </div>
        <div className="carousel-item">
          <img src={Game03} width={800} className="img_rsponsive" height={400} />
        </div>
        <div className="carousel-item">
          <img src={Game04} width={800} className="img_rsponsive" height={400} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <br />
  <br />
  <h1 className="text-center"><span style={{color: '#000000'}}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-stars" viewBox="0 0 16 16">
        <path d="M7.657
                          6.247c.11-.33.576-.33.686 0l.645
                          1.937a2.89
                          2.89 0 0 0 1.829
                          1.828l1.936.645c.33.11.33.576 0
                          .686l-1.937.645a2.89 2.89 0 0
                          0-1.828
                          1.829l-.645
                          1.936a.361.361 0 0 1-.686
                          0l-.645-1.937a2.89
                          2.89 0 0
                          0-1.828-1.828l-1.937-.645a.361.361 0
                          0 1
                          0-.686l1.937-.645a2.89 2.89 0 0 0
                          1.828-1.828l.645-1.937zM3.794
                          1.148a.217.217
                          0 0 1 .412
                          0l.387 1.162c.173.518.579.924 1.097
                          1.097l1.162.387a.217.217 0 0 1 0
                          .412l-1.162.387A1.734
                          1.734 0 0 0 4.593 5.69l-.387
                          1.162a.217.217
                          0 0 1-.412
                          0L3.407 5.69A1.734 1.734 0 0 0 2.31
                          4.593l-1.162-.387a.217.217 0 0 1
                          0-.412l1.162-.387A1.734
                          1.734 0 0 0 3.407
                          2.31l.387-1.162zM10.863.099a.145.145
                          0
                          0 1 .274
                          0l.258.774c.115.346.386.617.732.732l.774.258a.145.145
                          0
                          0 1 0 .274l-.774.258a1.156 1.156 0 0
                          0-.732.732l-.258.774a.145.145 0 0
                          1-.274
                          0l-.258-.774a1.156 1.156 0 0
                          0-.732-.732L9.1
                          2.137a.145.145 0 0 1
                          0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
      </svg>บอร์ดเกม</span>
    <span style={{color: '#5B785B'}}>มาใหม่</span>
  </h1>
  <main>
    <section>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_21.html"><img src={Game21} className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>เกาะภูตพิทักษ์</h6>
          <div className="text-end text-danger">2,995 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_11.html"><img src={Game11} className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>คฤหาสน์วิปลาส ถนนลี้ลับแห่งอาร์คัม</h6>
          <div className="text-end text-danger">2,650 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_24.html"><img src={Game24} className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>เมืองอาชญากรนครย่อส่วนฟูลเฮาส์</h6>
          <div className="text-end text-danger">1,100 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
    </section>
  </main>
  <div className="toast-container position-fixed bottom-0 end-0
          p-3">
    <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <svg className="bd-placeholder-img rounded me-2" width={20} height={20} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid
                      slice" focusable="false"><rect width="100%" height="100%" fill="#5B785B" /></svg>
        <strong className="me-auto">YADA</strong>
        <small className="text-muted">just now</small>
        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
      </div>
      <div className="toast-body">
        Welcome to YADASCI Board Game
      </div>
    </div>
  </div>
  <Footer/> 
</div>

    )
}
export default Project;