import { Link } from "react-router-dom";
import FavCart from "./FavCart";

export default function ProductItem(props) {
  const onDelete = async () => {
    props.onDelete(props.data);
  };

  return (
    <div className="card float-start me-4" style={{ width: "18rem" }}>
      <Link to={`/game_${props.data.product_id}`}>
        {" "}
        <img
          src={`http://localhost:8000/images/${props.data.image_url}`}
          alt="..."
          width={286}
          height={250}
        />
      </Link>

      <div
        className="col-2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>

      <div className="card-body">
        <Link to={`/game_${props.data.product_id}`}>
          <h6 className="card-title" style={{ minHeight: 70 }}>
            {props.data.product_name}
          </h6>
        </Link>

        <div className="text-end text-danger">{props.data.price} ราคา</div>
        {!props.showButtons && (
          <>
            <FavCart />
          </>
        )}
        {props.showButtons && (
          <>
            <Link
              to={`/product/${props.data.product_id}`}
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
          </>
        )}
      </div>
    </div>
  );
}
