window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementsByClassName("header")[0].style.background= "#414141";
    document.getElementsByClassName("header")[0].style.paddingBottom= "14px";
    document.getElementsByClassName("header")[0].style.paddingTop= "14px";
    document.getElementById("main_logo").style.opacity="1";
    document.getElementById("btp").style.opacity="1";
  } else {
    document.getElementsByClassName("header")[0].style.background= "transparent";
    document.getElementsByClassName("header")[0].style.paddingBottom= "20px";
    document.getElementsByClassName("header")[0].style.paddingTop= "20px";
    document.getElementById("main_logo").style.opacity="0";
    document.getElementById("btp").style.opacity="0";
  } 
}

$(document).ready(function(){
  //For shaping the svg
  $("circle").attr("cx",($( window ).width())/2);
  $("circle").attr("cy",($( window ).height())/2);
  if($( window ).width()>=$( window ).height())
    $("circle").attr("r",(($( window ).width())/1.5).toFixed());
  else
    $("circle").attr("r",(($( window ).height())/1.5).toFixed());
  //************************************ */
  $window = $(window);
  $window.scroll(function() {
    console.log();
    let d_skills = $("#skills").offset().top;
    let d_projects=$("#projects").offset().top;
    let d_resume = $("#resume").offset().top;
    let d_about = $("#about").offset().top;
    if ( $window.scrollTop() >= d_about - 30 ) {
      $(".about_body").css( "visibility", "visible" );
      $(".about_body").css( "animation", "grow_from_bottom 2s ease" );
    }
    if ( $window.scrollTop() >= d_skills- 30 ) {
        $(".sec_3 img").css( "visibility", "visible" );
        $(".sec_3 img").css( "animation", "grow_from_bottom 2s ease" );
    }
    if ( $window.scrollTop() >= d_projects- 30 ) {
      $(".project_title_cont").css( "visibility", "visible" );
      $(".project_title_cont").css( "animation", "grow_from_bottom 2s ease" );
    }
    if ( $window.scrollTop() >= d_resume - 30) {
      $("#resume_image").css( "visibility", "visible" ).css( "animation", "show_left 2s ease" );
      $("#resume_content").css( "visibility", "visible" ).css( "animation", "show_right 2s ease" );  
    }
    if( $window.scrollTop() + $window.height() >= $(document).height() - 50 ) {
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
  });

  //Other functions
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

function wrap_loader() {
  let x=document.getElementById("page_loader");
  let y=document.getElementsByTagName("circle")[0];
  document.getElementById("img_load").style.display="none";
  radius=y.getAttribute("r");
  y.innerHTML="<animate attributeName=\"r\" attributeType=\"XML\" from=\""+radius+"\" to=\"0\" begin=\"0s\" dur=\"0.3s\" fill=\"freeze\" repeatCount=\"once\"/>";
  document.getElementById("main").style.visibility="visible";
  setTimeout(function(){x.style.display="none";},300);
}

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