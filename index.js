window.onload = function () {
    console.log("test");
    
}

function GetRandomNumber (lowerRange,upperRange){
    var randomNumber = Math.floor(Math.random() * (parseInt(upperRange) - parseInt(lowerRange) + 1) + parseInt(lowerRange));
    
    return randomNumber;
}

function ButtonPress (){
    var randomNumberText = document.getElementById("random-number-text");

    var lowerRangeElement = document.getElementById("lower-range");
    var upperRangeElement = document.getElementById("upper-range");
    
    var lowerRangeValue = lowerRangeElement.value;
    var upperRangeValue = upperRangeElement.value;
    



    var randomNumber = GetRandomNumber(lowerRangeValue,upperRangeValue);
    randomNumberText.textContent = randomNumber;
}
