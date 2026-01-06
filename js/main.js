$(function () {
  const bg = ['#F9EDD3', '#37458C', '#BD382F', '#1D1D1D']

  let scrollDirection = null;
  $('#full').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4'],
    responsiveWidth: 1530,
    autoScrolling: true,  // 섹션 단위 스크롤
    fitToSection: true,   // 섹션 위치 맞춤
    scrollBar: false,
    // sectionsColor: ['#F9EDD3', '#37458C', '#BD382F', '#1D1D1D'],
    autoScrolling: true,
    scrollBar: false,
    afterLoad: function (anchorLink, index) {
      if (index == 1) {
        $('#full').css('background', '#F9EDD3')
        $('.header').css('color', '#000')
        $('header .header ').css('border-right-color', '#000')
        $('header .header .menu li ').css('border-bottom-color', '#000')
        $('.header .seacher input').css('filter', 'invert(0%)')
        $('header .header .vetorme img ').css('filter', 'invert(0%)')
        $('.header .seacher img  ').css('filter', 'invert(0%)')
        $("input::placeholder").css('filter', 'invert(0%)')
        $('.header .hlogo img').css('filter', 'invert(0%)')
        $('header .header .menu li').removeClass('on')
         $('header .header').css({
          height : 'calc(100vh - 80px)'
        })

      } else if (index == 2) {
        $('#full').css('background', '#37458C')
        $('.header').css('color', '#fff')
        $('header .header ').css('border-right-color', '#fff')
        $('.header .seacher input').css('filter', 'invert(100%)')
        $('header .header .vetorme img ').css('filter', 'invert(100%)')
        $('.header .seacher img  ').css('filter', 'invert(100%)')
        $("input::placeholder").css('filter', 'invert(100%)')
        $('.header .hlogo img').css('filter', 'invert(100%)')
        $('header .header .menu li ').css('border-bottom-color', '#fff')
        $('header .header .menu li').removeClass('on')
         $('header .header').css({
          height : 'calc(100vh - 80px)'
        })
      } else if (index == 3) {
        $('#full').css('background', '#BD382F')
        $('.header').css('color', '#000')
        $('.header .seacher input').css('filter', 'invert(100%)')
        $('.header .seacher input').css('filter', 'invert(0%)')
        $('header .header .vetorme img ').css('filter', 'invert(0%)')
        $('.header .seacher img  ').css('filter', 'invert(0%)')
        $("input::placeholder").css('filter', 'invert(0%)')
        $('.header .hlogo img').css('filter', 'invert(0%)')

        $('header .header .menu li').addClass('on')
         $('header .header').css({
          height : 'calc(100vh - 80px)'
        })

      } else if (index == 4) {
        $('#full').css('background', '#1D1D1D')
        $('header .header ').css('border-right-color', '#fff')
        $('.header').css('color', '#fff')
        $('.header .seacher input').css('filter', 'invert(100%)')
        $('header .header .vetorme img ').css('filter', 'invert(100%)')
        $('.header .seacher img  ').css('filter', 'invert(100%)')
        $("input::placeholder").css('filter', 'invert(100%)')
        $('.header .hlogo img').css('filter', 'invert(100%)')
        $('header .header .menu li ').css('border-bottom-color', '#fff')
        $('header .header .menu li').removeClass('on')
         $('header .header').css({
          height : 'calc(100vh - 80px)'
        })
      }else if (index == 5) {
        $('header .header').css({
          height : 'calc(100vh - 150px)'
        })
      }
    }
  })
})


// $(function(){
//   $(index ==3){
//     $('header .header .menu li::after').backgroundColor('#fff')

//   }
// })

//섹션 스크롤 idex마다  wrap 색상변경