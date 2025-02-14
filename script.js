



const mediatype_def = "image";
const video_type_def = "video/mp4";

const link_ase = `<a href="https://www.aseprite.org/">Aseprite</a>`;

const modal_data = {
  /*
  name: {
    path: "files/thing.png",
    type: "image", "video",
    video_type: "video/webm",
    desc: "a cool game",
    zoomable: false,
  }
  */

  ubercat: {
    path: "gamedev/ubercat.webm",
    type: "video",
    video_type: "video/webm",
    desc: "ÜBERCAT OVERDRIVE, a crazy simulation/adventure game about Coots the cat causing chaos and calamity. <br>"
         +`Winner of the <a href="https://itch.io/jam/ludwig-2023">2023 Ludwig Game Jam</a>. <br>`
         +`Free on <a href="https://antidissmist.itch.io/ubercat-overdrive">itch.io</a> and <a href="https://gx.games/games/ojztkp/ubercat-overdrive/">gx.games</a>.`,
  },
  expolaris: {
    path: "videos/expolaris.mp4",
    type: "video",
    desc: `EX POLARIS, an adventure platforming game about a mysterious visit by aliens. Developed in 2 months. <br>Free on <a href="https://antidissmist.itch.io/ex-polaris">Itch.io</a> and <a href="https://gx.games/games/3av88x/ex-polaris/">gx.games</a>.`,
  },
  bitbloc: {
    path: `videos/bitbloc.mp4`,
    type: `video`,
    desc: `BIT BLOC alpha 1. An infinite procedurally generated sandbox game, Inspired by Terraria and Minecraft. <br>Free on <a href="https://antidissmist.itch.io/bit-bloc">itch.io</a>`,
  },
  loungeware: {

  },
  microkart: {
    path: "videos/kart2.mp4",
    type: "video",
    desc: `Micro Kart, A multiplayer racing game made in ~1 week. <br>Winner of the gx.games multiplayer game jam for "most played game". <br>Free on <a href="https://gx.games/games/gcr7xk/micro-kart/">gx.games</a>`,
  },
  haunter: {
    path: "videos/haunter.mp4",
    type: "video",
    desc: `HAUNTER, a small game about a ghost who has to haunt a house before the landlord returns.<br> Made around halloween for fun.<br> Free on <a href="https://antidissmist.itch.io/haunter">Itch.io</a> and <a href="https://gx.games/games/fjpgq8/haunter/">gx.games</a>`,
  },



  art_yellow: {
    path: `art/yellow.webp`,
    type: `image`,
    desc: `(2021) doodle`,
  },
  art_voxtower: {
    path: `art/voxeltower.webp`,
    type: `image`,
    desc: `(2020) Made in <a href="https://ephtracy.github.io/">MagicaVoxel</a>`,
  },
  art_orangeboxes: {
    path: `art/orangeboxes.webp`,
    type: `image`,
    desc: `(2021) doodle`,
  },
  art_spacetower: {
    path: `art/spacefull.webp`,
    type: `image`,
    desc: `(2020) Space Tower Headquarters`,
    zoomable: true,
  },
  art_valleyview: {
    path: `art/shack.gif`,
    type: `image`,
    desc: `(2020) Valley View Shack`,
  },
  art_solar: {
    path: `art/solar.webm`,
    type: `video`,
    video_type: `video/webm`,
    desc: `(2020) Solar Sunset Cruise`,
  },
  art_google: {
    path: `art/coolgoogle.webp`,
    type: `image`,
    desc: `(2021) Overdesigned Google logo`,
  },
  art_doodle_3_3: {
    path: `art/doodle_3_3.webp`,
    type: `image`,
    desc: `(2022) doodle`,
  },
  art_tower: {
    path: `art/tower.webp`,
    type: `image`,
    desc: `(2022) Sci fi tower doodle`,
  }

};




const elem_modal = document.getElementById("modal_window");
let elem_modal_content_box;
let elem_modal_desc;
let elem_modal_img;
let elem_modal_video;

function open_modal(type) {

  elem_modal_desc ??= document.getElementById("modal_desc");
  elem_modal_img ??= document.getElementById("modal_elem_img");
  elem_modal_video ??= document.getElementById("modal_elem_video");
  elem_modal_content_box ??= elem_modal_img.parentElement;
  
  const data = modal_data[type];
  const mediatype = data["type"] ?? mediatype_def;
  const zoomable = data["zoomable"] ?? false;

  //setup image/video element
  let show_video = false;
  let show_img = false;
  if (mediatype == "image") {
    show_img = true;
    elem_modal_img.src = data.path;
  }
  else if (mediatype == "video") {
    show_video = true;
    elem_modal_video.src = data.path;
    elem_modal_video.type = data.video_type ?? video_type_def;
  }
  elem_modal_video.style.setProperty("display",show_video ? "block" : "none");
  elem_modal_img.style.setProperty("display",show_img ? "block" : "none");

  //set description, allowing for elements
  elem_modal_desc.innerHTML = data.desc ?? "";

  //open modal
  if (zoomable) {
    elem_modal.classList.add("zoomable");
  }
  else {
    elem_modal.classList.remove("zoomable");
  }
  elem_modal.classList.add("open");
  body_lock_scroll();
}



