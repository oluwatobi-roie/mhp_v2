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



function ongoing(){
 var images = document.querySelectorAll(".ongoingslider")

 for(var i = 0; i < images.length; i++) {
  images[i].classList.add("show");
  setTimeout(() => {
 console.log("delayed for 1 second");
}, "1000");
 }
}

window.addEventListener("scroll", reveal_up);
window.addEventListener("scroll", reveal_down);
window.addEventListener("load", reveal_up);
window.addEventListener("load", reveal_down);
ongoing();