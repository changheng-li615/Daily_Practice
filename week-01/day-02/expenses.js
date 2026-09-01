const expenses = [
    { description: "Lunch", amount: 15.5, category: "Food" },
    { description: "Coffee", amount: 5.2, category: "Food" },
    { description: "Bus", amount: 4.8, category: "Transport" },
    { description: "Monitor", amount: 250, category: "Equipment" },
    { description: "Dinner", amount: 32, category: "Food" },
    { description: "Keyboard", amount: 89, category: "Equipment" }
];

function getDescription(expenses) {
    return expenses.map(expense => expense.description);
}

function getFoodExpenses(expenses) {
    return expenses.filter(expense => expense.category === "Food");
}

function getExpensiveExpenses(expenses, threshold) {
    return expenses.filter(expense => expense.amount > threshold);
}

function calculateExpensesTotal(expenses) {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

function addExpense(expenses, description, amount, category) {
    const newExpense = { description, amount, category };
    expenses.push(newExpense);
}

function updateExpense(expenses, description, newAmount) {
    const expense = expenses.find(expense => expense.description === description);  
    if (expense) {
        expense.amount = newAmount;
    }
}

function printExpenseSummary(expenses, description) {
    return console.log(expenses.filter(expense => expense.description === description));
}

function getFoodExpenseTotal(expenses) {
    const foodExpenses = getFoodExpenses(expenses);
    return calculateExpensesTotal(foodExpenses);
}

addExpense(expenses, "Laptop", 1200, "Equipment");  
updateExpense(expenses, "Lunch", 20);
console.log(getDescription(expenses));
console.log(getFoodExpenses(expenses));
console.log(getExpensiveExpenses(expenses, 50));
console.log(calculateExpensesTotal(expenses));
console.log(getFoodExpenseTotal(expenses));
printExpenseSummary(expenses, "Dinner");
console.log(calculateExpensesTotal([]));