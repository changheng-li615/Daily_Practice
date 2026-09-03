function createBudget(initialBudget) {
    let remaining = initialBudget;
    return {
        spend(amount) {
            if (amount <= remaining) {
                remaining -= amount;
            }
            else {
                console.log("Not enough budget remaining.");
            }
        },
        getRemaining() {
            return remaining;
        }
    };
}

function createExpenseTracker() {
    let expenses = [];
    return {
        add(description, amount, category) {
            if (amount < 0) {
                throw new Error("Invalid expense amount. Amount must be a positive number.");
            }
            expenses.push({ description, amount, category });
        },
        getAll(){
            return expenses;
        },
        getTotal()  {
            return expenses.reduce((total, expense) => total + expense.amount, 0);
        } 

    };
}

export { createBudget, createExpenseTracker };