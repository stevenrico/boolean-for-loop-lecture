### The For Loop

A for loop is used to manage repetitive tasks. It's the computers ability to handle repetitive tasks that gives it tremendous value, teams of people can be replaced by one computer saving a business time and money.

## Syntax

A for loop is broken down into four parts:

```
for ([initialization]; [condition]; [final-expression]) {
  [block-statement]
}

```

### Initialization

An expression to be evaluated once before the loop begins. Typically used to initialize a counter variable.

### Condition

An expression to be evaluted before each loop iteration. If this expression evaluates to true, the statement is executed.

### Final-expression

An expression to be evaluated at the end of each loop iteration. Generally used to update or increment the counter variable.

### Block-statement

A group of statements that is executed as long as the condition evaluates to true.

## Clean Code

A for loop also helps us to write clean code. Imagine having to write the same piece of code 100 times... it would involve a lot of copy and pasting! With a for loop we can transform 100 lines of code into 3 lines.

## Arrays

In the real world you will mostly be using for loops with arrays, in fact arrays come with a variety of methods ie. map, filter, sort etc... that are built on top of loops.

The code below modifies the array by multiplying each element by 10.

```
const array = [0, 1, 2, 3, 4, 5]

for (let i = 0; i < array.length; i++) {
  array[i] * 10
}

return array

# => [0, 10, 20, 30, 40, 50]

```

### Initialization

Arrays start at an index of 0 so we initialize the counter at 0 with `let i = 0`.

### Condition

Array.length evaluates to the number of elements in an array, in this case we have 6. As long as `i < 6` the condition expression will evaluate to true and the block-statement will be executed.

### Final-expression

`i++` increments the counter by 1 after every iteration so we can go through each element of the array one by one.

### Block-statement

The statement `array[i] * 10` is executed on every iteration until the end of the for loop.

## Performance (Advanced)

For loops have an effect on the performance of your code however with the kind of projects you are going to be working on in this course you shouldn't be too concerned.

## Objects

You can use for loops with objects however arrays are often more practical for storing data so you might only find yourself using this in special circumstances.

Instead of a for loop we use a for...in loop.

```
const error = {
  code: 401,
  message: "Unauthorized"
}

for (const key in error) {
  console.log(`[${key}]: ${error[key]}`)
}

# => "[code]: 401"
# => "[message]: Unauthorized"
```
