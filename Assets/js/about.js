document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = this.getAttribute('href').replace('.html', '');
    });
});