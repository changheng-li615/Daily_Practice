function greetUser(name) {
    return "Hello, " + name + "!";
}

function calculateTotal(price, quantity){
    return price * quantity;
} 

function isadult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

function getLargerNumber(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    } else {
        return "Equal"; // If both numbers are equal
    }
}

function createExpense(description, amount, category) {
    const expense = {
        description: description,
        amount: amount,
        category: category
    };
    return expense;
}



greetUser("changheng")
let total = calculateTotal(10, 5);
console.log(total);
createExpense("Lunch", 15.5, "Food")