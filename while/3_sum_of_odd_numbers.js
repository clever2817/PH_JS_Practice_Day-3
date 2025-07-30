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