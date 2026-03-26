// TYPING EFFECT
const text = "We Build Future-Ready Tech";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 40);
  }
}

// START PROJECT BUTTON ACTION
function startProject() {
  alert("🚀 Awesome! Let's build your project together!");
}

// RUN
if (document.getElementById("typing")) {
  type();
}
