



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



allthemes = [

//normal
{
bg: "pagebg",
bg2: "pagebg2",
c_dark: "#242234",
c_bg: "#221c1a",
greetings : [
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

]
},

//spook
{
bg: "pagebg_2",
bg2: "pagebg2_2",
c_dark: "#3f2832",
c_bg: "#181425",
greetings: [
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

]
},
];


//set theme
function set_theme(num) {

  theme = num;

  var bg = allthemes[num].bg;
  var bg2 = allthemes[num].bg2;


  coolshapes = document.querySelectorAll(".coolshape image");
  for (let el of coolshapes) {
    el.setAttribute("xlink:href","files/pagebg2_2.png");
  }
  let root = document.documentElement; //update css
  root.style.setProperty('--bg_back', "url(files/pagebg_2.png)");
  root.style.setProperty('--bg_front', "url(files/pagebg2_2.png)");
  root.style.setProperty('--c_dark', "#3f2832");
  root.style.setProperty('--c_bg', "#181425");
}



//navigation
function homepage() {
  window.location.href = window.location.origin;
}


