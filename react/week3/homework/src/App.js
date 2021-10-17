import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import Counter from './Counter';
import AddTodoItem from './AddTodoItem';
import fetchTodoList from './fetchTodoList';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [inputAddTodoDescription, setInputAddTodoDescription] = useState('');
  const [datepickerDate, setDatepickerDate] = useState(new Date());

  const handleAddToDoFormChange = (event) => {
    if (event instanceof Date) {
      setDatepickerDate(event);
    } else {
      setInputAddTodoDescription(event.target.value);
    }
  }

  const handleSubmitNewItem = (event) => {
    const newTodoList = todoList.concat({ id: getLastId(), description: inputAddTodoDescription, deadline: datepickerDate.toISOString().split("T")[0] });
    setTodoList(newTodoList);
    setInputAddTodoDescription('');
    event.preventDefault();
  }

  function handleRemove(id) {
    const newTodoList = todoList.filter((todoItem) => todoItem.id !== id);
    setTodoList(newTodoList);
  }

  function handleSubmitUpdate(id, text) {
    const newTodoList = todoList.map(todoItem => todoItem.id === id ? { ...todoItem, description: text } : todoItem);
    setTodoList(newTodoList);
  }

  function getLastId() {
    return todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1;
  }

  useEffect(() => {
    setIsLoading(true);
    fetchTodoList()
        .then((data) => setTodoList(data))
        .catch(err => setIsError(true));
    setIsLoading(false);
  }, []);

  return <div className="App" style={{ display: "flex", justifyContent: "center", height: 800 }}>
    <h1>- TodoList -</h1>
    <Counter />
    <AddTodoItem
        onChange={handleAddToDoFormChange}
        onSubmit={handleSubmitNewItem}
        inputValue={inputAddTodoDescription}
        date={datepickerDate} />
    {isError && (<div>There is an error!</div>)}
    {isLoading && (<div>Loading...</div>)}
    <TodoList
        todoList={todoList}
        isError={isError}
        onRemove={handleRemove}
        onSubmitUpdate={handleSubmitUpdate} />
  </div>
}

export default App;
