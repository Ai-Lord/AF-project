document.getElementById('fetch-posts').addEventListener('click', fetchPosts);

function fetchPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                    .then(response => response.json())
                    .then(user => {
                        const postElement = document.createElement('div');
                        postElement.classList.add('post');
                        postElement.innerHTML = `
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                        <h5>Posted by: <p> ${user.name} (${user.email})</p></h5>
                        <div class="comments-container" id="comments-${post.id}"></div>
                        `;

                        postElement.addEventListener('click', () => fetchComments(post.id));

                        postsContainer.appendChild(postElement);
                    })
                    .catch(error => {
                        console.error('Error fetching user:', error);
                    });
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
}

function fetchComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
        .then(comments => {
            let commentsHTML = '<h3>Comments:</h3>';
            comments.forEach(comment => {
                commentsHTML += `
                    <div class="comment">
                        <p><strong>${comment.name}</strong> (${comment.email})</p>
                        <p id="body">${comment.body}</p>
                    </div>
                `;
            });

            document.getElementById(`comments-${postId}`).innerHTML = commentsHTML;
        })
        .catch(error => {
            console.error('Error fetching comments:', error);
        });
}