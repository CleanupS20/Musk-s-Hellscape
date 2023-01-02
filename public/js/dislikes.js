const addDislike = async(event) => {
    event.preventDefault();

    const element = $(event.target).parent();
    const id = element.attr('data-post');
    const count = element.attr('data-count');
    const user_id = element.attr('data-user');
    const dislikes = Number.parseInt(count)+1;


    const response = await fetch('/api/post/dislike', {
        method: 'PUT',
        body: JSON.stringify({id, user_id, dislikes}),
        headers: { 'Content-Type': 'application/json' }
    });

    if(response.ok) {
        // document.location.replace(`/login`);
    } else {
        alert('Failed to add dislike');
    }
};

$('.category-cont').on('click', '#add-dislike', addDislike);

// Below is comment disliking

const addCommentDislike = async(event) => {
    event.preventDefault();

    const element = $(event.target).parent();
    const id = element.attr('data-comment');
    const count = element.attr('data-count');
    const user_id = element.attr('data-user');
    const dislikes = Number.parseInt(count)+1;

    console.log(id);
    const response = await fetch('/api/comments/dislike', {
        method: 'POST',
        body: JSON.stringify({id, user_id, dislikes}),
        headers: { 'Content-Type': 'application/json' }
    });

    if(response.ok) {
        // document.location.replace(`/login}`);
    } else {
        alert('Failed to add dislike');
    }
};

$('.comment-cont').on('click', '#add-cm-dislike', addCommentDislike); 