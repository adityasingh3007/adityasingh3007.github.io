(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[3],{53:function(t,e,i){"use strict";var s=i(18);!function(t){var e=t(window);t.fn.visible=function(i,s,o,n){if(!(this.length<1)){o=o||"both";var l=this.length>1?this.eq(0):this,a="undefined"!==typeof n&&null!==n,c=a?t(n):e,r=a?c.position():0,d=l.get(0),h=c.outerWidth(),u=c.outerHeight(),m=!0!==s||d.offsetWidth*d.offsetHeight;if("function"===typeof d.getBoundingClientRect){var p=d.getBoundingClientRect(),f=a?p.top-r.top>=0&&p.top<u+r.top:p.top>=0&&p.top<u,g=a?p.bottom-r.top>0&&p.bottom<=u+r.top:p.bottom>0&&p.bottom<=u,b=a?p.left-r.left>=0&&p.left<h+r.left:p.left>=0&&p.left<h,y=a?p.right-r.left>0&&p.right<h+r.left:p.right>0&&p.right<=h,v=i?f||g:f&&g,w=i?b||y:b&&y;v=p.top<0&&p.bottom>u||v,w=p.left<0&&p.right>h||w;if("both"===o)return m&&v&&w;if("vertical"===o)return m&&v;if("horizontal"===o)return m&&w}else{var _=a?0:r,x=_+u,B=c.scrollLeft(),T=B+h,E=l.position(),C=E.top,k=C+l.height(),N=E.left,D=N+l.width(),I=!0===i?k:C,R=!0===i?C:k,H=!0===i?D:N,j=!0===i?N:D;if("both"===o)return!!m&&R<=x&&I>=_&&j<=T&&H>=B;if("vertical"===o)return!!m&&R<=x&&I>=_;if("horizontal"===o)return!!m&&j<=T&&H>=B}}}}(i.n(s).a)},54:function(t,e,i){"use strict";i.r(e);var s=i(18),o=i.n(s);i(53);function n(){document.body.scrollTop>250||document.documentElement.scrollTop>250?document.getElementById("main_logo").style.opacity="1":document.getElementById("main_logo").style.opacity="0",document.body.scrollTop>160||document.documentElement.scrollTop>160?(document.getElementsByClassName("header")[0].style.background="rgba(65,65,65,0.9)",document.getElementsByClassName("header")[0].style.paddingBottom="14px",document.getElementsByClassName("header")[0].style.paddingTop="14px",document.getElementById("btp").style.opacity="1",document.getElementById("dabout").style.display="none"):(document.getElementsByClassName("header")[0].style.background="transparent",document.getElementsByClassName("header")[0].style.paddingBottom="20px",document.getElementsByClassName("header")[0].style.paddingTop="20px",document.getElementById("main_logo").style.opacity="0",document.getElementById("btp").style.opacity="0",document.getElementById("dabout").style.display="block")}window.onscroll=function(){n()};var l=function(t,e,i){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(i,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};function a(){var t=o()("#skills").offset().top,e=o()("#projects").offset().top,i=o()("#resume").offset().top,s=o()("#about").offset().top;o()(window).scrollTop()>=s-100&&o()(".about_body").each((function(t,e){var i=o()(e);i.visible(!0)&&(i.css("visibility","visible"),i.addClass("come-in"))})),o()(window).scrollTop()>=t-100&&o()(".sec_3 img").each((function(t,e){var i=o()(e);i.visible(!0)&&(i.css("visibility","visible"),i.addClass("come-in"))})),o()(window).scrollTop()>=e-50&&o()(".project_title_cont").each((function(t,e){var i=o()(e);i.visible(!0)&&(i.css("visibility","visible"),i.addClass("come-in"))})),o()(window).scrollTop()>=i-50&&(o()("#resume_image").each((function(t,e){var i=o()(e);i.visible(!0)&&(i.css("visibility","visible"),i.css("animation","show_left 2s ease"))})),o()("#resume_content").each((function(t,e){var i=o()(e);i.visible(!0)&&(i.css("visibility","visible"),i.css("animation","show_right 2s ease"))}))),o()(window).scrollTop()+o()(window).height()>=o()(document).height()-50&&(o()("#social_1").css("visibility","visible").css("animation","scale_up 0.5s ease"),setTimeout((function(){o()("#social_2").css("visibility","visible").css("animation","scale_up 0.5s ease")}),100),setTimeout((function(){o()("#social_3").css("visibility","visible").css("animation","scale_up 0.5s ease")}),200),setTimeout((function(){o()("#social_4").css("visibility","visible").css("animation","scale_up 0.5s ease")}),300))}l.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var i=this,s=100;this.isDeleting&&(s/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,this.el.style.animation="none"):(s=this.period,this.isDeleting=!0,this.el.style.animation="blink 0.73s infinite"),setTimeout((function(){i.tick()}),s)},o()(document).ready((function(){for(var t=document.getElementsByClassName("txt-rotate"),e=0;e<t.length;e++){var i=t[e].getAttribute("data-rotate"),s=t[e].getAttribute("data-period");i&&new l(t[e],JSON.parse(i),s)}var c=document.createElement("style");c.type="text/css",c.innerHTML=".txt-rotate { border-right: 2px solid #fff; padding-right:2px; animation: blink 0.73s infinite}",document.body.appendChild(c),o()(window).scroll(a),a(),n(),o()("a").on("click",(function(t){var e=this.href;if(-1===e.indexOf("/project")){if(t.preventDefault(),""!==this.hash){var i=this.hash;o()("html, body").animate({scrollTop:o()(i).offset().top},800,(function(){window.location.hash=i}))}}else window.location=e}))}))}}]);
//# sourceMappingURL=3.2eb0937c.chunk.js.map