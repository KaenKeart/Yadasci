import { Link } from "react-router-dom";

export default function UserItem(props) {
  const onDelete = async () => {
    props.onDelete(props.data);
  };
  return (
    <div className="card float-start me-4" style={{ width: "18rem" }}>
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
          {props.data.user_name}
        </h6>

        <div className="text-end text-danger">{props.data.user_pwd} ราคา</div>
        <Link
          to={`/product/${props.data.user_id}`}
          className="btn btn-outline-primary me-3"
        >
          แก้ไข
        </Link>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={onDelete}
          style={{ width: "80px" }}
        >
          ลบ
        </button>
      </div>
    </div>
  );
}
