console.time("FOR LOOP")

for (let i = 0; i < 1000; i++) {}

console.timeEnd("FOR LOOP")

console.time("NESTED LOOP")

for (let i = 0; i < 1000; i++) {
  for (let i = 0; i < 1000; i++) {}
}

console.timeEnd("NESTED LOOP")
