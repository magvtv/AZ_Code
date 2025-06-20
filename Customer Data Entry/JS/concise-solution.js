const transaction = [
    "C1:10:100",
    "C2:20:75",
    "C3:30:150",
    "C1:35:50",
    "C3:40:200",
    "C2:45:25"
]

function findHighestSpender(transactionStrings, timeWindow) {
    const customerTotals = transactionStrings
        .map(str => {
            const [customerId, timestamp, amount] = str.split(':');
            return {
                customerId, 
                timestamp: parseInt(timestamp), 
                amount: parseInt(amount)
            };
        })
        .filter(transaction => 
            transaction.timestamp >= 0 && transaction.timestamp <= timeWindow
        )
        .reduce((totals, {customerId, amount}) => {
            totals[customerId] = (totals[customerId] || 0) + amount;
            return totals;
        }, {});

    const entries = Object.entries(customerTotals);
    if (entries.length === 0) return { customerId: null, totalSpent: 0}

    const [highestAmount, highestSpender] = entries.reduce(
        ([maxId, maxAmount], [id, amount]) => 
            amount > maxAmount ? [id, amount] : [maxId, maxAmount]
    );

    return {
        customerId: highestSpender,
        totalSpent: highestAmount
    }
}

console.log(findHighestSpender(transaction, 50))