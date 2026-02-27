//スクロールでヘッダー効果
var myHeader = $('.hdCmn');
var winScrollTop = 0;	
var topBtn = $('#page-top');	

//TOP対応
// $(window).on('load',function(){
// 	var topHeader = $('.hdTop');
// 	if (document.URL.match('index.html')){
// 		$(window).scroll(function () {
// 			var windowWidth = $(window).width();
// 			var navPos = $('.hero_menu').offset().top; // メニューの位置
// 			var navHeight = $('.hero_menu').outerHeight(); // メニューの高さ
// 			if( windowWidth > 900 ){
// 				if ( $(this).scrollTop() > navPos) {
// 					topHeader.addClass('hdTopShow');
// 				} else {
// 					topHeader.removeClass('hdTopShow');
// 				}
// 			}
// 		});
// 	}
// });


$(window).scroll(function () {
    if ( $(this).scrollTop() > 10) {
	    myHeader.addClass('fixedHd');
		$('.hem').css('background-color', '#fff')
		$('.list').css('color', '#7679c4')
    } else {
		myHeader.removeClass('fixedHd');
		$('.hem').css('background-color', '#fff')
		$('.list').css('color', '#333')
    }
    if ($(this).scrollTop() > 600) {
		topBtn.fadeIn();
	} else {
		topBtn.fadeOut();
	}
});


// 画像遅延
$(function () {
	$( 'img.lazy' ).lazyload({
		threshold : 400,
		effect : 'fadeIn',
		effect_speed: 1000,
		event : "scroll",
		failure_limit: 1,
		placeholder : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII="
	});  
});

// モーダルメニュー
$(function () {	
	var $body = $('body');
    $('#hdBtn').on('click', function () {
		$body.toggleClass('openModal');
        $(this).toggleClass('active');
        $('#hdMenu').toggleClass('active');
        $('#logo').toggleClass('active');
    });
});


// 折りたたみ
$('.acrdBox h2').on('click', function() {
	$(this).parent().find('.acrd_cont').slideToggle(300);
    $(this).parent().parent().toggleClass('active');
});

// 折りたたみ 「NEWS」
$('.hero_news .acrd_sw_wrp').on('click', function() {
	$(this).parent().find('dl:not(:eq(0))').slideToggle(300);
    $(this).parent().toggleClass('active');
});


//　カルーセル設定
$(function () {	
	const swiper = new Swiper(".swiper", {
	loop: true, // ループ
	speed: 1500, // 少しゆっくり(デフォルトは300)
	slidesPerView: 1.5, // 一度に表示する枚数
	spaceBetween: 45, // スライド間の距離
	centeredSlides: true, // アクティブなスライドを中央にする
	 autoplay: { // 自動再生
	 	delay: 7000, // 7秒後に次のスライド
	 	disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
	 },
	// ページネーション
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	// 前後の矢印
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	});
});

//　Fancybox　モーダル設定
$(function () {	
		document.getElementById("triggger").addEventListener("click", () => {
        Fancybox.show([{ src: "#dialog-content", type: "inline" }]);
      });
});
