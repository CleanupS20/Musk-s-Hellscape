const addLike = async(event) => {
    event.preventDefault();

    const element = $(event.target).parent();
    const id = element.attr('data-post');
    const count = element.attr('data-count');
    const user_id = element.attr('data-user');
    const likes = Number.parseInt(count)+1;

    console.log(id);
    const response = await fetch('/api/post/like', {
        method: 'PUT',
        body: JSON.stringify({id, user_id, likes}),
        headers: { 'Content-Type': 'application/json' }
    });

    if(response.ok) {
        // document.location.replace(`/login`);
    } else {
        alert('Failed to add like');
    }
};

$('.category-cont').on('click', '#add-like', addLike);

// Bellow is liking for comments

const addCommentLike = async(event) => {
    event.preventDefault();

    const element = $(event.target).parent();
    const id = element.attr('data-comment');
    const count = element.attr('data-count');
    const user_id = element.attr('data-user');
    // const post_id = element.attr('data-postid');
    const likes = Number.parseInt(count)+1;
    console.log(element);
    const response = await fetch('/api/comments/like', {
        method: 'POST',
        body: JSON.stringify({id, user_id, likes}),
        headers: { 'Content-Type': 'application/json' }
    });

    if(response.ok) {
        // document.location.replace(`/login`);
    } else {
        alert('Failed to add like');
    }
};

$('.comment-cont').on('click', '#add-cm-like', addCommentLike);