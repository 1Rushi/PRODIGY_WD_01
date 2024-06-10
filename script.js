window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
   
    if (window.scrollY > 10 ) {
        navbar.style.backgroundColor = 'orange'; // Darker background on scroll
    } else {
        navbar.style.backgroundColor = '#ff0000'; // Original background
    }
});