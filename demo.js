var combox = $('.container');
var fixedbox = $('.fixedbox');
var obj = (function () {
  var boxlen = combox.find('.box');
  var fixedboxtitle = $('.fixedbox').find('.area_title');
  var picture_list = $('h2.picture_list');
  var area_img = $('div.area_img');
  area_title = $('span.area_title');
  area_namber = $('span.area_namber');
  var imgsrc = ['img/top.png', 'img/bottom.png'];
  var arrtop = [];
  var cont = 0;
  var su = 500;
  fixedbox.find('.area_title').html(boxlen.eq(0).find('.area_title').html())
  fixedbox.find('.area_namber').html(boxlen.eq(0).find('.area_namber').html())
  return {
    boxheight: function () {
      arrtop = [];
      for (var i = 0; i < boxlen.length; i++) {
        arrtop.push(parseInt(boxlen.eq(i).offset().top));
      }
      return arrtop;
    },
    isscroll: function () {
      obj.istitle();
    },
    istoge: function () {
      var m = $(this);
      if (m.siblings(picture_list.selector).is(':hidden')) {
        m.children(area_img.selector).children().attr('src', imgsrc[0]);
      } else {
        m.children(area_img.selector).children().attr('src', imgsrc[1]);
      }
      m.siblings(picture_list.selector).stop().slideToggle(su, function () {
        if (m.siblings(picture_list.selector).is(':hidden')) {
          m.children(area_img.selector).children().attr('src', imgsrc[1]);
        } else {
          m.children(area_img.selector).children().attr('src', imgsrc[0]);
        }
      });
    },
    onetoge: function () {
      var m = $(this);
      var thisidx = fixedboxtitle.attr('data-id') - 1;
      if (boxlen.eq(thisidx).find(picture_list.selector).is(':hidden')) {
        m.find(area_img.selector).children().attr('src', imgsrc[0]);
        combox.children().eq(thisidx).find(area_img.selector).children().attr('src', imgsrc[0]);
      } else {
        m.find(area_img.selector).children().attr('src', imgsrc[1]);
        combox.children().eq(thisidx).find(area_img.selector).children().attr('src', imgsrc[1]);
      }
      boxlen.eq(thisidx).children(picture_list.selector).stop().slideToggle(su, function () {
        obj.istitle();
      });
    },
    istitle: function () {
      var scrTop = $(document).scrollTop();
      var arr = obj.boxheight();
      for (var i = 1; i < arr.length; i++) {
        if (scrTop < arr[i + 1] && scrTop > arr[i]) {
          cont++;
          fixedboxtitle.html(boxlen.eq(i).find(area_title.selector).html());
          fixedboxtitle.siblings(area_namber.selector).html(boxlen.eq(i).find(area_namber.selector).html())
          fixedboxtitle.attr('data-id', boxlen.eq(i).find(area_title.selector).attr('data-id'));
        } else if (scrTop > arr[arr.length - 1]) {
          cont++;
          fixedboxtitle.html(boxlen.eq(i).find(area_title.selector).html());
          fixedboxtitle.siblings(area_namber.selector).html(boxlen.eq(i).find(area_namber.selector).html())
          fixedboxtitle.attr('data-id', boxlen.eq(i).find(area_title.selector).attr('data-id'));
        } else if (scrTop < arr[1]) {
          fixedboxtitle.html(boxlen.eq(0).find(area_title.selector).html());
          fixedboxtitle.siblings(area_namber.selector).html(boxlen.eq(0).find(area_namber.selector).html())
          fixedboxtitle.attr('data-id', boxlen.eq(0).find(area_title.selector).attr('data-id'));
        }
      }
      var thisidx = fixedboxtitle.attr('data-id') - 1;
      if (boxlen.eq(thisidx).find(picture_list.selector).is(':hidden')) {
        fixedbox.find(area_img.selector).children().attr('src', imgsrc[1]);
      } else {
        fixedbox.find(area_img.selector).children().attr('src', imgsrc[0]);
      }
    }
  }
}())
obj.boxheight();
$(window).on('scroll', function () {
  obj.isscroll();
})
combox.on('click', '.box h4.area', function () {
  obj.istoge.apply($(this))
})
fixedbox.on('click', function () {
  obj.onetoge.apply($(this));
})

try { 
  var isiOS = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent), 
  isApp = /Xuexi/i.test(navigator.userAgent); 
  if (isiOS && (document.documentElement.className = "ios"), isApp) { 
    var newStyle = document.createElement("style"); 
    newStyle.appendChild(document.createTextNode("@font-face {font-family: 'FZYaSongS-R-GB';src: url('./local_font/FZBIAOYSJW.TTF')}@font-face {font-family: 'FZYaSong-H-GBK';src: url('./local_font/FZTYH_GBK.TTF')}")), document.head.appendChild(newStyle) 
  } 

  try { 
    var fontSize = window.localStorage.getItem("ding_fontsize") ? window.localStorage.getItem("ding_fontsize") : ""; fontSize && isApp && (document.documentElement.style.fontSize = fontSize + "px"); var study_forward_page = getUrlQue("study_forward_page"), study_forward_params = getUrlQue("study_forward_params"); !isApp && study_forward_page && study_forward_params && "comment_detail" === study_forward_page && (window.location.href = "/go-app.html" + window.location.search) 
  } 
  catch (e) { 
    console.log("load font size error", e) 
  } 
  
  function getUrlQue(e) { 
    try { 
      var t = new RegExp("(\\?|^|&|#)" + e + "=([^&|^#]*)(&|$|#)", "i"), o = window.location.href.match(t); return null != o ? decodeURIComponent(o[2]) : "" 
    } 
    catch (e) { 
      console.log("get url query:", e) 
    } 
  } 
} 
catch (e) { 
  console.log("head error:", e) 
}