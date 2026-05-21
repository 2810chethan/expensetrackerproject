import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Tooltip } from "recharts";

const API_URL = "https://expensetrackerproject-3.onrender.com";

function Dashboard() {
  const userName = localStorage.getItem("userName") || "User";
  const currentUserId = localStorage.getItem("userId") || "testuser1";

  const [expense, setExpense] = useState({
    userId: currentUserId,
    amount: "",
    category: "",
    date: "",
    description: ""
  });

  const [expenses, setExpenses] = useState([]);

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value
    });
  };

  const addExpense = async () => {
    try {
      await axios.post(`${API_URL}/api/expenses/add`, {
        ...expense,
        userId: currentUserId,
        amount: Number(expense.amount)
      });

      alert("Expense Added");
      fetchExpenses();
    } catch (err) {
      alert("Expense Add Failed");
      console.log(err);
    }
  };

  const fetchExpenses = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/api/expenses/${currentUserId}`
      );

      setExpenses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    window.location.href = "/";
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const total = expenses.reduce((sum, item) => sum + Number(item.amount), 0);

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <button onClick={logout}>Logout</button>

      <h1>Welcome, {userName}!</h1>
      <h3>Expense Tracker Dashboard</h3>

      <h2>Total Expense: ₹{total}</h2>

      {total > 5000 && (
        <h3 style={{ color: "red" }}>Budget Limit Exceeded</h3>
      )}

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="category"
        placeholder="Category"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="date"
        name="date"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={addExpense}>Add Expense</button>

      <hr />

      <h2>Expense Chart</h2>

      <PieChart width={400} height={300}>
        <Pie
          data={expenses}
          dataKey="amount"
          nameKey="category"
          outerRadius={100}
          label
        />
        <Tooltip />
      </PieChart>

      <hr />

      <h2>All Expenses</h2>

      {expenses.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <h3>{item.category}</h3>
          <p>Amount: ₹{item.amount}</p>
          <p>Date: {item.date}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;