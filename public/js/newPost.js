const newPost = async(event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
    const category_id = document.querySelector('#category').value.trim();
    const user_id = document.querySelector('#create-post').getAttribute('data-item');
    const likes = 0;
    const dislikes = 0;

    const response = await fetch('/api/post/create', {
        method: 'POST',
        body: JSON.stringify({title, body, category_id, user_id, likes, dislikes}),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to create new post');
    }
};

document.querySelector('#create-post').addEventListener('click', newPost);