function digitCount () {
    var blockNumber = $('.block-number'),
        satisfiedClients = 0,
        cupsOfCoffee = 0,
        pricingPosts = 0,
        likes = 0,
        weLaunched = 0;
        
    
    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop(),
            offset = blockNumber.offset().top,
            windowMargin = Math.ceil($(window).height() / 1.6),
            topBorder = offset - scrollTop - windowMargin,
            bottomEdge = blockNumber.outerHeight(true) + offset,
            bottomBorder = scrollTop + windowMargin - bottomEdge;
       
        if (topBorder <=0 && bottomBorder <= 0) {

           

            setInterval(function () {
                if (cupsOfCoffee < 207) {
                cupsOfCoffee += 1;
                }
                $('.cupsOfCoffee').html(cupsOfCoffee);
          
            }, 10);
            setInterval(function () {
                if (weLaunched < 900) {
                    weLaunched += 2;
                }
                $('.weLaunched').html(weLaunched);
                if (likes < 873) {
                    likes += 2;
                }
                $('.likes').html(likes);
            }, 1);

            setInterval(function () {
                if (satisfiedClients < 3587) {
                    satisfiedClients += 10;
                }
                $('.satisfiedClients').html(satisfiedClients);
            }, 0.001);

            setInterval(function () {
                if (pricingPosts < 2500) {
                    pricingPosts += 5;
                }
                $('.pricingPosts').html(pricingPosts);
            }, 0.001);


        }

    });
}
module.exports = digitCount;