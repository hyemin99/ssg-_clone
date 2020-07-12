$(function(){
    //대슬라이드 
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.slide-next-btn',
            prevEl: '.slide-prev-btn',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    $('.slide-text').html('모두에게 즐거움이 되는<br>착한 쇼핑을 함께해보세요!');

    swiper.on('slideChange', function () {
        var slideIndex = this.activeIndex;
        var slideTextAry = ['모두에게 즐거움이 되는<br>착한 쇼핑을 함께해보세요!', '디자인부터 품질까지<br>브랜드 아이템을 만나보세요!','건강을 가득 담은<br>착한 먹거리를 추천합니다!','선물로 하는 응원!<br>착한 소비에 동참해주세요'];
        var slideTextIndex = 0;
 

        if (slideIndex == 1 || slideIndex == 5) slideTextIndex = 0;
        else if (slideIndex == 2) slideTextIndex = 1;
        else if (slideIndex == 3) slideTextIndex = 2;
        else if (slideIndex == 0 || slideIndex == 4) slideTextIndex = 3;

        $('.slide-text').html(slideTextAry[slideTextIndex]);

        $('.slide-nav .slide-nav-list').each(function () {
            $(this).removeClass('on');
        });

        $('.slide-nav .slide-nav-list:nth-child('+(slideTextIndex + 1)+')').addClass('on');
    });

    //중간 슬라이드
    var swiper = new Swiper('.right', {
        slidesPerView: 2,
          spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.sslide-next-btn',
            prevEl: '.sslide-prev-btn',
        },
    });
    swiper.on('slideChange', function () {
        var slideIndex = this.activeIndex;
        var slideTextIndex = 0;

        if (slideIndex == 2 || slideIndex == 6) slideTextIndex = 0;
        else if (slideIndex == 3) slideTextIndex = 1;
        else if (slideIndex == 4) slideTextIndex = 2;
        else if (slideIndex == 5 || slideIndex == 1) slideTextIndex = 3;

        $('.content-box li').each(function () {
            $(this).removeClass('on');
        });
        
        $('.sslide-pager span').html(slideTextIndex + 1);
        $('.content-box .ss-content0'+(slideTextIndex + 1)+'').addClass('on');
    });

    //하단 탭박스
    var swiper = new Swiper('.tab-title', {
        slidesPerView: 3,
          spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.tab-next-btn',
            prevEl: '.tab-prev-btn',
        },
    });

    swiper.on('slideChange', function () {
        var slideIndex = this.activeIndex;
        var tabIndex = 0;
        
        if (slideIndex == 3 || slideIndex == 6) tabIndex = 0;
        else if (slideIndex == 4) tabIndex = 1;
        else if (slideIndex == 2 || slideIndex == 5) tabIndex = 2;
        console.log(tabIndex);

        $('.tab-content-box ul').each(function () {
            $(this).removeClass('on');
        });
        $('.tab-content-box ul:nth-child('+(tabIndex + 1)+')').addClass('on');
    });
    

    AOS.init();
});