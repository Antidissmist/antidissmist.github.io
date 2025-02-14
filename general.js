



//set theme
const themeselect = document.getElementById("themeselect");
function set_theme(classname) {

  let root = document.documentElement;
  root.classList.remove("theme_chilly");
  root.classList.remove("theme_spooky");

  if (classname) {
    root.classList.add(classname);
  }

  if (themeselect) {
    themeselect.value = classname;
  }

}



//navigation
function homepage() {
  window.location.href = window.location.origin;
}


