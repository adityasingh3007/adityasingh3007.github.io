window.onscroll = function() {scrollFunction()};

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

function check() {
  var pathname = window.location.href;
  let index = pathname.indexOf('#');
  if(index!=-1){
      let sub=pathname.substring(index+1,pathname.length);
      let clc="#"+sub.toLowerCase();
      $(clc).click();
  }
}

function scrollSpy(){
    let d_projects=$("#projects").offset().top;
    if ( $(window).scrollTop() >= d_projects- 50 ) {
      $(".project_title_cont").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.css( "visibility", "visible" );
          el.addClass("come-in"); 
        } 
      });
    }
    

}

function validateURL(){
  let hash = window.location.hash;
  if (hash !== "") {
    if(hash=="#projects" || hash=="#home"){
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
    else{
      window.location.hash="";
      $(".projects_cont").css( "display", "block" );
      $(hash).fadeIn("slow");
    }
  }
}

$(document).ready(function(){
  $(window).scroll(scrollSpy);
  scrollSpy();
  validateURL();
  $("a").on('click', function(event) {
    let str=this.href;
    //console.log(str);
    flag=str.indexOf("index.htm");
    git=str.indexOf("github.com");
    if(flag==-1 && git==-1){
      event.preventDefault();
      if (this.hash !== "") {
        let hash = this.hash;
        //console.log(hash)
        if(hash=="#projects" || hash=="#home"){
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        }
        else{
          $(".projects_cont").css( "display", "block" );
          $(hash).fadeIn("slow");
        }
      }
    }
  });
});

$(window).click(function(e){
   if(e.target.id=="proj_cont_all"){
     $(".projects_cont").fadeOut("slow");
     $("#FishBOT").css( "display", "none" );
     $("#AntBOT").css( "display", "none" );
     $("#PortableBraille").css( "display", "none" );
     $("#GestureControlled").css( "display", "none" );
     let loc = document.location.href;
     let index = loc.indexOf('#');
     if(index!=-1){
      let sub=loc.substring(index,loc.length);
      document.location.href = String( document.location.href ).replace( sub, "" );
     }
   }
});

function show_sidebar() {
    document.getElementById("main").style.marginLeft="-290px";
    document.getElementById("header").style.marginLeft="-290px";
    document.getElementById("sdb_cvr").style.display="block";
    document.getElementById("sidebar").style.width="290px";
    document.getElementById("menu_").style.display="none";
}

function hide_side_bar() {
  document.getElementById("main").style.marginLeft="0px";
  document.getElementById("header").style.marginLeft="0px";
  document.getElementById("sdb_cvr").style.display="none";
  document.getElementById("sidebar").style.width="0px";
  document.getElementById("menu_").style.display="block";
}