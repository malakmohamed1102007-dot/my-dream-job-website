let dingSound =document.getElementById("dingSound");


let titles = document.querySelectorAll(".subTitle");

titles.forEach(function(title) {

  title.addEventListener("mouseover", function() {

    let parentDiv = title.parentElement;
    let paragraphs = parentDiv.querySelectorAll("p");

    paragraphs.forEach(function(p) {
      p.classList.add("show");
    });

    dingSound.currentTime = 0;
    dingSound.play();

  });

  title.addEventListener("mouseout", function() {

    let parentDiv = title.parentElement;
    let paragraphs = parentDiv.querySelectorAll("p");

    paragraphs.forEach(function(p) {
      p.classList.remove("show");
    });

  });

});



let button = document.getElementById("celebrateBtn");

button.addEventListener("click", function() {
    confettiSound.currentTime = 0;
     confettiSound.play();

  for (let i = 0; i < 50; i++) {

    let confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = Math.random() * 15 + 10 + "px";  
    confetti.style.height = confetti.style.width;

    confetti.style.backgroundColor = randomColor();
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";

    confetti.style.borderRadius = randomShape();   
    confetti.style.zIndex = 9999;
    confetti.style.pointerEvents = "none"; 

    document.body.appendChild(confetti);

    let speedX = (Math.random() - 0.5) * 4; 
    let speedY = Math.random() * 5 + 2;   

    let fall = setInterval(function() {
      confetti.style.top = confetti.offsetTop + speedY + "px";
      confetti.style.left = confetti.offsetLeft + speedX + "px";

      if (confetti.offsetTop > window.innerHeight) {
        clearInterval(fall);
        confetti.remove();
      }
    }, 20);

  }

});

function randomColor() {
  let colors = ["#FFFACD", "rgb(224, 72, 112)", "rgb(74, 172, 139)", " rgb(136, 48, 162)", "#f05642"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function randomShape() {
  let shapes = ["50%", "0%", "20%"];
  return shapes[Math.floor(Math.random() * shapes.length)];
}