const menu = {
    init: function() {
        this.clickShowMenu('.humber', '.header__menu', 'showMenu');
        this.scrollMenu('.scoll1', 'show');
    },
    clickShowMenu: function(button, navMenu, classTogle) {
        let btn = document.querySelector(button);
        let menu = document.querySelector(navMenu);
        btn.addEventListener('click', () => {
            menu.classList.toggle(classTogle);
        });
    },
    scrollMenu: function(menu, classfix) {
        let Nav = document.querySelector(menu);
        let heightMenu = document.querySelector(menu).offsetHeight;

        window.addEventListener('scroll', () => {
            let heightScroll = window.pageYOffset;
            console.log(heightScroll);

            if (heightScroll >= heightMenu / 2) {
                Nav.classList.add(classfix);
            } else {
                Nav.classList.remove(classfix);
            }

        });
    }
}
menu.init();