!function(c){function f(){var a=g.getBoundingClientRect().width;540<a/b&&(a=540*b);c.rem=a/16;Object.defineProperty(window,"rem",{value:c.rem,writable:!1});g.style.fontSize=c.rem+"px"}var b,a,e,g=document.documentElement,d=document.querySelector('meta[name="viewport"]');b||a||(a=c.navigator.appVersion.match(/android/gi)||c.navigator.appVersion.match(/iphone/gi),b=c.devicePixelRatio,b=a?3<=b?3:2<=b?2:1:1,a=1/b);d?(d=d.getAttribute("content").match(/initial\-scale=([^\,$]+)/))&&(a=parseFloat(d[1]),b=parseInt(1/a)):(d=document.createElement("meta"),d.setAttribute("name","viewport"),d.setAttribute("content","initial-scale="+a+", maximum-scale="+a+", minimum-scale="+a+", user-scalable=no"),g.firstElementChild.appendChild(d));Object.defineProperty(window,"dpr",{value:b,writable:!1});c.addEventListener("resize",function(){clearTimeout(e);e=setTimeout(f,300)},!1);c.addEventListener("pageshow",function(a){a.persisted&&(clearTimeout(e),e=setTimeout(f,300))},!1);"complete"===document.readyState?document.body.style.fontSize=16*b+"px":document.addEventListener("DOMContentLoaded",function(){document.body.style.fontSize=16*b+"px"},!1);f()}(window);
  function setupFontSize(a){2!==window.dpr&&(a||(a=document.body),a=a.querySelectorAll("[data-changed]"),[].forEach.call(a,function(a){if(!a.style.fontSize){var b=+getComputedStyle(a)["font-size"].replace(/px/,"");a.style.fontSize=b/2*window.dpr+"px"}}))};