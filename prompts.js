//Write a for loop that counts from 10 to 20, that prints each number to the console.
for(let i = 10; i <= 20; ++i){
    console.log(i);
}

// Write a for loop that counts down from 40 to 0 that prints each number to the console.
for(let i = 40; i >= 0; --i){
    console.log(i);
}

//Write a for loop that counts from 0 to 20 in increments of 2 that prints each number to the console.
for(let i = 0; i <= 20; i + 2){
    console.log(i);
}

//Write a for loop that counts from -15 to 15 that prints each number to the console.
for(let i = -15; i <= 15; ++i){
    console.log(i);
}

//Create a variable called answer and define it outside of your loop. Create a loop that counts from 20 to 30, incrementing by 2. Add i to answer. After your loop, print the value of answer to the console.
let answer = 0;
for(let i = 20; i <= 30; i + 2){
    answer = answer + i;
}
console.log(answer);

/**This will require you to create a loop that counts from 0 to 30. Place a conditional statement inside of your loop with the following:
If the value of a is even, print out "a is an even number".
If the value of a is odd, print out "a is an odd number". */
for(let i = 0; i <= 30; ++i){
    if (i % 2 == 0){
        console.log(`${i} is an even number.`)
    }

    else{
        console.log(`${i} is an odd number.`)
    }
}

//Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result.
for(let i = 0; i <= 10; ++i){
    console.log(i*9);
}

//Write a do...while loop that increments i by 2 as long as i is less than 20.
let i = 0;
do{
 i= i + 2;
}
while(i < 20);

//while loop that counts from 5 to 20 and prints each number to the console.
let i = 5;
while (i <= 20){
    console.log(i);
    ++i;
}

//Write a while loop to count from 20 to 0. Log each number to the console.
let i = 20;
while (i >= 0){
    console.log(i);
    --i;
}

// Write a while loop that uses the prompt function that will continue to ask the user for the magic number until they enter the number 8.
let input = "";
while (input !== "8"){
    input = prompt("What is the magic number?")
}

//Write a do while loop that iterates at least once and reiterates until i is no longer less than 5.
let i = 0;
do{
    console.log("Hello world")
    ++i;
}
while(i < 5);