const Renderer = function () {

    const addPost = function (post) {
        $('#posts').append(`<div class="post" data-id="${post.id}"></div`)
        $(`[data-id="${post.id}"]`).append(`<p class="post-text">${post.text}</p>`)
        for (comment of post.comments) {
            $(`[data-id="${post.id}"]`).append(`<p class="comments" data-id="${comment.id}">${comment.text}</p>`)
        }
    }

    const renderPosts = function (posts) {
        $('#posts').empty()
        for (post of posts) {
            addPost(post)
        }
    }

    return { renderPosts };
}