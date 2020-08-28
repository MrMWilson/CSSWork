window.onload = function () {
    console.log("test");
    
}

function GetRandomNumber (lowerRange,upperRange){
    var randomNumber = Math.floor(Math.random() * upperRange) + lowerRange;
    return randomNumber;
}

function ButtonPress (){
    var randomNumberText = document.getElementById("random-number-text");
    var randomNumber = GetRandomNumber(1,10);
    randomNumberText.textContent = randomNumber;
}
