import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';     //importing CSS in JS does not work, but ok in React

const ExpenseItem = (props) => {        //same name as file name, a component is just a function!
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

/*
    - JSX RULE 1: only 1 root element is returned!
    - JSX: we do not use class, but className, as class is reserved for javascript code, not JSX
    - JSX: e.g. 
        <div>{1+1}</div> will be rendered as <div>2</div>
        <div>${expenseAmount}</div> ....... <div>$294.67</div>
        {expenseDate}...................... ERROR! as not a string (Uncaught Error: Objects are not valid as a React child)
        {expenseDate.toISOString()}         '2022-01-27T20:30:35.082Z'
    - 37. Passing Data via "props"
        - we are passing the paramters to ExpenseItem component, in which we receive ONLY 1 PARAMETER
        - usually named: "props", is an object which contains the list of params as properties
        - e.g. <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        - props properties are the params: title, amount & date
*/