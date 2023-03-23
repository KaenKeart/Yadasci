import './comment.css';

function Comment() {

    return (
<div id="comment" className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label" />
  <textarea className="form-control" rows={2} placeholder="Comment" defaultValue={""} style={{width: "500px"}} />
</div>
   )
}
export default Comment;