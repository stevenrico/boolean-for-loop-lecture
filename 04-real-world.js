const items = [
  {
    "name": "MacBook Air",
    "type": "laptop",
    "price": 1300,
    "stock": 15
  },
  {
    "name": "MacBook Pro",
    "type": "laptop",
    "price": 2000,
    "stock": 0
  },
  {
    "name": "iMac",
    "type": "desktop",
    "price": 1600,
    "stock": 10
  }
]

// Out of Stock

const outOfStockItems = []

let outOfStockAlert = false

for (let i = 0; i < items.length; i++) {
  if (items[i].stock === 0) {
    outOfStockAlert = true
    
    outOfStockItems.push(items[i])
  }
}

if (outOfStockAlert) {
  console.log("Out of stock items:")
  console.log(outOfStockItems)
} else {
  console.log('All items are stocked!')
}