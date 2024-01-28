
  // ==============aos animation================
 AOS.init();

 // ===============menu bar fixed start=====================
let main_menu = document.querySelector('.menu_bar')
console.log(main_menu)
window.addEventListener('scroll', function () {
  let scrolling = this.scrollY
  if (scrolling > 100) {
    main_menu.classList.add('menu_fixed')
  } else {
    main_menu.classList.remove('menu_fixed')
  }
})
// ========================Banner slider =========================
$('.banner_row').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow:false,
  nextArrow:false,
  mobileFirst:true,
});
// -------------------------banner slider ------------------------
// ========================about slider row=======================
$('.about_slider_row').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<i class="fa-solid fa-angle-left prev"></i>',
  nextArrow:'<i class="fa-solid fa-angle-right next"></i>',
});
// -----------------------about slider row-------------------------
// ========================counter part start====================
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// -----------------------counter part end------------------------
// =========================searchbox part start======================
$(".fa-search").on("click", function() {
  $(".search_input").toggleClass("unvisible");
});
// -------------------------search box part end----------------------
// ==========================question part start=======================
$("#faqpage2").on("click", function(e) {
  e.preventDefault()
  $(".accordion-two").removeClass("d-none")
  $(".accordion").addClass("d-none")
  $("#faqpage2").addClass("active")
  $("#faqpage1").removeClass("active")
});
$("#faqpage1").on("click", function(e) {
  e.preventDefault()
  $(".accordion-two").addClass("d-none")
  $(".accordion").removeClass("d-none")
  $("#faqpage1").addClass("active")
  $("#faqpage2").removeClass("active")
}); 
// ------------------------question part end--------------------------
// =======================managment part start=======================
$('.managment_row').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<i class="fa-solid fa-angle-left prev_ml"></i>',
  nextArrow:'<i class="fa-solid fa-angle-right next_mr"></i>',
});
// -----------------------managment part end------------------------
// =====================corporate part start========================
$('.corporate_row').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:false,
  nextArrow:false,
  responsive:[
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 3,
        infinite: true,
        
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 3,
        infinite: true,
        
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    }
  ]
});
// --------------------corporate part end-----------------------
