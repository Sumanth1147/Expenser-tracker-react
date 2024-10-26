import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const AllExpenses = props.items.filter((expense) => {
    return filteredYear === '1';
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
       {(filteredYear === '1') && (<ExpensesChart expenses={AllExpenses} />)}
     {!(filteredYear === '1') && (<ExpensesChart expenses={filteredExpenses} />) }

      {filteredYear === '1' && <ExpensesList items={AllExpenses} />}
     {!(filteredYear === '1') && (<ExpensesList items={filteredExpenses} />) }
    </Card>
  );
};

export default Expenses;
