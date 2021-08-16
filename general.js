



//things grid
patterns = document.querySelectorAll(".coolpattern");
function scrollbg() {
  for (let val of patterns) {
    let par = val.parentNode.parentNode.getBoundingClientRect();
    val.setAttribute("y",-par.top);
    val.setAttribute("x",-par.left);
  }
}
scrollbg();
document.addEventListener("scroll", scrollbg);
document.addEventListener("resize", scrollbg);



//navigation
function homepage() {
  window.location.href = window.location.origin;
}


