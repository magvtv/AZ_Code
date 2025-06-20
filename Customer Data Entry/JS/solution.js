const transactions = [
    "C1:10:100",
    "C2:20:75",
    "C3:30:150",
    "C1:35:50",
    "C3:40:200",
    "C2:45:25"
]

function findHighestSpenderInTimeWindow(transactionStrings, timeWindow) {
    const customerTotals = {}
    transactionStrings.forEach(transactionString => {
        const parts = transactionString.split(':')
        const customerId = parts[0]
        const timestamp = parseInt(parts[1])
        const amount = parseInt(parts[2])
        
        if(timestamp >= 0 && timestamp <= timeWindow) {
            if(!customerTotals[customerId]) {
                customerTotals[customerId] = 0
            }
            customerTotals[customerId] += amount
        }
    })
    
    let highestSpender = null
    let highestAmount = 0
    
    for (const customerId in customerTotals) {
        if(customerTotals[customerId] > highestAmount) {
            highestAmount = customerTotals[customerId]
            highestSpender = customerId
        }
    }
    
    return {
        customerId: highestSpender,
        totalSpent: highestAmount,
        breakdown: customerTotals
    }
}

console.log('Transactions:', transactions)
const results = findHighestSpenderInTimeWindow(transactions, 45)
console.log(results)