function menu () {

    var adaptiveHumb = document.querySelector('.adaptive-humb'),
        navList = document.querySelector('.nav-list');
    adaptiveHumb.addEventListener('click', function () {
        adaptiveHumb.classList.toggle('adaptive-humb-active');
        navList.classList.toggle('active-nav-list');
       
    });
}    

module.exports = menu;