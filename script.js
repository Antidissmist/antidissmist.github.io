



function openimg(el) {
  var f = findmodal(el);
  if (f != null) {
    f.classList.toggle("open");
    document.body.classList.add("noscroll");
  }
  el.classList.add("invis");
}
function exitmodal(el) {
  el.parentNode.classList.toggle("open");
  el.parentNode.classList.remove("zoomed");
  document.body.classList.remove("noscroll");

  var opened = el.parentNode.parentNode.querySelector(".invis");
  if (opened != null) { //uh oh
    opened.classList.remove("invis");
  }
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



greetings = [
  "hello! 👋",
  "hey whats up 👋",
  "hey 👋",

  "🌮",
  "🍐",
  "🌍",
  "🌒",

  "🧱",
  "🧰",
  "⚙️",
  

];

greeting = document.getElementById("greeting");
gclicks = 0;
topgreet = 3; //first
function greet() {
  var num = Math.floor(Math.random()*(Math.min(greetings.length,topgreet)));
  greeting.innerHTML = greetings[num];
  gclicks++
  topgreet = greetings.length;
}
greet();

console.log("hello");


