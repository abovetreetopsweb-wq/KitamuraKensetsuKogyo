//ハンバーガー
$("#js-hamburger").click(function(){
    $(".hamburger").toggleClass("is-active");
    $(".header-menu").toggleClass("is-open");
});

//*スライサー
const swiper = new Swiper('.swiper',{
    //1枚目へ戻って繰り返す
    loop:true,
    speed: 1000,
    autoplay: {
  delay: 3000,
},
});