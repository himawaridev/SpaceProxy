let count = 1057;
let count1 = 156700;
let count2 = 100342;
let increment = 100;
let increment1 = 10;
let increment2 = 1;


function counter() {
    count += increment;
    count1 += increment1;
    count2 += increment2;
    document.querySelector('.count').innerHTML = count;
    document.querySelector('.count-1').innerHTML = count1;
    document.querySelector('.count-2').innerHTML = count2;

    if (count === 2382910) {
        increment = -1;
    } else if (count === 0) {
        increment = 1;
    }
    if (count1 === 1093728) {
        increment1 = -1;
    } else if (count1 === 0) {
        increment1 = 1;
    }
    if (count2 === 1598232) {
        increment2 = -1;
    } else if (count2 === 0) {
        increment2 = 1;
    }
}

setInterval(counter, 0.000000001);

//////////////////////////
//////////////////////////
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const decreaseYearBtn = document.getElementById("decreaseYear");
const increaseYearBtn = document.getElementById("increaseYear");
const numberInput = document.getElementById("number");
const number1Input = document.getElementById("days");
const daysInput = document.getElementById("days");
const calculateBtn = document.getElementById("calculate");
const resultText = document.getElementById("result");

decreaseBtn.addEventListener("click", () => {
    let number = parseInt(numberInput.value);
    if (number > 1) {
        numberInput.value = number - 1;
    }
});

increaseBtn.addEventListener("click", () => {
    let number = parseInt(numberInput.value);
    numberInput.value = number + 1;
});
///
decreaseYearBtn.addEventListener("click", () => {
    let years = parseInt(number1Input.value);
    if (years > 1) {
        number1Input.value = years - 1;
    }
});

increaseYearBtn.addEventListener("click", () => {
    let years = parseInt(number1Input.value);
    number1Input.value = years + 1;
});
///
calculateBtn.addEventListener("click", () => {
    let number = parseInt(numberInput.value);
    let days = parseInt(daysInput.value);
    let result = number * days;
    resultText.textContent = result + " $";
});
///////////////////////////////////////
///////////////////////////////////////
function setCountry(name, flagURL) {
    let countryName = document.getElementById("country-name");
    let countryFlag = document.getElementById("country-flag");

    countryName.innerHTML = name;
    countryFlag.src = flagURL;
}
function setCountry1(name1, flagURL1) {
    let countryName1 = document.getElementById("country-name-1");
    let countryFlag1 = document.getElementById("country-flag-1");

    countryName1.innerHTML = name1;
    countryFlag1.src = flagURL1;
}
function setCountry2(name2, flagURL2) {
    let countryName2 = document.getElementById("country-name-2");
    let countryFlag2 = document.getElementById("country-flag-2");

    countryName2.innerHTML = name2;
    countryFlag2.src = flagURL2;
}