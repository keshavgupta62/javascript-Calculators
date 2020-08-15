const screen = document.querySelector("#input");
buttons = document.querySelectorAll("button");
let screenValue = "";
var str = "";
for (item of buttons) {
    item.addEventListener('click', function(e) {
        buttonText = e.target.innerText;
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'E') {
            str = screen.value;
            screenValue = str.substring(0, str.length-1);
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}