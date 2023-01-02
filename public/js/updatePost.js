const updatePost = async(event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const body = document.querySelector('#post-body').value.trim();
    const category_id = document.querySelector('#post-category').value.trim();
    const user_id = document.querySelector('#update-post').getAttribute('data-user');
    const id = document.querySelector('#update-post').getAttribute('data-post');

    if( title && body) {
        const response = await fetch('/api/post/update', {
            method: 'PUT',
            body: JSON.stringify({ id, title, body, category_id, user_id }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update the posts content');
        }
    }
};

document.querySelector('.blog-update').addEventListener('submit', updatePost);