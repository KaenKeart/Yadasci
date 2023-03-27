import React from "react";

export default function Contactitem(props) {
  return (
    <div className="card float-start me-4" style={{ width: "18rem" }}>
      <img
        src={`http://localhost:8000/images/${props.data.image_url}`}
        alt="..."
        width={286}
        height={250}
      />

      <div
        className="col-2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>

      <div className="card-body">
        <h6 className="card-title" style={{ minHeight: 70 }}>
          <h6>ชื่อเล่น : {props.data.contact_nickname}</h6>
          <h6>ชื่อจริง : {props.data.contact_name}</h6>
          <h6>รหัสนักศึกษา : {props.data.student_id}</h6>
        </h6>
      </div>
    </div>
  );
}
