$(function(){
	/*
	$('.menu li').mouseover(function() {
		$('.sub-menu',this).stop().slideDown(400, 'linear');
	});
	$('.menu li').mouseout(function() {
		$('.sub-menu').stop().slideUp(400, 'linear');
	});
	*/

	$('.menu li').on('mouseenter', function () {
		/*
		jquery
		var height = $(this).find('.sub-cotainer').attr('data-hei');

		vanila js
		var height = this.childNodes[2].childNodes[1].dataset.hei;
		*/
		var height = $(this).find('.sub-cotainer').attr('data-hei');
		var naviLineWidth = $(this).find('a').innerWidth();
		var naviLineLeft = ($(this).find('a').position().left + 10);
		$('.navi-line').stop().animate({'width': naviLineWidth+'px', 'left': naviLineLeft+'px'}, 300);
		$(this).find('.sub-menu').stop().animate({'height': height+'px'}, 300);
	}).on('mouseleave', function () {
		$('.navi-line').stop().animate({'width': '0px'}, 300);
		$(this).find('.sub-menu').stop().animate({'height': '0px'});
	});
	/*
	slideDown -> display: block -> height 본인 크기만큼 늘려줌
	slideUp -> height를 0으로 줄여줌 -> display: none;

	제이쿼리에서 attr 함수를 사용할 경우
	attr('속성'); 속성값을 가져오는 경우
	attr('속성', '값'); 속성값을 변경하는 경우

	offset() 절대값 위치 (top, left, right, bottom);
	position() 상대값 위치 (top, left, right, bottom);
	*/
	$(".login-btn").click(function(){
		$(".login").slideDown("slow");
		$(".search").slideUp('slow');
	});

	$(".search-btn").click(function(){
		$(".search").slideDown("slow"); 
		$(".login").slideUp('slow');
	});

	$(".close-popmenu").click(function(){
		$(".login, .search").slideUp("slow"); 
	});

	$('.sns-image00').each(function (i, index) {
		$('.sns-image0'+(i+1)).css({'background-image': 'url(\'./common/img/icon0'+(i+1)+'.png\''});
	});

	$(document).on('mouseenter', '.sns-image00', function () {
		var imageList = ['01', '02', '03', '04', '05', '06', '07'];
		var classlist = $(this).attr('class');
		for (var imageCnt=0;imageCnt<imageList.length;imageCnt++) {
			//console.log(classlist.indexOf(imageList[imageCnt]));
			
			if (classlist.indexOf(imageList[imageCnt]) != -1) {
				$(this).css({'background-image': 'url(\'./common/img/icon0'+(imageCnt+1)+'-1.png\''})
			}
		}
	}).on('mouseleave', '.sns-image00', function () {
		var imageList = ['01', '02', '03', '04', '05', '06', '07'];
		var classlist = $(this).attr('class');
		for (var imageCnt=0;imageCnt<imageList.length;imageCnt++) {
			//console.log(classlist.indexOf(imageList[imageCnt]));
			
			if (classlist.indexOf(imageList[imageCnt]) != -1) {
				$(this).css({'background-image': 'url(\'./common/img/icon0'+(imageCnt+1)+'.png\''})
			}
		}
	});

	$(".btn-family").on('mouseenter', function(){
		var familyLength = $(".popup-family li").length;
		$(".popup-family").stop().animate({
			"height" : ''+(familyLength)+'40%',
			"opacity" : '1'
		});
		$('.family').css({
			'border' : 'solid 1px #999'
		});
		$('.arr-sns').css({
			'transform' : 'rotate(180deg)'
		});
	}).on('mouseleave', function(){
		var familyLength = $(".popup-family li").length;
		$(".popup-family").stop().animate({
			"height" : '0',
			"opacity" : '0'
		});
		$('.family').css({
			'border' : 'solid 1px transparent',
			'border-bottom' : 'solid 1px #999'
		});
		$('.arr-sns').css({
			'transform' : 'rotate(0deg)'
		});
	});

	$(window).on("scroll", function(){
		var mysc = $(this).scrollTop();
		var myoffset = $(".fixed-container").offset();
		var footerScrollVal = $("#footer-container").offset().top -998;
		console.log(mysc, footerScrollVal);

		if (mysc < myoffset.top) {
			$(".fixed-content").removeClass("fix")
							   .css("top","0");
		} else {
			$(".fixed-content").addClass("fix");
		} 

		if (mysc > footerScrollVal){
			$(".fixed-content").removeClass("fix")
							   .css({"top":"unset", "bottom":"0"});
		}

		if(mysc < footerScrollVal && $("#magazine").offset().top + 50 < mysc){
			$(".fixed-content").css({"bottom":"unset", "top":"130px"});
		}



		/*if (mysc > footerScrollVal) {
			$(".fixed-content").removeClass("fix");
			$(".fixed-hidden").css({
				"display" : "block"
			});
		} else {
			$(".fixed-hidden").css({
				"display" : "none"
			});
		}*/
	});


/*
	var offset = $(".fixed-container").offset();
	var fixedContent = $(".fixed-content");
	var fixed = fixedContent.find(".fixed-content-box");
	var tmp = fixedContent.find(".fixed-content-box").clone().attr("class", "tmp").css("visibility", "hidden");

	window.addEventListener("scroll", function(){
		if (window.pageYOffset > offset.top) {
			fixedContent.append(tmp);
			fixed.css({"position" : "fixed", "top" : "130px", "width" : "390px"});
		} else {
			fixedContent.find(".tmp").remove();
			fixed.css({"position" : "static", "top" : ""});
		}
	});*/
	/*$('.shinsegae-now-list').on('mouseenter', function () {
		$(this).find('.hover-box').animate({'bottom': '0'}, 400);
	}).on('mouseleave', function () {
		$(this).find('.hover-box').animate({'bottom': '-54%'}, 400);
	});*/





	/*
	$(window).on("scroll", function(){
		var mysc = $(this).scrollTop();
		var aniTime = 500

		if (mysc >= 300){
			$("#news-event .content-title").stop().animate({"opacity" : "1", "top" : "0"}, aniTime);
		} else {
			$("#news-event .content-title").stop().animate({"opacity" : "0", "top" : "50px"}, aniTime);
		}

		if (mysc >= 500){
			$(".news-subtitle").stop().animate({"opacity" : "1", "top" : "0"}, aniTime);
		} else {
			$(".news-subtitle").stop().animate({"opacity" : "0", "top" : "50px"}, aniTime);
		}

		if (mysc >= 600){
			$(".news-list").each(function () {
				var $this = $(this);
				var myIndex = $(this).index();

				if (myIndex < 3){
					var a = function(){
						setTimeout(function(){
							$this.stop().animate({"opacity" : "1", "top" : "0"}, aniTime);
						}, myIndex * 300);
					};

					a();
				}
			});
		} else {
			$(".news-list").each(function () {
				var $this = $(this);
				var myIndex = $(this).index();

				if (myIndex < 3){
					var a = function(){
						setTimeout(function(){
							$this.stop().animate({"opacity" : "0", "top" : "50px"}, aniTime);
						}, myIndex * 300);
					};

					a();
				}
			});
		}


		if (mysc >= 700){
			$(".news-list").each(function () {
				var $this = $(this);
				var myIndex = $(this).index();

				if (myIndex < 6 && myIndex >= 3){
					var a = function(){
						setTimeout(function(){
							$this.stop().animate({"opacity" : "1", "top" : "0"}, aniTime);
						}, myIndex * 300);
					};

					a();
				}
			});
		} else {
			$(".news-list").each(function () {
				var $this = $(this);
				var myIndex = $(this).index();

				if (myIndex < 6 && myIndex >= 3){
					var a = function(){
						setTimeout(function(){
							$this.stop().animate({"opacity" : "0", "top" : "50px"}, aniTime);
						}, myIndex * 300);
					};

					a();
				}
			});
		}

		if (mysc >= 1500){
			$("#shinsegae-now .content-title").stop().animate({"opacity" : "1", "top" : "0"}, aniTime);
		} else {
			$("#shinsegae-now .content-title").stop().animate({"opacity" : "0", "top" : "50px"}, aniTime);
		}

		if (mysc >= 1700){
			$(".shinsegae-now-list").each(function(){
				var $this = $(this);
				var myIndex = $(this).index();

				var a = function(){
					setTimeout(function(){
						$this.stop().animate({"opacity" : "1", "top" : "0"}, aniTime);
					}, myIndex * 300);
				};
				a();
			});
		} else {
			$(".shinsegae-now-list").each(function(){
				var $this = $(this);
				var myIndex = $(this).index();

				var a = function(){
					setTimeout(function(){
						$this.stop().animate({"opacity" : "0", "top" : "50px"}, aniTime);
					}, myIndex * 300);
				};
				a();
			});
		}

		if (mysc >= 2000){
			$(".channel").stop().animate({"opacity" : "1", "top" : "0"}, aniTime)
			$(".shinsegae-channel p").stop().animate({"opacity" : "1", "top" : "0"}, 700);
		} else{
			$(".channel").stop().animate({"opacity" : "0", "top" : "50px"}, aniTime)
			$(".shinsegae-channel p").stop().animate({"opacity" : "0", "top" : "50pxs"}, 700);
		}

		if (mysc >= 2100) {
			$(".sns-image00").each(function(){
				var $this = $(this);
				var myIndex = $(this).index();

				var a = function(){
					setTimeout(function () {
						$this.stop().animate({"opacity" : "1", "right": "0px"}, aniTime);
					}, myIndex * 300);
				};
				a();
			});
		} else {
			$(".sns-image00").each(function(){
				var $this = $(this);
				var myIndex = $(this).index();

				var a = function(){
					setTimeout(function () {
						$this.stop().animate({"opacity" : "0", "right": "-50px"}, aniTime);
					}, myIndex * 300);
				};
				a();
			});
		}
	});
	*/
});
/*
.find();
.children();

.closest('.shinsegae-now-list');

.parent();
.parents();
.parentsUntil();

.next();
.nextAll();
.nextUntil();

.prev();
.prevAll();
.prevUntil();

.siblings('태그나 클래스 혹은 아이디');

<div class="aa">
	>> prepend의 요소가 추가됨
	<div></div>
	<div></div>
	<div></div>
	>> append의 요소가 추가됨
</div>

.append();
.prepend();
.appendTo();
.prependTo();

.html();
.text();

.clone();

.remove();		// 자기자신을 지우면서 이벤트도 같이 삭제
.empty();		// 자기 밑에 속해있는 요소들을 삭제
.unwrap();		// 선택된 부모요소를 삭제

.width();			// 선택 요소의 순수 width 값
.innerWidth();		// 선택 요소의 border 안쪽 width 값 (padding 포함)
.outerWidth();		// 선택 요소의 border까지의 width 값 (border, padding 포함)
.outerWidth(true);	// 선택 요소의 margin까지의 width 값 (border, padding, margin 포함)
.height();
.innerHeight();
.outerHeight();
.outerHeight(true);

.scrollLeft();
.scrollTop();

.attr();			// 속성을 가져오는 함수
.removeAttr();		// 그 속성값을 지워주는 함수
.prop();			// 프로퍼티를 가져오는 함수
.removeProp();		// 그 프로퍼티를 지워주는 함수
.is();

.css();

.animate();

.slideUp();
.slideDown();
.slideToggle();

.fadeIn();
.fadeOut();
.fadeToggle();

.addClass();
.removeClass();
.hasClass();
.toggleClass();

var aa = "KimHyeMin";
aa.indexOf('KW') = -1;	// 값이 없을 경우에는 -1
aa.indexOf('K') = 0;	// 값이 있을 경우에는 그 자리 값을 출력함
aa.indexOf('i') = 1;
aa.indexOf('H') = 3;

sns-image00 sns-image03
01 ? -1 != -1
02 ? -1 != -1
03 ? 21 != -1 (if문 실행)
04 ? -1 != -1
05 ? -1 != -1
06 ? -1 != -1
07 ? -1 != -1
*/