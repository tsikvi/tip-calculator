const defaultResult = 0;
let currentTip = defaultResult;
let currentTotal = defaultResult;
let percentage = 0;


//იუზერის ჩაწერილ რიცხვი გადაყავს float-ში, 
// რადგან დეფოლტად სტრინგად აღიქმება
function getUserNumberInputFloat() {
    if (userInput.value < 10000) {
        return parseFloat(userInput.value).toFixed(2);
    }
    else {
        return 0;
    }

}

//იუზერის ჩაწერილ რიცხვი გადაყავს int-ში, 
// რადგან დეფოლტად სტრინგად აღიქმება
function getUserNumberInputInt() {
    return parseInt(numberOfPeople.value);
}
//ვალიდაცია და errorMsg ადამიანების რიცხვი 0 რომ არ იყოს
function validateInput(event) {
    event.preventDefault(); // prevent form submission 
    // ეს არ ვიცი რას ნიშნავს

    // var input = document.getElementById("myInput");


    if (numberOfPeople.value <= 0) {
        errorMsg.innerHTML = "Can't be zero";
        document.getElementById("input-person").style.border = "2px solid #E17457";

    } else {
        errorMsg.innerHTML = "";
        // continue with form submission or other actions
        document.getElementById("input-person").style.border = "2px solid #26C2AE";

    }
}

function getUserPercentageInputInt() {
    return parseInt(percentageCustom.value);
}

function calc5Percent() {
    const enteredNumber = getUserNumberInputFloat();
    const enteredPerson = getUserNumberInputInt();

    if (enteredNumber > 0 && enteredPerson > 0) {
        currentTip = (enteredNumber * 5 / 100) / enteredPerson;
        currentTip = parseFloat(currentTip).toFixed(2);

        currentTotal = (enteredNumber * 105 / 100) / enteredPerson;
        currentTotal = parseFloat(currentTotal).toFixed(2);
        outputResult(currentTip, currentTotal);

        percentage = 5;
    }
    else {
        outputResult(0, 0);
    }

}

function calc10Percent() {
    const enteredNumber = getUserNumberInputFloat();
    const enteredPerson = getUserNumberInputInt();

    if (enteredNumber > 0 && enteredPerson > 0) {

        currentTip = (enteredNumber * 10 / 100) / enteredPerson;
        currentTip = parseFloat(currentTip).toFixed(2);

        currentTotal = (enteredNumber * 110 / 100) / enteredPerson;
        currentTotal = parseFloat(currentTotal).toFixed(2);
        outputResult(currentTip, currentTotal);

        percentage = 10;
    }
    else {
        outputResult(0, 0);
    }
}

function calc15Percent() {
    const enteredNumber = getUserNumberInputFloat();
    const enteredPerson = getUserNumberInputInt();

    if (enteredNumber > 0 && enteredPerson > 0) {
        currentTip = (enteredNumber * 15 / 100) / enteredPerson;
        currentTip = parseFloat(currentTip).toFixed(2);

        currentTotal = (enteredNumber * 115 / 100) / enteredPerson;
        currentTotal = parseFloat(currentTotal).toFixed(2);
        outputResult(currentTip, currentTotal);

        percentage = 15;
    }
    else {
        outputResult(0, 0);
    }
}

function calc25Percent() {
    const enteredNumber = getUserNumberInputFloat();
    const enteredPerson = getUserNumberInputInt();

    if (enteredNumber > 0 && enteredPerson > 0) {
        currentTip = (enteredNumber * 25 / 100) / enteredPerson;
        currentTip = parseFloat(currentTip).toFixed(2);

        currentTotal = (enteredNumber * 125 / 100) / enteredPerson;
        currentTotal = parseFloat(currentTotal).toFixed(2);
        outputResult(currentTip, currentTotal);

        percentage = 25;
    }
    else {
        outputResult(0, 0);
    }
}

function calc50Percent() {
    const enteredNumber = getUserNumberInputFloat();
    const enteredPerson = getUserNumberInputInt();

    if (enteredNumber > 0 && enteredPerson > 0) {
        currentTip = (enteredNumber * 50 / 100) / enteredPerson;
        currentTip = parseFloat(currentTip).toFixed(2);

        currentTotal = (enteredNumber * 150 / 100) / enteredPerson;
        currentTotal = parseFloat(currentTotal).toFixed(2);
        outputResult(currentTip, currentTotal);

        percentage = 50;
    }
    else {
        outputResult(0, 0);
    }
}

function calcCustom() {
    const enteredNumber = getUserNumberInputFloat();
    const enteredPerson = getUserNumberInputInt();
    const userPercentage = getUserPercentageInputInt();

    if (enteredNumber > 0 && enteredPerson > 0 && userPercentage) {
        currentTip = (enteredNumber * userPercentage / 100) / enteredPerson;
        currentTip = parseFloat(currentTip).toFixed(2);

        currentTotal = (enteredNumber * (100 + userPercentage) / 100) / enteredPerson;
        currentTotal = parseFloat(currentTotal).toFixed(2);
        outputResult(currentTip, currentTotal);

        percentage = userPercentage;
    }
    else {
        outputResult(0, 0);
    }
}

function calcByPeople() {
    const enteredNumber = getUserNumberInputFloat();
    const enteredPerson = getUserNumberInputInt();
    const userPercentage = percentage;

    if (enteredNumber > 0 && enteredPerson > 0 && userPercentage) {
        console.log(userPercentage);

        currentTip = (enteredNumber * userPercentage / 100) / enteredPerson;
        currentTip = parseFloat(currentTip).toFixed(2);

        currentTotal = (enteredNumber * (100 + userPercentage) / 100) / enteredPerson;
        currentTotal = parseFloat(currentTotal).toFixed(2);
        outputResult(currentTip, currentTotal);
    }
    else {
        outputResult(0, 0);
    }
}

function resetAll() {
    percentageButtons.forEach((button) => {
        button.classList.remove('active');
    });

    enteredPerson = 1;
    outputResult(0, 0);

}

percentage5.addEventListener('click', calc5Percent);
percentage10.addEventListener('click', calc10Percent);
percentage15.addEventListener('click', calc15Percent);
percentage25.addEventListener('click', calc25Percent);
percentage50.addEventListener('click', calc50Percent);
percentageCustom.addEventListener('input', calcCustom);

numberOfPeople.addEventListener('input', calcByPeople);

resetButton.addEventListener("click", resetAll); 
