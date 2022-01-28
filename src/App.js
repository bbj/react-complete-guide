import ExpenseItem from "./components/ExpenseItem";     //NEVER add the .js

function App() {

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
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
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