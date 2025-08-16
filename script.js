let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];

let evenNumbersGreaterThan20 = [];

let count = 0;


for (let number of numbers) {
    
    
    if (number % 2 === 0 && number > 20) {
        evenNumbersGreaterThan20.push(number);
        count++;
    }
}


console.log(`Found ${count} numbers: [${evenNumbersGreaterThan20.join(', ')}]`);