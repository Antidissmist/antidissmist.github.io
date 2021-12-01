



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

//chilly
{
bg: "pagebg3",
bg2: "pagebg3_2",
c_dark: "#124e89",
c_bg: "#262b44",
greetings: [
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

]
},
];


//set theme
themeselect = document.getElementById("themeselect");
function set_theme(num) {

  theme = num;

  var bg = allthemes[num].bg;
  var bg2 = allthemes[num].bg2;
  var cdark = allthemes[num].c_dark;
  var cbg = allthemes[num].c_bg;

  coolshapes = document.querySelectorAll(".coolshape image");
  for (let el of coolshapes) {
    el.setAttribute("xlink:href","files/"+bg2+".png");
  }
  let root = document.documentElement; //update css
  root.style.setProperty('--bg_back', "url(files/"+bg+".png)");
  root.style.setProperty('--bg_front', "url(files/"+bg2+".png)");
  root.style.setProperty('--c_dark', cdark);
  root.style.setProperty('--c_bg', cbg);

  themeselect.value = theme;

}



//navigation
function homepage() {
  window.location.href = window.location.origin;
}


