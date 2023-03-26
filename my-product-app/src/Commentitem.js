import { Link } from "react-router-dom";

export default function CommentItem(props) {
  const onDelete = async () => {
    props.onDelete(props.data);
  };

  return (
    <div className="row border rounded shadow-sm mt-3">
      <div className="col-7">
        <h5 className="text-primary">{props.data.comment_name}</h5>
        <Link
          to={`/comment/${props.data.comment_id}`}
          className="btn btn-outline-primary me-3"
        >
          แก้ไข
        </Link>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={onDelete}
        >
          ลบ
        </button>
      </div>
    </div>
  );
}
