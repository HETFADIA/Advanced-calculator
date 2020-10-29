let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));
function sin(a) { 
  return Math.sin(a) 
};
function asin(a) { return Math.asin(a) };
function cos(a) { return Math.cos(a) };
function acos(a) { return Math.acos(a) };
function tan(a) { return Math.tan(a) };
function atan(a) { return Math.atan(a) };
function sqrt(a) { return Math.sqrt(a) };
function log(a) { return Math.log(a) };
function pow(a, b) { return Math.pow(a, b) };
function exp(a) { return Math.exp(a) };
function sinh(a) { return Math.sinh(a) };
function cosh(a) { return Math.cosh(a) };
function tanh(a) { return Math.tanh(a) };
function is_digit(a) {
  return parseInt(a) >= 0 && parseInt(a) <= 9;
};
function add(a) {
  if (is_digit(a) == 1) {
    display.innerText += "*";
  }
}
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    var last = "";
    if (display.innerText != "") {
      last = display.innerText[display.innerText.length - 1];
    }
    console.log(last);
    console.log(is_digit(last));
    if (e.target.innerText.length > 1) {
      if (e.target.innerText == "PI") {
        add(last);
        display.innerText += Math.PI;
      } else {
        add(last);
        display.innerText += e.target.innerText + "(";
      }
    } else {
      switch (e.target.innerText) {
        case "C":
          display.innerText = "";
          break;
        case "←":
          if (display.innerText != "") {
            display.innerText = display.innerText.slice(0, -1);
          }
          break;
        case "=":
          if (display.innerText != "") {
            try {
              display.innerText = eval(display.innerText);
            } catch (error) {
              display.innerText = "Error";
            }
          }
          break;
        case "E":
          add(last);
          display.innerText += Math.E;
          break;
        default:
          display.innerText += e.target.innerText;
      }
    }
  });
});
