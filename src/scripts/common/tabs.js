function tabs() {

    $('.tab-filter-button').on('click', function (){
        $('.tab-menu--list').toggleClass('active-tab-mobile');
        $('.tab-filter-button').toggleClass('active-tab'); 
    });

    $('.content-tab article').hide();
    $('.content-tab article:first').show();

    $('.tab-menu--item').each(function(i){
        $(this).attr('data', '#tab-' +i );

    })

    $('.tab-menu--item').on('click', function () {
        $('.tab-menu--item').removeClass('active-tab');
        $('.content-tab article').hide();
        $(this).addClass('active-tab');
        var selectTab = $(this).attr('data');
        $(selectTab).fadeIn();
    });
}

module.exports = tabs;