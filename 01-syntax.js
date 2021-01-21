// Code without a for loop

console.log("*** START ***")

console.log("REPETITIVE TASK")
console.log("REPETITIVE TASK")
console.log("REPETITIVE TASK")

console.log("*** END ***")

// Code with a for loop

console.log("*** START ***")

for (let i = 0; i < 3; i++) {
  console.log("REPETITIVE TASK")
}

console.log("*** END ***")

// Breakdown of the above code as a for loop

console.log("*** START ***")

// Initialization

let i = 0

// First iteration
// i => 0

// Check the condition
// Evaluates to true so executes statement

if (i < 3) {
  console.log("REPETITIVE TASK")
}

// Execute the final-expression

i++

// Second iteration
// i => 1

// Check the condition
// Evaluates to true so executes statement

if (i < 3) {
  console.log("REPETITIVE TASK")
}

// Execute the final-expression

i++

// Third iteration
// i => 2

// Check the condition
// Evaluates to true so executes statement

if (i < 3) {
  console.log("REPETITIVE TASK")
}

// Execute the final-expression

i++

// Fourth iteration
// i => 3

// Check the condition
// Evaluates to false so does not execute the statement

if (i < 3) {
  console.log("REPETITIVE TASK")
}

// For loop ends

console.log("*** END ***")
