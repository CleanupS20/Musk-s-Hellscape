const deletePost = async(event) => {
    event.preventDefault();

    const id = $(event.target).attr('data-id');
    const response = await fetch('/api/post/delete', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' }
    });

    if(response.ok) {
        document.location.replace(`/dashboard`);
    } else {
        alert('Failed to delete post');
    }
};

$('.post-cont').on('click', '#delete-post', deletePost);