import Logo_YADA from '../src/img/Logo_YADA.png'

function Page06() {

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
    <nav classname="navbar navbar-expand-lg ">
      <div classname="container-fluid">
        <a href="Project_01.html"><img src={Logo_YADA} width={120} /></a>   
        <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span classname="navbar-toggler-icon">
          </span></button>
        <div classname="collapse navbar-collapse" id="navbarSupportedContent">
          <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
            <li classname="nav-item">
              <a classname="nav-link active" aria-current="page" href="Project_01.html">หน้าหลัก</a>
            </li>
            <li classname="nav-item dropdown">
              <a classname="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                บอร์ดเกม
              </a>
              <ul classname="dropdown-menu">
                <li><a classname="dropdown-item" href="Page01.html">บอร์ดเกมภาษาไทย</a></li>
                <li><hr classname="dropdown-divider" /></li>
                <li><a classname="dropdown-item" href="Page02.html">บอร์ดเกมเด็ก</a></li>
                <li><hr classname="dropdown-divider" /></li>
                <li><a classname="dropdown-item" href="Page03.html">ภาคเสริม</a></li>
              </ul>
            </li><li classname="nav-item">
              <a classname="nav-link" href="Page04.html">เกมยอดนิยม</a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="Page05.html">บอร์ดเกมเก่า</a>
            </li>
          </ul>
          <div classname="form-floating mb-3">
            <input classname="form-control" id="floatingInput" placeholder=" " />
            <label classname="DocSearch DocSearch-Button
                          center" aria-label="Search"><span classname="DocSearch-Button-Container"><svg width="{20}" height="{20}" classname="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386
                                      14.386l4.0877
                                      4.0877-4.0877-4.0877c-2.9418
                                      2.9419-7.7115
                                      2.9419-10.6533
                                      0-2.9419-2.9418-2.9419-7.7115
                                      0-10.6533
                                      2.9418-2.9419 7.7115-2.9419 10.6533
                                      0 2.9419 2.9418
                                      2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillrule="evenodd" strokelinecap="round" strokelinejoin="round" /></svg><span>
                  Search</span></span></label>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <footer classname="container-fluid
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
export default Page06;