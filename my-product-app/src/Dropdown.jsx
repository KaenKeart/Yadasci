import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

export default function Dropdown() {
    
  return (
    
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

  );
}