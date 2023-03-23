import { Link } from "react-router-dom";

export default function ProductItem(props) {

    const onDelete = async () => {
        props.onDelete(props.data);
    }

    return (
<div className="row border rounded shadow-sm mt-3" style={{ display: "flex", alignItems: "center" }}>
    <div className="col-3">
        <img src={`http://localhost:8000/images/${props.data.image_url}`} style={{ width: "200px", height: "200px", maxWidth: "100%", maxHeight: "100%" }} />
    </div>
    <div className="col-7">
        <h5 className="text-rpimary">{props.data.product_name}</h5>
        <Link to={`/product/${props.data.product_id}`} className="btn btn-outline-primary me-3">แก้ไข</Link>
        <button type="button" className="btn btn-outline-danger" onClick={onDelete} style={{ width: "80px" }}>
            ลบ
        </button>
    </div>
    <div className="col-2" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <span className="text-danger fs-4">{props.data.price}</span>
    </div>
</div>


    );
}