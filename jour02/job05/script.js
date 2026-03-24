window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const scrollPercent = scrollTop / (totalHeight - viewportHeight);
    const colorValue = Math.ceil(scrollPercent * 255);
    document.getElementById("footer").style.backgroundColor = 'rgb(' + colorValue + ', 100, 200)';
});