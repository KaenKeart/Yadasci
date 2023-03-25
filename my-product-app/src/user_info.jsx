import Footer from "./footer";
import Navbar from "./Navbar";
import "./user_info.css";

function UserInfo() {
  return (
    <div>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>user_id</th>
            <th>user_name</th>
            <th>เพศ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John</td>
            <td>ชาย</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane</td>
            <td>หญิง</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Bob</td>
            <td>ชาย</td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
}
export default UserInfo;
