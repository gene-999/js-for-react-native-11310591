function processArray(numbersArray){
   let newNumbersArray = [];
    numbersArray.forEach(number => {
        if (number % 2 === 0) {
            newNumbersArray.push(processEvenNumber(number));
        } else {
           newNumbersArray.push(processOddNumber(number));
        }
    });
    return newNumbersArray;
}

function processEvenNumber(number){
   number = number ** 2;
    return number;
}

function processOddNumber(number){
    number = number * 3;
    return number;
}

export function formatArrayStrings(numbersArray, strArr){
    let newStrArr = [];
    for (let i = 0; i < strArr.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            newStrArr[i] = strArr[i].toUpperCase();
        } else {
            newStrArr[i] = strArr[i].toLowerCase();
        }
    }
    return newStrArr;
}

// Test cases
let numbersArray = [9, 14, 81, 4];

let modifiedNumArr = processArray(numbersArray);
//Expected Output
// [27, 196, 64, 16]

let strArr = ["Jarred", "Anthony", "Gustav", "Charles"];
formatArrayStrings(modifiedNumArr, strArr);
//Expected Output
// ["jarred", "ANTHONY", "gustav", "CHARLES"]

