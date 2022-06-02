var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var myNodelist = document.getElementsByTagName("LI");
var close = document.getElementsByClassName("close");

var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
   
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    };

    input.value = "";
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function taskDone() {
    return function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('done');
        }
    };
}


ul.addEventListener('click', taskDone());
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

