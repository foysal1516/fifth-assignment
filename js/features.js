document.getElementById('btn-history').addEventListener('click', function () {
    showASectionById('history-container');
})

document.getElementById('btn-donation').addEventListener('click', function () {
    showASectionById('cart-container')
})
// redirect the blog page
document.getElementById('blog').addEventListener('click', function () {
    window.location.href = 'blog.html';
})