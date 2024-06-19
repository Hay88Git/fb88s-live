window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-15%";
    }
  }
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true, 
    loop: true,
    autoplay: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
let OpenNav = function(icon){
    let Nav = document.querySelector("nav");
    if(Nav.style.left == "0%"){
      Nav.style.left = "-100%"

      icon.classList.add("fa-bars")
      icon.classList.remove("fa-times")
    } else{
      Nav.style.left = "0%"
      icon.classList.add("fa-times")
      icon.classList.remove("fa-bars")
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});