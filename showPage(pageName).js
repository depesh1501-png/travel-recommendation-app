function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const selectedPage = document.getElementById(pageName);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Update nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));
    if (pageName === 'home') {
        navLinks[0].classList.add('active');
    } else if (pageName === 'about') {
        navLinks[1].classList.add('active');
    } else if (pageName === 'contact') {
        navLinks[2].classList.add('active');
    }
}