const sidebar = document.querySelector('.sidenav');
const sidebarToggle = document.querySelector('.sidenav-toggle');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('sidenav-close');
});
