//==============Problem 01 Solution======================
function calculateDifference(firstArg, secondArg) {
    return firstArg - secondArg;
}

//==============Problem 02 Solution======================
function isOdd(num){
    if(num % 2 === 0){
        return true;
    } else{
        return false;
    }
}

//==============Problem 03 Solution======================
function findMin(numbers) {
    return Math.min(...numbers);
}

//==============Problem 04 Solution======================
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

//==============Problem 05 Solution======================
function sortArrayDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
}

//==============Problem 06 Solution======================
function lowercaseFirstLetter(str) {
    if (!str){
        return str;
    } else{
        return str.charAt(0).toLowerCase() + str.slice(1);
    }
}

//==============Problem 07 Solution======================
function countVowels(str) {
    const vowels = 'aeiouAEIOU'; 
    let count = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++; 
        }
    }
    return count;
}

//==============Problem 08 Solution======================
function findAverage(arr) {
    if (arr.length === 0) return 0; 
    let sum = 0;
    
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}







