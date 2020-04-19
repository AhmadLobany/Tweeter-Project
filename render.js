const Renderer = function () {

    const addPost = function (post) {
        $('#posts').append(`<div class="post" data-id="${post.id}"></div`)
        $(`[data-id="${post.id}"]`).append(`<button class="delete">Delete Post</button>`)
        $(`[data-id="${post.id}"]`).append(`<p class="post-text">${post.text}</p>`)
        for (comment of post.comments) {
            // $(`[data-id="${post.id}"]`).append(`<p class="comments" data-id="${comment.id}">${comment.text}</p>`)
            $(`[data-id="${post.id}"]`).append(`<div><div class="delete-comment">X</div><p class="comments" data-id="${comment.id}">${comment.text}</p></div>`)
        }
        $(`[data-id="${post.id}"]`).append(`<input type="text" placeholder="Comment" class="commentText" id="input">`)
        $(`[data-id="${post.id}"]`).append(`<button class="addComment">Comment</button>`)

    }

    const renderPosts = function (posts) {
        $('#posts').empty()
        for (post of posts) {
            addPost(post)
        }
    }

    return { renderPosts };
}