import './comment.css';

function Comment(props) {

    return (

    <div className="comment-box">
      <h2>{props.title}</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
              <input type="text" id="name" />
        </div>
        <div>       
  <label htmlFor="exampleFormControlTextarea1" className="form-label" />
  <textarea className="form-control" rows={2} placeholder="Comment"  />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
   )
}
export default Comment;