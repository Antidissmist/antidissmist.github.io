



//things grid
pattern = document.getElementById("coolshape-pattern");
function scrollbg() {
  if (pattern != null) {
    pattern.setAttribute("y",(window.scrollY+3).toString());
  }
}
topthings = document.querySelector(".things");
function centerbg() {
  if (pattern != null && topthings != null) {
    pattern.setAttribute("x",( -topthings.offsetLeft ).toString());
  }
}
scrollbg();
centerbg();



//navigation
function homepage() {
  window.location.href = window.location.origin;
}



