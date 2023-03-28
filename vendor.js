const userInput = document.getElementById('input-number');

const percentage5 = document.getElementById('perc-5');
const percentage10 = document.getElementById('perc-10');
const percentage15 = document.getElementById('perc-15');
const percentage25 = document.getElementById('perc-25');
const percentage50 = document.getElementById('perc-50');
const percentageCustom = document.getElementById('perc-custom');

const numberOfPeople = document.getElementById('input-person');

var errorMsg = document.getElementById("errorMsg");

const currentResultTip = document.getElementById('tip-result');
const currentResultTotal = document.getElementById('total-result');


const percentageButtons = document.querySelectorAll('.percentage-button');


const resetButton = document.getElementById("reset");

function outputResult(resultTip, resultTotal) {
    currentResultTip.textContent = `$${resultTip}`;
    currentResultTotal.textContent = `$${resultTotal}`;
}