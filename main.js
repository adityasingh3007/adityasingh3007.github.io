window.onscroll = function() {scrollFunction()};
//http://exill.dk/demo/kitzu/template/index.html
function scrollFunction() {
  if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
    document.getElementById("main_logo").style.opacity="1";
  }
  else{
    document.getElementById("main_logo").style.opacity="0";
  }
  if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
    document.getElementsByClassName("header")[0].style.background= "rgba(65,65,65,0.9)";
    document.getElementsByClassName("header")[0].style.paddingBottom= "14px";
    document.getElementsByClassName("header")[0].style.paddingTop= "14px";
    document.getElementById("btp").style.opacity="1";
    document.getElementById("dabout").style.display="none";
  }
  else {
    document.getElementsByClassName("header")[0].style.background= "transparent";
    document.getElementsByClassName("header")[0].style.paddingBottom= "20px";
    document.getElementsByClassName("header")[0].style.paddingTop= "20px";
    document.getElementById("main_logo").style.opacity="0";
    document.getElementById("btp").style.opacity="0";
    document.getElementById("dabout").style.display="block";
  } 
}

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    this.el.style.animation="blink 0.73s infinite";
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    this.el.style.animation="none";
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

function scrollSpy(){
  let d_skills = $("#skills").offset().top;
    let d_projects=$("#projects").offset().top;
    let d_resume = $("#resume").offset().top;
    let d_about = $("#about").offset().top;
    if ( $(window).scrollTop() >= d_about - 100 ) {
      $(".about_body").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.css( "visibility", "visible" );
          el.addClass("come-in"); 
        } 
      });
    }
    if ( $(window).scrollTop() >= d_skills- 100 ) {
      $(".sec_3 img").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.css( "visibility", "visible" );
          el.addClass("come-in"); 
        } 
      });
    }
    if ( $(window).scrollTop() >= d_projects- 50 ) {
      $(".project_title_cont").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.css( "visibility", "visible" );
          el.addClass("come-in"); 
        } 
      });
    }
    if ( $(window).scrollTop() >= d_resume - 50) {
      $("#resume_image").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.css( "visibility", "visible" );
          el.css( "animation", "show_left 2s ease" );; 
        } 
      });
      $("#resume_content").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.css( "visibility", "visible" );
          el.css( "animation", "show_right 2s ease" );; 
        } 
      });
    }
    if( $(window).scrollTop() + $(window).height() >= $(document).height() - 50 ) {
      $("#social_1").css( "visibility", "visible" ).css( "animation", "scale_up 0.5s ease" );
      setTimeout(function() {
        $("#social_2").css( "visibility", "visible" ).css( "animation", "scale_up 0.5s ease" );
      },100);
      setTimeout(function() {
        $("#social_3").css( "visibility", "visible" ).css( "animation", "scale_up 0.5s ease" );
      },200);
      setTimeout(function() {
        $("#social_4").css( "visibility", "visible" ).css( "animation", "scale_up 0.5s ease" );
      },300);
    }
}

$(document).ready(function(){
  /*Typing effect on sec1*/
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate { border-right: 2px solid #fff; padding-right:2px; animation: blink 0.73s infinite}";
  document.body.appendChild(css);
  /*Scroll events*/
  $(window).scroll(scrollSpy);
  scrollSpy();
  //Other functions
  $("a").on('click', function(event) {
    let href=this.href
    if(href.indexOf("index.htm")!=-1){
      event.preventDefault();
      if (this.hash !== "") {
        let hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    }
  });


});

function show_sidebar() {
    document.getElementById("main").style.left="-290px";
    document.getElementById("header").style.marginLeft="-290px";
    document.getElementById("sdb_cvr").style.display="block";
    document.getElementById("sidebar").style.width="290px";
    document.getElementById("menu_").style.display="none";
}

function hide_side_bar() {
  document.getElementById("main").style.left="0px";
  document.getElementById("header").style.marginLeft="0px";
  document.getElementById("sdb_cvr").style.display="none";
  document.getElementById("sidebar").style.width="0px";
  document.getElementById("menu_").style.display="block";
}
