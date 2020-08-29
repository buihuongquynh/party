 $('.owl-carousel').owlCarousel({
     loop: true,
     margin: 10,
     nav: false,
     animateOut: 'animate__rotateOut',
     autoplay: true,
     autoplayTimeout: 5000,
     autoplayHoverPause: true,

     responsive: {
         0: {
             items: 1
         },
         600: {
             items: 1
         },
         1000: {
             items: 1
         }
     }
 })
 const header = {
     init: function() {
         this.clickShowMenu('.humbeger', ' .header__list', 'showMenu');

     },
     clickShowMenu: function(button, menu, ClassShowMenu) {
         var btn = document.querySelector(button);
         var NavMenu = document.querySelector(menu);
         btn.addEventListener('click', () => {
             NavMenu.classList.toggle(ClassShowMenu);
         });
     }
 }
 header.init();
 $(window).scroll(function() {
     var scroll = $(window).scrollTop();
     if (scroll > 600) {
         $(".row").addClass("show");
     } else {
         $(".row").removeClass("show");
     }
 });
 $(window).scroll(function() {
     var scroll = $(window).scrollTop();
     if (scroll > 350) {
         $(".header").addClass("show__header");
     } else {
         $(".header").removeClass("show__header");
     }
 });
 $(window).scroll(function() {
     var scroll = $(window).scrollTop();
     if (scroll > 400) {
         $(".month__p").addClass("show__p");
     } else {
         $(".month__p").removeClass("show__p");
     }
 });