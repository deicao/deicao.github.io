(function (doc, win) {
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;    
          if(clientWidth>=750){
              docEl.style.fontSize = '100px';
              document.getElementsByTagName("body")[0].setAttribute("style","visibility: initial;");
          }else{
              docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
              var fz = 100 * (clientWidth / 750);
              var realfz = ~~(+window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.replace('px','')*10000)/10000
              if (fz !== realfz) {
                  document.getElementsByTagName("html")[0].style.cssText = 'font-size: ' + fz * (fz / realfz) +"px!important";
              }
              document.getElementsByTagName("body")[0].setAttribute("style","visibility: initial;");
          }
      };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);  