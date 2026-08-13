//ハンバーガー
$("#js-hamburger").click(function(){
    $(".hamburger").toggleClass("is-active");
    $(".header-menu").toggleClass("is-open");
});

$(".header-menu a").click(function(){
    $(".hamburger").removeClass("is-active");
    $(".header-menu").removeClass("is-open");
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



//モーダル
$(".modal-open").click(
    function(){
        $(this).find(".modal-area").show()
        $("body").addClass("is-modal-open");
        goTop.hide();
        header.hide();
    }
);

$(".modal-close").click(
    function(e){e.stopPropagation();
        $(this).closest(".modal-area").hide()
        $("body").removeClass("is-modal-open");
        if ($(window).scrollTop() > 100) {
    goTop.show();
      header.show();
}
    }
);




//Topへ戻る
//変数宣言と代入
var goTop = $(".fas");

//サイト上部ではボタンを非表示
goTop.hide();

//100pxスクロールしたらボタン表示・100px以下ならボタン非表示
$(window).scroll(function(){
    if ($(this).scrollTop()>100){
        // 0.3でフェードイン
    goTop.fadeIn(300);
    }else{
        //0.3秒でフェードアウト
        goTop.fadeOut(300)
    }
});

//ボタンがクリックされたら1秒でページトップへ戻る
goTop.click(function(){
    $("body,html").animate({scrollTop:0},1000);
    return false;
})


// ヘッダーとABOUTを取得
var header = $(".header");
var about = $("#about");

// スクロールしたとき
$(window).scroll(function () {
  // ABOUTの上端位置
  var aboutTop = about.offset().top;

  // 現在のスクロール位置
  var scrollTop = $(this).scrollTop();

  // ヘッダーの高さ
  var headerHeight = header.outerHeight();

  // ABOUTがヘッダーの下まで来たら背景色を付ける
  //一時的にこうなる→<header class="header is-bg">
  if (scrollTop >= aboutTop - headerHeight) {
    header.addClass("is-bg");
  } else {
    header.removeClass("is-bg");
  }
});