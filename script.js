


function openimg(el) {
  var f = findmodal(el);
  if (f != null) {
    f.classList.toggle("open");
    document.body.classList.add("noscroll");
  }
  el.classList.add("invis");
  el.parentElement.classList.add("open");
}
function openmodalid(eid) {
  el = document.getElementById(eid);
  if (el != null) {
    el.classList.toggle("open");
    document.body.classList.add("noscroll");
  }
}
function open_game() {
  game_open = true;
  openmodalid("ripoffware");
  animframe = window.requestAnimationFrame(step);
}
function exitmodal(el) {
  el.parentNode.classList.toggle("open");
  el.parentNode.classList.remove("zoomed");
  document.body.classList.remove("noscroll");

  var opened = el.parentNode.parentNode.querySelector(".invis");
  if (opened != null) { //uh oh
    opened.classList.remove("invis");
  }
  el.parentElement.parentElement.classList.remove("open");
  

  //close_game();
}

function togglezoom(el) {
  el.parentNode.classList.toggle("zoomed");
}




/// get parent element, then find modal
function findmodal(el) {
  var found = null;
  for (var i=0; i<el.parentNode.childNodes.length; i++) {
      var n = el.parentNode.childNodes[i].className;
      if (n!=undefined) {
        if (n.includes("modal")) {
          found = el.parentNode.childNodes[i];
          break;
        }
      }
  }
  return found;
}




const alltabs = document.querySelectorAll(".bigtab h3");
const contentsections = document.querySelectorAll(".contentsection");
function clicktab(el) {
  if (!el.classList.contains("selected")) {
    alltabs.forEach(function(tb) {
      tb.classList.toggle("selected");
      tb.classList.toggle("taller");
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




//minigame
/*
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
  scroll2 = lerp(scroll2,scroll,.2);
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



//useful
const lerp = (x, y, a) => x * (1 - a) + y * a;
const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));


themes = {
  normal  : 0,
  spook   : 1,
  chilly  : 2,
};
theme = themes.normal;
topgreet = 4;

set_theme(theme);





greeting = document.getElementById("greeting");
gclicks = 0;
function greet(add="") {
  var arr = allthemes[theme].greetings;
  var num = Math.floor(Math.random()*(Math.min(arr.length,topgreet)));
  greeting.innerHTML = arr[num] + add;
  gclicks++
  topgreet = arr.length;
}


greet();

console.log("hello");