function openimg(el) {
  var f = findmodal(el);
  if (f != null) {
    f.classList.toggle("open");
    body_lock_scroll();
  }
  el.classList.add("invis");
  el.parentElement.classList.add("open");
}
function openmodalid(eid) {
  el = document.getElementById(eid);
  if (el != null) {
    el.classList.toggle("open");
    body_lock_scroll();
  }
}
function open_game() {
  game_open = true;
  openmodalid("gameboy");
  animframe = window.requestAnimationFrame(step);
}
function exitmodal(el) {
  el.parentNode.classList.toggle("open");
  el.parentNode.classList.remove("zoomed");
  body_unlock_scroll();

  var opened = el.parentNode.parentNode.querySelector(".invis");
  if (opened != null) { //uh oh
    opened.classList.remove("invis");
  }
  el.parentElement.parentElement.classList.remove("open");


  //close_game();
}
function modal_exit(modal_parent) {
  modal_parent.classList.remove("open");
  modal_parent.classList.remove("zoomed");
  modal_parent.classList.remove("zoomable");
  body_unlock_scroll();
}


function body_lock_scroll() {

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

  document.body.classList.add("noscroll");
}
function body_unlock_scroll() {

  document.documentElement.style.removeProperty('--scrollbar-width');

  document.body.classList.remove("noscroll");
}



/// get parent element, then find modal
function findmodal(el) {
  var found = null;
  for (var i = 0; i < el.parentNode.childNodes.length; i++) {
    var n = el.parentNode.childNodes[i].className;
    if (n != undefined) {
      if (n.includes("modal")) {
        found = el.parentNode.childNodes[i];
        break;
      }
    }
  }
  return found;
}



function modalclick(e) {
  if (e.target == this) { //clicked on background
    exitmodal(this.querySelector(".modal_exit"));
  }
}
function modal_bg_click(bg_element) {
  modal_exit(bg_element.parentElement);
}
function modal_content_click(content_box) {
  if (elem_modal.classList.contains("zoomable")) {
    elem_modal.classList.toggle("zoomed");
  }
}


const modal_openers = document.querySelectorAll("[data-modal]");
modal_openers.forEach(elem=>{
  let type = elem.getAttribute("data-modal");
  elem.addEventListener("click",()=>{
    open_modal(type);
  });
});


const allmodals = document.querySelectorAll(".modal");
allmodals.forEach((elem) => {

  //add click to exit
  //elem.addEventListener('click', modalclick);

  const hide_when_opacity_zero = (event)=>{
    if (event.propertyName != "opacity") return;
    let opacity = getComputedStyle(elem).opacity;
    elem.style.setProperty("visibility", opacity==0 ? "hidden" : "visible" );
  };
  elem.addEventListener("transitionend",hide_when_opacity_zero);
  elem.addEventListener("transitionstart",hide_when_opacity_zero);

});


document.querySelectorAll("a").forEach(link=>{
  link.setAttribute("target","_blank");
});



let alltabs;
let contentsections;
function clicktab(el) {

  alltabs ??= document.querySelectorAll(".bigtab h3");
  contentsections ??= document.querySelectorAll(".contentsection");

  if (!el.classList.contains("selected")) {
    alltabs.forEach(function(tb) {
      tb.classList.toggle("selected");
    });
    contentsections.forEach(function(tb) {
      if (tb.style.display === "none") {
        tb.style.display = "";
      } else {
        tb.style.display = "none";
      }
    });
  }
  //el.classList.toggle("selected");

  //el.parentElement.classList.remove("selected");
}





