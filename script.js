
var i = 0;
var j = 0
var txt1 = 'LET US BUILD YOUR';
var txt2 = 'HOME FOR YOU';
var speed1 = 50; 
var speed2 = 100; 

function typeWriter1() {
  if (i < txt1.length) {
    document.getElementById("typewriter1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed1);
  }

}

function typeWriter2() {
  if (j < txt2.length) {
    document.getElementById("typewriter2").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed2);
  }
}



function reveal_up() {
  var reveals = document.querySelectorAll(".reveal_up");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    console.log("Reveal Up Window Heiht: ", windowHeight)
    var elementTop = reveals[i].getBoundingClientRect().top;
    console.log("Reveal UP Element Top: ", elementTop)
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animate_active");
    } else {
      reveals[i].classList.remove("animate_active");
    }
  }
}

function reveal_down() {
  var reveals = document.querySelectorAll(".reveal_down");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    console.log("Reveal Down Window Heiht: ", windowHeight)
    var elementTop = reveals[i].getBoundingClientRect().top;
    console.log("Reveal down Element Top: ", elementTop)
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animate_active");
    } else {
      reveals[i].classList.remove("animate_active");
    }
  }
}

function reveal_left() {
  var reveals = document.querySelectorAll(".reveal_left");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animate_active");
    } else {
      reveals[i].classList.remove("animate_active");
    }
  }
}

function reveal_right() {
  var reveals = document.querySelectorAll(".reveal_right");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animate_active");
    } else {
      reveals[i].classList.remove("animate_active");
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Next and previous button for projects
function nextProject(){
 var active = document.querySelector(".Page_active").id;
 var views = document.getElementsByClassName("pages");
 console.log(views.length);
 for (let i = 0; i < views.length; i++) {
  if (views[i].id == active) {
   console.log(i)
   views[i].classList.remove("Page_active");
   views[i+1].classList.add("Page_active");
    if (i >= 0) {
  document.getElementById("previous").style.display = "inline";
  }
    if (i == (views.length - 2)){
   document.getElementById("next").style.display = "none";
  }
  topFunction()
  break;
  }
 }
}


function prevProject(){
 var active = document.querySelector(".Page_active").id;
 var views = document.getElementsByClassName("pages");
 console.log(views.length);
 for (let i = 0; i < views.length; i++) {
  if (views[i].id == active) {
   console.log(i)
   views[i].classList.remove("Page_active");
   views[i-1].classList.add("Page_active");

   if (i <= (views.length - 1)){
    document.getElementById("next").style.display = "inline";
   }

   if (i == 1){
    document.getElementById("previous").style.display = "none";
   }
  topFunction()
  break;
 
  }
 }
}



//slider for recent projects
function page_slider() {
  var img = document.getElementById("project_swipers_img");
  var slides = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
  var Start = 0;

  function slider(){
    if(Start < slides.length){
      Start++;
    }
    else{
      Start = 1;
    }
    img.innerHTML = "<img id= \"project_swipers_img\" src='/assets/ongoing_sliders/"+slides[Start-1]+"'>";
  }

  setInterval(slider, 2000);
  }


window.addEventListener("scroll", reveal_up);
window.addEventListener("scroll", reveal_down);
window.addEventListener("scroll", reveal_left);
window.addEventListener("scroll", reveal_right);
// window.addEventListener("scroll", reveal_down);
window.addEventListener("load", reveal_up);
window.addEventListener("load", reveal_down);