window.onload = function () {
    console.log("test");

}

function GetRandomNumber(lowerRange, upperRange) {
    var randomNumber = Math.floor(Math.random() * (parseInt(upperRange) - parseInt(lowerRange) + 1) + parseInt(lowerRange));

    return randomNumber;
}

function ButtonPress() {
    var randomNumberText = document.getElementById("random-number-text");

    var lowerRangeElement = document.getElementById("lower-range");
    var upperRangeElement = document.getElementById("upper-range");

    var lowerRangeValue = lowerRangeElement.value;
    var upperRangeValue = upperRangeElement.value;

    var randomNumber = GetRandomNumber(lowerRangeValue, upperRangeValue);

    //call a function that changes the color of the randomNumberText 
    //step 1 : create a new function to call (needs a paramater)
    //step 2: create if - else logic and change the colour depending on the value passed in

    randomNumberText.textContent = randomNumber;
}