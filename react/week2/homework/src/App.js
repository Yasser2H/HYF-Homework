import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
      <div className="App" style={{ display: "flex", justifyContent: "center" }}>
        <TodoList />
      </div>
  );
}

export default App;
