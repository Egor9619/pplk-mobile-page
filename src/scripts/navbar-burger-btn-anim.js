    const navbarToggle = document.getElementById('burger-btn');
    const header = document.querySelector('.header');

    navbarToggle.addEventListener('click', function() {
        if (header.classList.contains('open')) {
            header.classList.remove('open');
        } else {
            header.classList.add('open');
        }
    });