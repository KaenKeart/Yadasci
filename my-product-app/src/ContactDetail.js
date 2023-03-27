import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_GET } from "./api";
import ContactItem from "./Contactitem";
import Footer from "./footer";
import Navbar from "./Navbar";

export default function ContactDetail() {
  let params = useParams();
  const [contactId, setContactId] = useState(0);
  const [contactnickname, setContactNickName] = useState("");
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
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      let json = await API_GET("contact");

      var data = json.data[0];

      setContactId(data.contact_id);
      setContactNickName(data.contact_nickname);
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
        {contacts.map((contact) => (
          <ContactItem key={contact.contact_id} data={contact} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
