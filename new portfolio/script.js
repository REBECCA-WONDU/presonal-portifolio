const parentContainer = document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event => {
    const current = event.target;
    const isReadMoreBtn = current.classList.contains('read-more-btn');

    if (!isReadMoreBtn) return;

    const currentText = current.parentContainer.querySelector('.read-more-text');

    if (currentText) {
        currentText.classList.toggle('read-more-text--show');
    }

    if (current.textContent.includes('Read More')) {
        current.textContent = "Read Less...";
    } else {
        current.textContent = "Read More...";
    }
});







// main(toogle) icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
    
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all links
            navLinks.forEach(links => {
                links.classList.remove('active');
            });

            // Add 'active' class to the link corresponding to the current section
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            // Break out of the loop since we found the correct section
            return;
        }
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

// remove main(toogle) icon navbar when scroll
menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');
};


// scroll reveal


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});



 ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
 ScrollReveal().reveal('.home-img, .portfolio-box,  .contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'});