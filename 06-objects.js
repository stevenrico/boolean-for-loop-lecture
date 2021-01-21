const error = {
  code: 401,
  message: "Unauthorized"
}

for (const key in error) {
  console.log(`[${key}]: ${error[key]}`)
}
