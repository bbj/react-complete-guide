//we import to remind it is used, under the hood, but it is optional
import React from 'react';
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  //preparing data to be passed to ExpenseItem component
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      <h1>Let's get started!</h1>
      <Expenses items={expenses} />
    </div>
  );

  //here we understand why JSX needs to have a single parent tag! ...
  //   we cannot return several things! only one! 
  //   React.createElement('div'...is the wrapper element
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
}

export default App;                   //index.js: import App from './App';

/*
    - App is exported to be used in index.js
    - JSX = JavaScript XML, because HTML5 is some XML :)
    - 33. Building a First Custom Component
      - ExpenseItem: Custom components must start with capital letters
      - <div>: lowercase are reserved for HTML built-in elements
    - 37. Passing Data via "props"
      - we are passing the paramters to ExpenseItem component
*/