import  { useState } from "react";

const BudgetPlanner = () => {
  const [budget, setBudget] = useState(1000); // Default monthly budget
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ name: "", amount: "" });

  // Calculate total expenses and remaining budget
  const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remainingBudget = budget - totalSpent;
  const isOverBudget = remainingBudget < 0;

  const handleAddExpense = () => {
    if (newExpense.name && newExpense.amount > 0) {
      setExpenses([...expenses, { ...newExpense, amount: parseFloat(newExpense.amount) }]);
      setNewExpense({ name: "", amount: "" });
    }
  };

  const handleRemoveExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "24px", backgroundColor: "white", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "12px", width: "90%", maxWidth: "500px", margin: "auto", textAlign: "center" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "16px" }}>Monthly Budget Planner</h2>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ marginRight: "8px" }}>Set Budget:</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(parseFloat(e.target.value))}
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc", width: "80px", textAlign: "center" }}
        />
      </div>

      <p style={{ color: isOverBudget ? "red" : "green", fontWeight: "bold" }}>
        Remaining Budget: ${remainingBudget.toFixed(2)}
      </p>

      <div style={{ marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Expense Name"
          value={newExpense.name}
          onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
          style={{ padding: "8px", marginRight: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
          style={{ padding: "8px", marginRight: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <button
          onClick={handleAddExpense}
          style={{ backgroundColor: "#4CAF50", color: "white", padding: "8px 16px", borderRadius: "4px", border: "none", cursor: "pointer" }}
        >
          Add Expense
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: "0" }}>
        {expenses.map((expense, index) => (
          <li key={index} style={{ padding: "8px", borderBottom: "1px solid #ccc" }}>
            {expense.name} - ${expense.amount}
            <button
              onClick={() => handleRemoveExpense(index)}
              style={{ marginLeft: "12px", backgroundColor: "#E53E3E", color: "white", padding: "4px 8px", borderRadius: "4px", border: "none", cursor: "pointer" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetPlanner;
