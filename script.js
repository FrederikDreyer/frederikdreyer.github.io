console.log("det virker");

function displayBlock() {
  document.getElementById('article1').style.display = "block";
}

function displayNone() {
  document.getElementById('article1').style.display = "none";
}

document.getElementById("open-popup-btn").addEventListener("click",function(){
  document.getElementsByClassName("modal2")[0].classList.add("active");
});

document.getElementById("close-popup-btn").addEventListener("click",function(){
  document.getElementsByClassName("modal2")[0].classList.remove("active");
});
