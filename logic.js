const Tweeter = function () {

    const _posts = []
    let postIdCounter = 0
    let commentIdCounter = 0

    const getPosts = function () {
        return _posts
    }

    const addPost = function (text) {
        postIdCounter++
        const newPost = {
            id: "p" + postIdCounter,
            text: text,
            comments: [] 
        }
        _posts.push(newPost)
    }

    const removePost = function (postID) {
        let eleIndex = -1
        for ( i in _posts) {
            if(_posts[i].id==postID) eleIndex=i 
        }
        if(eleIndex!=-1) {
            _posts.splice(eleIndex,1)
        }
    }

    const addComment = function (text,postID) {
        commentIdCounter++
        let newComment = {
            text:text,
            id: "c" + commentIdCounter
        }
        for(post of _posts) {
            if(post.id==postID) {
                post.comments.push(newComment)
            }
        }
    }

    const removeComment = function (postID,commentID) {
        for ( i in _posts) {
            if(_posts[i].id==postID) {
                for(j in _posts[i].comments) {
                    if(_posts[i].comments[j].id==commentID) {
                        _posts[i].comments.splice(j,1)
                        return
                    }
                }
            }
        }
    }

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}


/************************************ Tests ********************************/
const tweeter = Tweeter()

//Dummy Data
tweeter.addPost("First post!")
tweeter.addPost("Aw man, I wanted to be first")
tweeter.addComment("First comment on first post!","p1")
tweeter.addComment("Second comment on first post!!","p1")
tweeter.addComment("Third comment on first post!!!","p1")
tweeter.addComment("Don't wory second poster, you'll be first one day.","p2")
tweeter.addComment("Yeah, believe in yourself!" ,"p2")
tweeter.addComment("Haha second place what a joke." ,"p2")


tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}
