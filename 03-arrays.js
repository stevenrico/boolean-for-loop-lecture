const main = () => {
  console.log("*** START ***")
  
  const numbers = [1, 2, 3, 4]
  
  const evenNumbers = []
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i])
    }
  }
  
  console.log(evenNumbers)

  console.log("*** END ***")
}

// Breakdown of the above code as a for loop

const breakdown = () => {
  console.log("*** START ***")
  
  const numbers = [1, 2, 3, 4]
  
  const evenNumbers = []
  
  // Initialization
  
  let i = 0
  
  // First iteration
  // i => 0
  
  // Check the condition
  // numbers.length => 4
  // Evaluates to true so executes statement
  
  if (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i])
    }
  }

  // To help visualize the step above:
  //
  // const numbers = [1, 2, 3, 4]
  //
  // if(0 < 4) {
  //   if (numbers[0] % 2 === 0) {
  //     evenNumbers.push(numbers[0])
  //   }
  // }
  
  // Execute the final-expression
  
  i++
  
  // Second iteration
  // i => 1
  
  // Check the condition
  // numbers.length => 4
  // Evaluates to true so executes statement
  
  if (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i])
    }
  }

  // To help visualize the step above:
  //
  // const numbers = [1, 2, 3, 4]
  // 
  // if (1 < 4) {
  //   if (numbers[1] % 2 === 0) {
  //     evenNumbers.push(numbers[1])
  //   }
  // }
  
  // Execute the final-expression
  
  i++
  
  // Third iteration
  // i => 2
  
  // Check the condition
  // numbers.length => 4
  // Evaluates to true so executes statement
  
  if (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i])
    }
  }
  
  // Execute the final-expression
  
  i++
  
  // Fourth iteration
  // i => 3
  
  // Check the condition
  // numbers.length => 4
  // Evaluates to true so executes statement
  
  if (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i])
    }
  }
  
  // Execute the final-expression
  
  i++
  
  // Fifth iteration
  // i => 4
  
  // Check the condition
  // numbers.length => 4
  // Evaluates to false so does not execute the statement
  
  if (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i])
    }
  }
  
  // For loop ends

  console.log(evenNumbers)
  
  console.log("*** END ***")

}

main()
breakdown()