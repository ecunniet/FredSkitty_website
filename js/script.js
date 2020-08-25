setTimeout(function() {
  var el = document.getElementsByClassName("not-there");
  for (var j = 0; j < el.length; j++) {
    el[j].style.cssText = "display:flex !important";
  }
}, 1000);

function fadeOut(tmpout) {
  var elements = document.getElementsByClassName(tmpout);
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("fadein");
    elements[i].classList.add("fadeout");
  }
}
function fadeIn(tmpin) {
  var elements = document.getElementsByClassName(tmpin);
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("fadeout");
    elements[i].classList.add("fadein");
  }
}
function showVideo(event) {
  if (event == "EP") {
    fadeOut("mark1");
    fadeIn("mark2");
  } else if (event == "clip") {
    fadeOut("mark1");
    fadeIn("mark3");
  } else if (event == "return1") {
    fadeOut("mark2");
    fadeIn("mark1");
  } else if (event == "return2") {
    fadeOut("mark3");
    fadeIn("mark1");
  }
}

function reveal(e) {
  if (e == "newsletter") {
    fadeIn("modal");
  } else if (e == "close") {
    fadeOut("modal");
  }
}
