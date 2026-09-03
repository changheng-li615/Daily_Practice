import { createExpenseTracker } from "./expenseTracker.js";
import { createBudget } from "./expenseTracker.js"; 


const budget = createBudget(500);

console.log(budget.getRemaining());
// 500

budget.spend(100);

console.log(budget.getRemaining());
// 400

budget.spend(50);

console.log(budget.getRemaining());
// 350

const tracker = createExpenseTracker();

try{
    tracker.add("Lunch", -20, "Food");
} catch (error) {
    console.log(error.message);
}
 
tracker.add("Lunch", 20, "Food");
tracker.add("Bus", -5, "Transport");
tracker.add("Monitor", 250, "Equipment");

console.log(tracker.getAll());
console.log(tracker.getTotal());
