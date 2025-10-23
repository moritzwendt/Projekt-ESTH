function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');

    const menu = nav.querySelector('ul');
    if (nav.classList.contains('open')) {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        menu.style.position = 'absolute';
        menu.style.top = '80px';
        menu.style.right = '0';
        menu.style.background = '#fff';
        menu.style.width = '100%';
        menu.style.padding = '20px 0';
        menu.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
    } else {
        menu.removeAttribute('style');
    }
}