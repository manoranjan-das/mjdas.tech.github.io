//------Image slide----------
var slideIndex= 0;
showSlides();
function showSlides(){
    var i;
    var slides=document.getElementsByClassName("mySlide")
    var dots=document.getElementsByClassName("dotss");
    for(i=0;i<slides.length;i++)
    {
        slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex > slides.length)
    {
        slideIndex=1;
    }
   for(i=0; i<dots.length;i++)
    {
       dots[i].className=dots[i].className.replace(" active","");
    }
        slides[slideIndex-1].style.display="block";
       dots[slideIndex-1].className += " active";
        setTimeout(showSlides,4000);
}
//------------contact us------------


function txtvalid(){
    var txt=document.getElementById("txt-area").value;
    var ln=txt.length;
    if(ln<30)
    {
        document.getElementById("txt-area").style.border="1px solid red";
       document.getElementById("txtalert").innerHTML="Text should be more than 30 Words." ;
       return false;
       
    }
    else{
        alert("Message Sent..!!!!");
       window.history.log(-1);
        return true;
    }
}
//-----------Icon-Toggle
function showNav()
{
	document.getElementById("menu-bar").style.width="100%";
	document.getElementById("icon").style.display="none";
	
}
function closeNav()
{
	document.getElementById("menu-bar").style.width="0";
	document.getElementById("icon").style.display="block";
	
}
