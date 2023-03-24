import "./game.css";

function Comment() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="Comment.css" />
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <title>Video Comment &amp; Like</title>
      <div className="container center__display">
        <div className="top">
          <div className="video__container">
            <img src="img/game_01.jpg" alt="..." width={400} height={400} />
          </div>
          <form>
            <div className="heart__icon center__display">
              <i className="far fa-heart" />
            </div>
            <div className="form__info center__display">
              <input
                type="text"
                name="user"
                id="user"
                placeholder="Your user name"
              />
              <input
                type="text"
                name="comment"
                id="comment"
                placeholder="Add a short comment here"
              />
            </div>
            <button type="submit" className="submit__btn">
              Submit
            </button>
          </form>
          <div className="likes__count">
            <i className="far fa-heart" />
            <small className="count">0</small>
          </div>
        </div>
      </div>
      <div className="comments__container center__display">
        {/* <div class="comment__card">
          <div class="pic center__display">
              A
          </div>
          <div class="comment__info">
              <small class="nickname">
                  UserNameHere
              </small>
              <p class="comment">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, in magnam! Libero?
              </p>
              <div class="comment__bottom">
                  <div class="heart__icon--comment">
                      <i class="far fa-heart"></i>
                  </div>
                  <button>
                      Reply
                  </button>   
              </div>
          </div>
      </div> */}
      </div>
    </div>
  );
}
export default Comment;
