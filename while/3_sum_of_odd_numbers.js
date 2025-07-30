// Subtask-1

// Display sum of all the odd numbers from 81 to 131

let sum = 0;

let num = 81;

while(num <= 131)
{
    if(num % 2 !== 0)
    {
        sum += num;
    }

    num++;
}

console.log("Sum of odd numbers from 81 to 131 is: ", sum);


// Subtask-2

// Display sum of all the even numbers from 206 to 311

let totalSum = 0;

let number = 206;

while(number <= 311)
{
    if(number % 2 === 0)
    {
        totalSum += number;
    }

    number++;
}

console.log("Sum of even numbers from 206 to 311 is: ", totalSum);