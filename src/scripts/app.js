var menu = require('./common/menu'),
    tabs = require('./common/tabs'),
    digitCount = require('./common/digit-count'),
    clickMenu = require('./common/click-menu'),
    sliderBlog = require('./common/slider-blog');


if (document.querySelector('.header')) {
    menu();
}
if (document.querySelector('.tabs')) {
    tabs();
}
if (document.querySelector('.block-number')) {
    digitCount();
}
if (document.querySelector('.nav-list')) {
    clickMenu();
}
if (document.querySelector('.blog-slider')) {
    sliderBlog();
}
