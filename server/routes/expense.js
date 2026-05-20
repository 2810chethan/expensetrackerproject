const router = require("express").Router();
const Expense = require("../models/Expense");

// ADD EXPENSE
router.post("/add", async (req, res) => {

  try {

    const newExpense = new Expense({
      userId: req.body.userId,
      amount: req.body.amount,
      category: req.body.category,
      date: req.body.date,
      description: req.body.description
    });

    await newExpense.save();

    res.status(200).json("Expense Added Successfully");

  } catch (err) {
    res.status(500).json(err);
  }

});

// GET ALL EXPENSES
router.get("/:userId", async (req, res) => {

  try {

    const expenses = await Expense.find({
      userId: req.params.userId
    });

    res.status(200).json(expenses);

  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;