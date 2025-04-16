// import { useState } from "react";
// import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// const ExpenseBreakdown = () => {
//   const [expenses, setExpenses] = useState([
//     { category: "Food", amount: 200 },
//     { category: "Rent", amount: 800 },
//     { category: "Entertainment", amount: 150 },
//   ]);

//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

//   const handleAddExpense = () => {
//     const newCategory = prompt("Enter category:");
//     const newAmount = parseFloat(prompt("Enter amount:"));
//     if (newCategory && !isNaN(newAmount)) {
//       setExpenses([...expenses, { category: newCategory, amount: newAmount }]);
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//         width: "100vw",
//         backgroundColor: "#f9f9f9",
//       }}
//     >
//       <div
//         style={{
//           padding: "24px",
//           backgroundColor: "white",
//           boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//           borderRadius: "12px",
//           width: "90%",
//           maxWidth: "600px",
//           textAlign: "center",
//         }}
//       >
//         <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "16px" }}>
//           Expense Breakdown
//         </h2>
//         <PieChart width={350} height={350} >
//           <Pie
//             data={expenses}
//             dataKey="amount"
//             nameKey="category"
//             cx="50%"
//             cy="50%"
//             outerRadius={120}
//             fill="#8884d8"
//             label
//           >
//             {expenses.map((_, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//         <button
//           onClick={handleAddExpense}
//           style={{
//             backgroundColor: "#4CAF50",
//             color: "white",
//             padding: "12px 20px",
//             borderRadius: "8px",
//             border: "none",
//             cursor: "pointer",
//             marginTop: "16px",
//             fontSize: "16px",
//           }}
//         >
//           Add Expense
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ExpenseBreakdown;



















import { useState } from "react";

const ExpenseBreakdown = () => {
  const categories = ["Food", "Bills", "Entertainment", "Transportation", "Other"];

  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ amount: "", category: "Food" });

  const handleAddExpense = () => {
    if (newExpense.amount && !isNaN(newExpense.amount)) {
      setExpenses([...expenses, { ...newExpense, amount: parseFloat(newExpense.amount) }]);
      setNewExpense({ amount: "", category: "Food" });
    }
  };

  const categoryTotals = categories.reduce((totals, category) => {
    totals[category] = expenses.filter(expense => expense.category === category).reduce((sum, expense) => sum + expense.amount, 0);
    return totals;
  }, {});

  return (
    <div style={{ padding: "24px", backgroundColor: "white", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "12px", width: "90%", maxWidth: "500px", margin: "auto", textAlign: "center" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "16px" }}>Expense Categorizer</h2>

      <div style={{ marginBottom: "16px" }}>
        <input
          type="number"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
          style={{ padding: "8px", marginRight: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <select
          value={newExpense.category}
          onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
          style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddExpense}
          style={{ backgroundColor: "#4CAF50", color: "white", padding: "8px 16px", borderRadius: "4px", border: "none", cursor: "pointer" }}
        >
          Add Expense
        </button>
      </div>

      <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>Expense Breakdown</h3>

      <ul style={{ listStyle: "none", padding: "0" }}>
        {categories.map((category) => (
          <li key={category} style={{ padding: "8px", borderBottom: "1px solid #ccc" }}>
            {category}: ${categoryTotals[category].toFixed(2)}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "16px" }}>
        <h4 style={{ fontSize: "18px", fontWeight: "600" }}>Total Expenses: ${expenses.reduce((sum, expense) => sum + expense.amount, 0).toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default ExpenseBreakdown;
