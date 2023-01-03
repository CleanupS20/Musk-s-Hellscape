module.exports = {
    map_category: (post_id, title, body, user_id, username, categoryId, id, likes, dislikes) => {
        if(categoryId == id) {
            return `<div class="card">
                        <div class="card-body">
                            <div class="post-card">
                                <a href="/post/${post_id}"><h5>${title}</h5></a>
                                <p>${body}</p>
                                <span>${username}</span>
                                <div class="likes-cont">
                                    <span>${likes}</span><a id="add-like" data-post=${post_id} data-count=${likes} data-user=${user_id}><i class="fa fa-thumbs-up"></i></a>
                                    <span>${dislikes}</span><a id="add-dislike" data-post=${post_id} data-count=${dislikes} data-user=${user_id}><i class="fa fa-thumbs-down"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>`;
        }
    },
    format_date: (date) => {
        return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
    }
};