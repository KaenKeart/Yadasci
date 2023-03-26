import Footer from "./footer";
import Navbar from "./Navbar";
import "./contact.css";
import Contactitem from "./Contactitem";
import { useEffect, useState } from "react";
import { API_GET } from "./api";
import { useParams } from "react-router-dom";

export default function Contact(props) {
  let params = useParams();
  const [contactId, setContactId] = useState(0);
  const [contactnick, setContactNick] = useState("");
  const [contactname, setContactName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8000/api/contact", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });

      let json = await response.json();
      setContacts(json.data);
    }
    console.log(contacts);
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData(contactId) {
      let json = await API_GET("contact/" + contactId);

      var data = json.data[0];

      //setContactId(data.contact_id);
      setContactNick(data.contact_nickname);
      setContactName(data.contact_name);
      setStudentId(data.student_id);
      setImageUrl(data.image_url);
    }

    if (params.contactId != "add") {
      fetchData([params.contactId]);
    }
  }, [params.contactId]);


  return (
    <div>
      <Navbar />
      <div className="container mt-3">
    {contacts.map((k) => (
      <Contactitem key={k.contactId} data={k} />
    ))
    }
  </div>
      <Footer />
    </div>
  );
}
