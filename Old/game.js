var i = 0;
var len=0;
var flag=0;
var txt = 'Are you Ready  ?';
var speed = 50; 
var name="";
var start_time="";
var end_time="";
var incoming="";
 var hist="";
var pge="Opera refers to a dramatic art form, originating in Europe, in which the emotional content is conveyed to the audience as much through music, both vocal and instrumental, as it is through the lyrics. By contrast, in musical theater an actor's dramatic performance is primary, and the music plays a lesser role.";

function start_game() {
     document.getElementById("game_rules").style.display="none";
     document.getElementById("game_starter").style.display="block";
     typewriter();
    }

function typewriter() {
    if(i < txt.length) {
     document.getElementById("flash").innerHTML += txt.charAt(i);
     i++;
    setTimeout(typewriter, speed);
            }
   if(i>=16)
      document.getElementById("name_input").style.height="auto";
      document.getElementById("nam").focus();
     }

function extract() {
  name=document.getElementById("nam").value;
  if(name=="")
   {
     alert("Woah!!! Name is Required");
     document.getElementById("nam").value="";
     document.getElementById("nam").focus();
  }
 else
  {
     document.getElementById("game_starter").style.display="none";
     alert("Press OK when you are ready! After pressing OK timer will start.");
     document.getElementById("game_controller").style.display="block";
     timer_start();
  }
 }

function timer_start() {
    for(i=0;i<pge.length;i++)
       document.getElementById("give_text").innerHTML+="<span id='ch_"+i+"'>"+pge.charAt(i)+"</span>";
    document.getElementById("user_text").focus();
       start_time = new Date();
     }

function check() {
     var key = event.keyCode || event.charCode;
      
    if(flag==0 && key!=13) {
         incoming=document.getElementById("user_text").value;
         len=incoming.length-1;
       if(incoming.charAt(len)!=pge.charAt(len))
          {
             
             flag=1;
             document.getElementById("ch_"+len).style.color="red";
          }
      else
         {
           for(j=0;j<=len;j++)
               document.getElementById("ch_"+j).style.color="green";
           if(len>=pge.length-1)
              result();
         }
  hist=incoming;
              }
    else
        if(flag==1) {
               if( key == 8 || key == 46 )
                   {
                    flag=0;
                   }
              else
               document.getElementById("user_text").value=hist;
             }
 }


function result()
  {
    document.getElementById("user_text").disabled="true";
     end_time = new Date();
     var diff=(end_time.getTime()-start_time.getTime())/1000;
     var typ_speed=(pge.length)/diff;
     typ_speed= Math.abs(Math.round(typ_speed));
     document.getElementById("game_controller").style.display="none";
     document.getElementById("game_result").style.display="block";
     document.getElementById("res_cont").innerHTML="<center>Hello!  " + name + "<br>Here's your result:<br><h4>Your typing speed is :</h4><b>"+typ_speed+" Characters/sec.</b></center>";
  }


