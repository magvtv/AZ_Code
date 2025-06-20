# Customer Data Entry

## Problem Statement

Given a list of customer transactions in the format `CustomerID:Timestamp:Amount`, determine which customer spent the most within a specified time window (from timestamp 0 up to a given value). Each transaction string contains the customer ID, the time of the transaction, and the amount spent.

## Example

Given the transactions:

```
C1:10:100
C2:20:75
C3:30:150
C1:35:50
C3:40:200
C2:45:25
```

And a time window of 40, the goal is to find the customer who spent the most from timestamp 0 to 40 (inclusive).

## Solution Approach

- Parse each transaction to extract the customer ID, timestamp, and amount.
- Sum the amounts for each customer, considering only transactions within the time window.
- Identify the customer with the highest total spent in that window.

## Solution

The provided `solution.js` implements this logic in JavaScript. It outputs the customer with the highest spending, their total, and a breakdown for all customers within the time window.

## Application

This solution can be very helpful for data entry specialists and businesses that need to quickly analyze transaction data. In real-world scenarios, such a tool can:

- Help identify top customers within specific time periods for targeted marketing or rewards.
- Assist in auditing and verifying customer spending patterns.
- Enable quick reporting and insights for sales or finance teams.
- Support data entry specialists in validating and summarizing large sets of transaction records efficiently.

By automating the process of finding high-value customers in a given timeframe, this approach saves time, reduces manual errors, and provides actionable business insights.

---

Feel free to try different time windows or transaction lists to practice and explore further!
