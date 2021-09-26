import {useState} from 'react';
import Counter from './Counter';
import SetTodoItem from './SetTodoItem';
import GetTodoItems from './GetTodoItems';

function TheTodoList() {
    const [todoItem, updateTodoList] = useState(GetTodoItems());
    console.log(todoItem);

    function addRandomTodo(todoItem, updateTodoList) {
        const newTodoItem = todoItem.concat({id: setUniqueId(), description: "Random activity"});
        updateTodoList(newTodoItem);
    }

    function setUniqueId() {
        return Math.random().toString(36).substr(2, 9);
    }

    function itemRemoved(id) {
        const newTodoItem = todoItem.filter((todo) => todo.id !== id);
        updateTodoList(newTodoItem);
    }

    return (
        <div>
            <h1>- ToDo List -</h1>
            <div style={{ display: "flex" }}><Counter/></div>
            <button onClick={() => addRandomTodo(todoItem, updateTodoList)}>Add todo</button>
            <div>
                <ul>
                    {todoItem.map((todo) => <SetTodoItem key={setUniqueId()} radioId={todo.id} text={todo.description}
                                                      onRemove={() => itemRemoved(todo.id)}/>)}
                </ul>
            </div>
        </div>
    )
}

export default TheTodoList;