/*

//minigame
game_open = false;
function close_game() {
  game_open = false;
}


function Linkbox(title,link) {
  this.title = title;
  this.link = link;
}
game_list = [
new Linkbox("things",window.location.origin + "/pages/things.html"),
new Linkbox("things 2",window.location.origin + "/pages/things.html"),
];



//canvas
mcanvas = document.getElementById("minigame");
mctx = mcanvas.getContext("2d");
mctx.imageSmoothingEnabled = false;
mw = 256;
mh = 256;
screenscale = 256/208;
game_screen = 0;

mouse_x = 0;
mouse_y = 0;
click = false;
scroll = 0;
scroll2 = 0;

game_keys = [
"ArrowLeft",
"ArrowRight",
"ArrowUp",
"ArrowDown",
"KeyZ",
"KeyX"
];
keys = [
0,0,0,0,
0,0
];
game_select = 0;


c_black = "#000000";
c_white = "#ffffff";
c_background = "#a6fcdb";
c_text = "#285cc4";
mctx.font = '22px sans-serif';
mctx.textAlign = "center";


setcolor(c_white,c_white);
mctx.lineWidth = 10;



function game_enter() {
  window.location.href = game_list[game_select].link;
}

function unpress() {
  keys.fill(0);
}
function game_mouseover() {
  if (game_open) {
    var e = window.event;
    mouse_x = e.layerX*screenscale;
    mouse_y = e.layerY*screenscale;
  }
}
function game_click() {
  if (game_open) {
    click = true;
  }
}
function game_cursor(value) {
  mcanvas.style.cursor = value;
}
function keydown(e) {
  if (game_open) {
    var justpressed = false;
    var ind = game_keys.indexOf(e.code);
    if (ind != -1) {
      justpressed = !keys[ind];
      keys[ind] = 1;
    }

    //interact
    if (justpressed) {
      if (ind == 5) {
        game_enter();
      }
    }
  }
}
function keyup(e) {
  if (game_open) {
    var ind = game_keys.indexOf(e.code);
    if (ind != -1) {
      keys[ind] = 0;
    }
  }
}
document.addEventListener("keydown",keydown);
document.addEventListener("keyup",keyup);
document.addEventListener("mousedown",game_click);
document.addEventListener("blur",unpress);


function draw_circle(_x,_y,_rad) {
  mctx.beginPath();
  mctx.arc(_x,_y,_rad, 0, 2 * Math.PI);
  mctx.fill();
}
function draw_line(x1,y1,x2,y2) {
  mctx.moveTo(x1,y1);
  mctx.lineTo(x2,y2);
  mctx.stroke();
}
function draw_clear() {
  mctx.fillStyle = c_background;
  mctx.fillRect(0,0,mw,mh);
}
function setcolor(fill,stroke) {
  mctx.fillStyle = fill;
  mctx.fillStyle = stroke;
}


//minigame images
images = {
  gamebox : new Image(),
  interact : new Image(),
}
images.gamebox.src = 'minigame/gamebox.png';
images.interact.src = 'minigame/x.png';


//game step
function minigame_step() {

  game_cursor("auto");

  if (game_screen == 0) {


    scroll += (-keys[0]+keys[1])*6;
    scroll = clamp(scroll,0,128*game_list.length-128);


    ///draw
    draw_clear();


    var by = 80;
    var bx = 80;
    var spc = 128;
    var boxx;
    var boxy;
    var offy;
    for(var i=0; i<game_list.length; i++) {
      offy = 0;
      boxx = bx+(i*spc)-scroll2;
      boxy = by;
      if (scroll2 > (spc*i)-64 && scroll2 < (spc*i)+64) {
        mctx.drawImage(images.interact,bx+(i*spc)-scroll2+32,by-52,32,32);
        offy = -4;
        game_select = i;
      }
      if (mouse_x>boxx && mouse_x<boxx+96 && mouse_y>boxy && mouse_y<boxy+96) {
        game_cursor("pointer");
        offy -= 4;
        if (click) {
          scroll = spc*i;
          if (game_select == i) {
            game_enter();
          }
        }
      }
      mctx.drawImage(images.gamebox,boxx,boxy+offy,96,96);
      setcolor(c_text,c_text);
      mctx.fillText(game_list[i].title, bx+(i*spc)-scroll2+48,by+128);
    }

  }



  //fx
  scroll2 = lerp(scroll2,scroll,.15);
  click = false;

}

//game frames
function step() {
  if (game_open) {
    window.requestAnimationFrame(step);
  }
  else {
    cancelAnimationFrame(animframe);
  }
  now = Date.now();
  elapsed = now - then;
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);

    minigame_step();
  }
}
fpsInterval = 1000 / 60;
then = Date.now();
startTime = then;
*/



//start videos in case they pause
window.addEventListener('focus', (ev) => {
  document.querySelectorAll('video').forEach((v) => {
    v.play();
  });
});




//useful
const lerp = (x, y, a) => x * (1 - a) + y * a;
const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));


const themes = {
  normal: "",
  spooky: "theme_spooky",
  chilly: "theme_chilly",
};
let theme = themes.normal;


//set theme by time of year
try {
  let now = new Date();
  let start = new Date(now.getFullYear(), 0, 0);
  let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  let oneDay = 1000 * 60 * 60 * 24;
  let day = Math.floor(diff / oneDay); //number day of the year

  //after dec 1, before feb something
  if (day>=335 || day<45) {
    theme = themes.chilly;
  }
  //between oct 1 and nov 7
  else if (day>274 && day<311) {
    theme = themes.spooky;
  }
  
}
catch (e) {
  theme = themes.normal;
}
set_theme(theme);





console.log("hello");


