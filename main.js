const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

$('#post').on('click',function(){
    const text = $(this).closest('#container').find('input').val()
    tweeter.addPost(text)
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click','.delete',function(){
    let postId = $(this).closest('.post').data().id
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click','.addComment',function(){
    const text = $(this).siblings('.commentText').val()
    tweeter.addComment(text,$(this).closest('.post').data().id)
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click','.delete-comment',function(){
    let postId = $(this).closest('div').closest('.post').data().id
    let commentId = $(this).siblings('.comments').data().id
    tweeter.removeComment (postId,commentId)
    renderer.renderPosts(tweeter.getPosts())
})



