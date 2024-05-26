function toggleMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('active');
    const hamburger = document.querySelector('.hamburger i');
    const logo = document.querySelector('.logo');
    if (nav.classList.contains('active')) {
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-times');
        logo.style.display = 'none';
    } else {
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars');
        logo.style.display = 'block';
    }
}

function toggleCare(element) {
    const isActive = element.classList.contains('active');
    const allGuides = document.querySelectorAll('.guide');
    allGuides.forEach(guide => {
        guide.classList.remove('active');
        const iconClass = guide.getAttribute('data-icon');
        guide.querySelector('.text-content').innerHTML = `
            <h3>${guide.getAttribute('data-title')} <i class="${iconClass}"></i></h3>
            <p>${guide.getAttribute('data-intro')}</p>
            <button class="more-info">Visa mer</button>
        `;
        guide.querySelector('.guide-content').style.backgroundColor = 'white';
    });
    if (!isActive) {
        element.classList.add('active');
        const iconClass = element.getAttribute('data-icon');
        element.querySelector('.text-content').innerHTML = `
            <h3>${element.getAttribute('data-title')} <i class="${iconClass}"></i></h3>
            <p>${element.getAttribute('data-care')}</p>
            <button class="more-info">Tillbaka</button>
        `;
        element.querySelector('.guide-content').style.backgroundColor = '#E2F1E5'; /* Ljusgrön färg */
    }
}
