window.onload = function () {
    console.log("test");

}

function GetRandomNumber(lowerRange, upperRange) {
    var randomNumber = Math.floor(Math.random() * (parseInt(upperRange) - parseInt(lowerRange) + 1) + parseInt(lowerRange));

    return randomNumber;
}

function ButtonPress() {
    var pElement = document.getElementById("random-number-text");
    var lowerRangeElement = document.getElementById("lower-range");
    var upperRangeElement = document.getElementById("upper-range");

    var lowerRangeValue = lowerRangeElement.value;
    var upperRangeValue = upperRangeElement.value;

    var randomNumber = GetRandomNumber(lowerRangeValue, upperRangeValue);

    ColorChange(pElement, randomNumber);

    pElement.textContent = randomNumber;
}

function ColorChange(htmlElement, number) {
    if (number > 100) {
        htmlElement.classList.add("high-number");
        htmlElement.classList.remove("low-number");
    } else {
        htmlElement.classList.remove("high-number");
        htmlElement.classList.add("low-number");
    }
}

function newFunc() {

    var test = document.getElementById("test");

    var number = 5;

    ColorChange(test, number);
}