



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
//document.addEventListener("resize", scrollbg);
window.onresize = function() {scrollbg()};



class pagetheme {
  constructor(bg_front,bg_back,c_dark,c_bg,c_bg2,imgfilter,greetings) {
    this.bg_front = bg_front;
    this.bg_back = bg_back;
    this.c_dark = c_dark;
    this.c_bg = c_bg;
    this.c_bg2 = c_bg2;
    this.imgfilter = imgfilter;
    this.greetings = greetings;
  }
}

allthemes = [

//normal
new pagetheme("pagebg2","pagebg","#793a80","#242234","#242234",
"brightness(0) saturate(100%) invert(28%) sepia(10%) saturate(4124%) hue-rotate(250deg) brightness(93%) contrast(87%)",
[
  "hello! 👋",
  "hi 👋",
  "hey 👋",
  "👋",

  "🌮",
  "🍐",
  "🌍",
  "🌒",

  "🧱",
  "🧰",
  "⚙️",
]),


//spooky
new pagetheme("pagebg2_2","pagebg_2","#9e2835","#3f2832","#181425",
"brightness(0) saturate(100%) invert(16%) sepia(71%) saturate(2689%) hue-rotate(336deg) brightness(94%) contrast(87%)",
[
  "💀",
  "☠️",
  "🎃",
  "👻",

  "🔥",
  "🦴",
  "🪕",
  "🌒",

  "⛏️",
  "🧰",
  "⚙️",
]),


//chilly

new pagetheme("winter_front","winter_back","#124e89","#262b44","#221c1a",
"brightness(0) saturate(100%) invert(22%) sepia(87%) saturate(1154%) hue-rotate(185deg) brightness(92%) contrast(92%)",
[
  "☃️",
  "🏔️",
  "🌨️",
  "🌴",

  "🌲",
  "❄️",
  "🏂",
  "🔥",

  "🌮",
  "🧰",
  "⚙️",
]),


];


//set theme
themeselect = document.getElementById("themeselect");
function set_theme(num) {

  theme = num;

  var bg_back = allthemes[num].bg_back;
  var bg_front = allthemes[num].bg_front;
  var cdark = allthemes[num].c_dark;
  var cbg = allthemes[num].c_bg;
  var cbg2 = allthemes[num].c_bg2;
  var imgfilter = allthemes[num].imgfilter;

  coolshapes = document.querySelectorAll(".coolshape image");
  for (let el of coolshapes) {
    el.setAttribute("xlink:href","files/"+bg_front+".png");
  }
  let root = document.documentElement; //update css
  root.style.setProperty('--bg_back', "url(files/"+bg_back+".png)");
  root.style.setProperty('--bg_front', "url(files/"+bg_front+".png)");
  root.style.setProperty('--c_dark', cdark);
  root.style.setProperty('--c_bg', cbg);
  root.style.setProperty('--c_bg2', cbg2);
  root.style.setProperty('--imgfilter', imgfilter);

  themeselect.value = theme;

}



//navigation
function homepage() {
  window.location.href = window.location.origin;
}


