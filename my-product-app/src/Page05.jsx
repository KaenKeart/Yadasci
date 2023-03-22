import Logo_YADA from '../src/img/Logo_YADA.png'

function Page05() {

    return (
        <div>
  <title>YADASCI Board game</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet" />
  <link rel="stylesheet" href="Project_01.css" type="text/css" />
  <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css" />
  <header>
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a href="Project_01.html"><img src={Logo_YADA} width={120} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="Project_01.html">หน้าหลัก</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                บอร์ดเกม
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="Page01.html">บอร์ดเกมเก่า</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="Page02.html">บอร์ดเกมเด็ก</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="Page03.html">ภาคเสริม</a></li>
              </ul>
            </li><li className="nav-item">
              <a className="nav-link" href="Page04.html">เกมยอดนิยม</a>
            </li>
          </ul>
          <div className="form-floating mb-3">
            <input className="form-control" id="floatingInput" placeholder=" " />
            <label className="DocSearch DocSearch-Button
                      center" aria-label="Search"><span className="DocSearch-Button-Container"><svg width={20} height={20} className="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386
                                  14.386l4.0877
                                  4.0877-4.0877-4.0877c-2.9418
                                  2.9419-7.7115
                                  2.9419-10.6533
                                  0-2.9419-2.9418-2.9419-7.7115
                                  0-10.6533
                                  2.9418-2.9419 7.7115-2.9419 10.6533
                                  0 2.9419 2.9418
                                  2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" /></svg><span>
                  Search</span></span></label>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <h1><span style={{color: '#000000'}}>บอร์ดเกม</span>
    <span style={{color: '#5B785B'}}>เก่า</span>
  </h1>
  <main>
    <section>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_22.html"><img src="img/game_22.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>ไชน่าทาวน์</h6>
          <div className="text-end text-danger">1,450 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
      <div className="card float-start me-4" style={{width: '18rem'}}>
        <a href="game_23.html"><img src="img/game_23.jpg" className="card-img-top" alt="..." width={250} height={250} /></a>
        <div className="card-body">
          <h6 className="card-title" style={{minHeight: 70}}>หนึ่งคืนปริศนาเกมล่ามนุษย์หมาป่า</h6>
          <div className="text-end text-danger">850 ราคา
          </div>
          <a href="#" className="btn btn-primary">หยิบใส่ตะกร้า</a>
        </div>
      </div>
    </section>
  </main>
  <footer className="container-fluid
          position-fixed
          bottom-0
          start-0
          text-light text-center
          py"> YADASCI@PSU.AC.TH
    .All
    Rights Reserved<br />
  </footer>
</div>

            )
}
export default Page05;