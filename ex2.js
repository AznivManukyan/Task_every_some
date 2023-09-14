function areAllPositiveNumbers(strings) {
    return strings.every(function(str) {
        
        const number = parseFloat(str);

        return !isNaN(number) && number >= 0;
    });
}

const stringArray = ["5", "6.5", "9.5", "7.5"];
console.log(areAllPositiveNumbers(stringArray)); 