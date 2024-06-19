const openMenu = document.getElementById("menu");
const nav = document.getElementById("nav");

openMenu.addEventListener('click', () => {
    if (openMenu.classList.contains('holberton_school-icon-menu')) {
        nav.classList.remove('hidden-sm');
        nav.classList.add('revealed');
        openMenu.classList.remove('holberton_school-icon-menu');
        openMenu.classList.add('X');
        openMenu.innerText = 'x';
        openMenu.id = "close";
    } else {
        nav.classList.add('hidden-sm');
    nav.classList.remove('revealed');
    openMenu.classList.add('holberton_school-icon-menu');
    openMenu.classList.remove('X');
    openMenu.innerText = '';
    openMenu.id = "menu";
    }
});