const newComment = async(event) => {
    event.preventDefault();

    const body = document.querySelector('#body').value.trim();
    const user_id = document.querySelector('#create-comment').getAttribute('data-user');
    const post_id = document.querySelector('#create-comment').getAttribute('data-post');
    const likes = 0;
    const dislikes = 0;

    const response = await fetch('/api/comments/create', {
        method: 'POST',
        body: JSON.stringify({ body, user_id, post_id, likes, dislikes }),
        headers: { 'Content-Type': 'application/json' }
    });

    if(response.ok) {
        document.location.replace(`/post/${post_id}`);
    } else {
        alert('Failed to create new comment');
    }
};

document.querySelector('.create-comment').addEventListener('submit', newComment);