document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('blog-search');
    const posts = document.querySelectorAll('.blog-card');

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        
        posts.forEach(post => {
            const title = post.querySelector('.post-title').textContent.toLowerCase();
            if (title.includes(term)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});