const menu = document.getElementById("menu");

menu.onclick = () => {
    const mobileMenu = document.querySelector('.desktop-nav');
    mobileMenu.classList.toggle("open");
};
const topicMenu = document.querySelector('#topic-menu');

topicMenu.onclick = () => {
    const topic = document.querySelector('.desktop-menu');
    topic.classList.toggle("open");
};