const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  userId: String,
  amount: Number,
  category: String,
  date: String,
 description: String
});

module.exports = mongoose.model("Expense", ExpenseSchema);