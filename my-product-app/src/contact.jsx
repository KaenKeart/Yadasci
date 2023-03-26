import Footer from "./footer";
import Navbar from "./Navbar";
import "./contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Navbar />
      <Link to={"/comment/add"} className="nav-link btn">
        เพิ่มสินค้า
      </Link>
      <Footer />
    </div>
  );
}
export default Contact;
