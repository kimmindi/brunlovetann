//오프닝
$(function () {

    const sound = document.getElementById('ticketsound')

    $('.intro .click, .titi img').click(function () {
        if (sound) {

            sound.pause();
            sound.currentTime = 0.5;
            sound.volume = 1;
            sound.play();

            setTimeout(() => {
                sound.pause();
                sound.currentTime = 0.5;
            }, 1000);
        }
        $('body').addClass('on')
        $('.intro .topticket .titi img').eq(0).addClass('on')
        $('.intro .topticket .titi img').eq(1).addClass('on')
        $('.starbg').addClass('on')
        $('.newbg').addClass('on')
        $('.spark').fadeOut()
        $('.intro .click').fadeOut()


        setTimeout(function () {
            $('.intro .topticket .titi img').addClass('off')
        }, 1000)

        setTimeout(function () {
            $('.introtext').addClass('on')
        }, 1200)
        setTimeout(function () {
            $('.out').addClass('on')
        }, 1000)


    })
})





//고탑 // 인트로
$(function () {
    $('.last').click(function (e) {
        e.preventDefault()

        let headertop = $('header').offset().top
        $('html,body').animate({
            scrollTop: headertop
        }, 800)


    })
})



//푸터타이핑
$(function () {
    let mescroll = false;
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $('footer').offset().top && !mescroll) {
            typing();
            mescroll = true;
        } else if ($(window).scrollTop() + $(window).height() < $('footer').offset().top) {
            mescroll = false;
        }
    })
})

function typing() {
    const h1 = document.querySelector('.lastsection .lastinner h1')
    const text = h1.textContent;
    h1.textContent = ''; //초기화

    let currentTxt = text.split("")

    function writeTxt() {
        h1.textContent += currentTxt.shift();
        if (currentTxt.length !== 0) {
            setTimeout(writeTxt, Math.floor(Math.random() * 150))
        }
        else {
            currentTxt = h1.textContent.split("")
        }
    }
    writeTxt();
}

//탭
$(function () {

    $('.tabtitle li').click(function () {
        $('.tabtitle li').removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        $('.tabcontent > .content').hide()
        $('.tabcontent > .content').eq(idx).show()
        $('.webinfowrap > .webinfo').hide()
        $('.webinfowrap > .webinfo').eq(idx).show()

    })
    $('.tabtitle li').eq(0).trigger('click')


    $('.swiper-slide').click(function () {
        let idx = $(this).data('swiper-slide-index')
        $('.popup').show()
        $('.popup .pop').hide()
        $('.popup .pop').eq(idx).show()
        // console.log(idx)
        $('html, body').css({
            overflow: 'hidden'
        })
    })
    //팝업
    $('.popup').click(function () {
        $('.popup').hide()
        $('html, body').css({
            overflow: 'visible'
        })
    })
})

//슬라이드
// $(function () {
//     $('.swiper-slide').mouseenter(function () {
//         let i = $(this).data('swiper-slide-index')
//         $('.after').eq(i).show()

//     })
//     $('.swiper-slide').mouseleave(function () {
//         $('.after').hide()


//     })
// })

//메뉴이동
$(function () {
    $('.menu li').click(function (e) {
        e.preventDefault()

        const idx = $(this).index()
        const section = $('section').eq(idx)

        $('html, body').animate({
            scrollTop: section.offset().top
        }, 500)



    })

})








//별배경
function init() {

    var style = ["style1", "style2", "style3", "style4"];
    var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
    var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var estrela = "";
    var qtdeEstrelas = 250;
    var noite = document.querySelector(".starbg .constelacao");
    var widthWindow = window.innerWidth;
    var heightWindow = window.innerHeight;

    for (var i = 0; i < qtdeEstrelas; i++) {
        estrela += "<span class='estrela " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
            + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." + getRandomArbitrary(0, 9) + "s; left: "
            + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
    }

    noite.innerHTML = estrela;

    //meteoros

    var numeroAleatorio = 5000;

    setTimeout(function () {
        carregarMeteoro();
    }, numeroAleatorio);

    function carregarMeteoro() {
        setTimeout(carregarMeteoro, numeroAleatorio);
        numeroAleatorio = getRandomArbitrary(2000, 8000);
        var meteoro = "<div class='meteoro " + style[getRandomArbitrary(0, 4)] + "'></div>";
        document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = meteoro;
        setTimeout(function () {
            document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = "";
        }, 1000);
    }

}

window.addEventListener('load', init);







function initfooter() {

    var style1 = ["style1", "style2", "style3", "style4"];
    var tam1 = ["tam1", "tam1", "tam1", "tam2", "tam3"];
    var opacity1 = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

    function getRandomArbitrary1(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var estrela = "";
    var qtdeEstrelas = 250;
    var noite = document.querySelector("footer .constelacao");
    var footer = document.querySelector("footer");
    var widthFooter = footer.offsetWidth;
    var heightFooter = footer.offsetHeight;

    for (var i = 0; i < qtdeEstrelas; i++) {
        estrela += "<span class='estrela " + style1[getRandomArbitrary1(0, 4)] + " " + opacity1[getRandomArbitrary1(0, 6)] + " "
            + tam1[getRandomArbitrary1(0, 5)] + "' style='animation-delay: ." + getRandomArbitrary1(0, 9) + "s; left: "
            + getRandomArbitrary1(0, widthFooter) + "px; top: " + getRandomArbitrary1(0, heightFooter) + "px;'></span>";
    }

    noite.innerHTML = estrela;

    //meteoros

    var numeroAleatorio1 = 5000;

    setTimeout(function () {
        carregarMeteoro();
    }, numeroAleatorio1);

    function carregarMeteoro() {
        setTimeout(carregarMeteoro, numeroAleatorio1);
        numeroAleatorio1 = getRandomArbitrary1(5000, 10000);
        var meteoro = "<div class='meteoro " + style1[getRandomArbitrary1(0, 4)] + "'></div>";
        document.getElementsByClassName('chuvaMeteoro1')[0].innerHTML = meteoro;
        setTimeout(function () {
            document.getElementsByClassName('chuvaMeteoro1')[0].innerHTML = "";
        }, 1000);
    }

}

window.addEventListener('load', initfooter);