import './App.css';

const todoList = [
  {
    id: 1,
    description: "Get out of bed",
    date: "Wed Sep 13 2021",
  },
  {
    id: 2,
    description: "Brush teeth",
    date: 'Thu Sep 14 2021',
  },
  {
    id: 3,
    description: "Eat breakfast",
    date: "Fri Sep 15 2021",
  }
];

function TodoTableRow(props) {
  return <li>
    <p>{props.text}, {props.date}</p>
  </li>;
}

function TodoTable() {
  return <div  style={{ width: "300px", paddingLeft: "20px", paddingRight: "20px" }}>
    <h1>ToDo List:</h1>
    <ul>
      {todoList.map(TodoItem => <TodoTableRow text={TodoItem.description} date={TodoItem.date} />)}
    </ul>
  </div>;
}

function App() {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <TodoTable />
    </div>
  );
}

export default App;

