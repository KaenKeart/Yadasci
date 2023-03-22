import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import Logo_YADA from '../src/img/Logo_YADA.png'


export default function Navbar() {
    
  return (

    <div><title>YADASCI Board game</title>
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
              <Link to="/home" className="nav-link active" aria-current="page" >หน้าหลัก</Link>
            </li> 
            <MDBDropdown>
      <MDBDropdownToggle tag='a'        className='btn btn-#5B785B'> 
        บอร์ดเกม
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link>บอร์ดเกมเก่า</MDBDropdownItem>
        <MDBDropdownItem link>บอร์ดเกมเด็ก</MDBDropdownItem>
        <MDBDropdownItem link>ภาคเสริม</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
              <Link to="/page01" className="nav-link" >เกมยอดนิยม</Link>
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
</div>

  );
}