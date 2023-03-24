    const submitBtn = document.querySelector('.submit__btn')
    const userName = document.querySelector('#user')
    const comment = document.querySelector('#comment')
    const likeIcon = document.querySelector('.heart__icon')
    const count = document.querySelector('.count')
    const commentsCont = document.querySelector('.comments__container')
    const replyBtns = document.querySelectorAll('.comment__card button')
    replyBtns.forEach(replyBtn => {
    replyBtn.addEventListener('click', replyComment)
    })

    

    likeIcon.addEventListener('click', likeVideo)
    submitBtn.addEventListener('click', submitFeedback)
    


    feedbackArr = []
    let positiveFeedback = false
    let likesCount = 0

    function submitFeedback(e){
        // get user name
        const userForm = userName.value 
        // get feedback
        const commentForm = comment.value 
        // if inputs are not empty
        if(userForm && commentForm !== ''){
            // create new feedback
            newFeedback = {
                "id": Math.floor((Math.random() * 1000)+ 1),
                "userName": userForm,
                "userComment": commentForm,
                "typeOfFeedback": positiveFeedback
            }
            // add new feedback to array
            feedbackArr.push(newFeedback)
            // if liked add to count
            if(positiveFeedback === true){
                addLikes()
            }
            // clear inputs 
            resetForm()
            // add feedback to list
            addFeedback(newFeedback)
        }


        e.preventDefault()
    }

function replyComment(e) {
  const parentComment = e.target.closest('.comment__card')
  const replyForm = document.createElement('form')
  replyForm.innerHTML = `
    <div class="pic center__display">
        ${parentComment.querySelector('.pic').innerHTML}
    </div>
    <div class="comment__info">
        <small class="nickname">${parentComment.querySelector('.nickname').innerHTML}</small>
        <textarea class="reply__comment"></textarea>
        <div class="comment__bottom">
            <button class="submit__reply">Submit</button>
        </div>
    </div>
  `
  parentComment.appendChild(replyForm)

  const submitReplyBtn = replyForm.querySelector('.submit__reply')
  submitReplyBtn.addEventListener('click', (e) => {
    const replyComment = replyForm.querySelector('.reply__comment').value
    if (replyComment !== '') {
      const letter = userName.value.charAt(0)
      const replyCard = document.createElement('div')
      replyCard.classList.add('comment__card', 'reply')
      replyCard.innerHTML = `
        <div class="pic center__display">${letter}</div>
        <div class="comment__info">
            <small class="nickname">${userName.value}</small>
            <p class="comment">${replyComment}</p>
        </div>
      `
      parentComment.querySelector('.comment__bottom').insertAdjacentElement('beforebegin', replyCard)
      replyForm.remove()
    }
    e.preventDefault()
  })

  e.preventDefault()
}


    function addReply(id, item) {
    const parentDiv = document.getElementById(id)
    const replyDiv = `
        <div class="comment__reply">
            <div class="pic center__display">
                G
            </div>
            <div class="comment__info">
                <small class="nickname">
                    ${item.userName}
                </small>
                <p class="comment">
                    ${item.userComment}
                </p>
                <div class="comment__bottom">
                    <div class="heart__icon--comment">
                        ${item.typeOfFeedback ? `<i class="fas fa-heart positive"></i>` : `<i class="far fa-heart"></i>`}
                    </div>
                </div>
            </div>
        </div>
    `
    parentDiv.insertAdjacentHTML('beforeend', replyDiv)
}


    function likeVideo(){
        likeIcon.classList.toggle('liked')

        if(likeIcon.classList.contains('liked')){
            likeIcon.innerHTML = `<i class="fas fa-heart"></i>`
            // set feedback to liked
            positiveFeedback = true
        } else {
            likeIcon.innerHTML = `<i class="far fa-heart"></i>`
            // set feedback to not liked
            positiveFeedback = false
        }
    }

    function addLikes(){
        likesCount++
        count.innerHTML = likesCount
    }

    function resetForm(){
        userName.value = ''
        comment.value = ''
        likeIcon.innerHTML = `<i class="far fa-heart"></i>`
        positiveFeedback = false
    }

    function addFeedback(item){
    // select first letter of the user name
    const letter = (item.userName).charAt(0)
    // create new div
    const div = document.createElement('div')
    // add class
    div.classList = 'comment__card'
    // add id
    div.id = item.id 
    // add html
    div.innerHTML = `
        <div class="pic center__display">
            ${letter}
        </div>
        <div class="comment__info">
            <small class="nickname">
                ${item.userName}
            </small>
            <p class="comment">
                ${item.userComment}
            </p>
            <div class="comment__bottom">
                <div class="heart__icon--comment">
                    ${item.typeOfFeedback ? `<i class="fas fa-heart positive"></i>` : `<i class="far fa-heart"></i>`}
                </div>
                <button class="reply-btn">
                    Reply
                </button>
            </div>
        </div>
    `
    // insert feedback into the list
    commentsCont.insertAdjacentElement('beforeend', div)

    // add event listener to reply button
    const replyBtn = div.querySelector('.reply-btn')
    replyBtn.addEventListener('click', openReplyInput)
}

function openReplyInput(e){
    // create input field and submit button
    const replyInput = document.createElement('input')
    replyInput.classList = 'reply-input'
    replyInput.placeholder = 'Write a reply...'

    const submitBtn = document.createElement('button')
    submitBtn.classList = 'reply-submit-btn'
    submitBtn.innerHTML = 'Submit'

    // insert input and submit button after reply button
    const replyBtn = e.target
    replyBtn.insertAdjacentElement('afterend', replyInput)
    replyInput.insertAdjacentElement('afterend', submitBtn)

    // add event listener to submit button
    submitBtn.addEventListener('click', submitReply)
}

function submitReply(e){
    // get user name
    const userForm = 'Anonymous'
    // get feedback
    const commentForm = e.target.previousElementSibling.value
    // if input is not empty
    if(commentForm !== ''){
        // create new feedback
        newFeedback = {
            "id": Math.floor((Math.random() * 1000)+ 1),
            "userName": userForm,
            "userComment": commentForm,
            "typeOfFeedback": false
        }
        // add new feedback to array
        feedbackArr.push(newFeedback)
        // clear input 
        e.target.previousElementSibling.value = ''
        // add feedback to list
        addFeedback(newFeedback)
    }
}



