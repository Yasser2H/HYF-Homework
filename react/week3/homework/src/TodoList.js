import TodoItem from './TodoItem';

function TodoList(props) {
    const { todoList, isError, onRemove, onSubmitUpdate } = props;

    return (
        <ul>
            {(!isError && todoList.length < 1) ? "No items" :
                todoList.map((todoItem) =>
                    <TodoItem
                        key={todoItem.id}
                        text={todoItem.description}
                        date={todoItem.deadline}
                        onRemove={() => onRemove(todoItem.id)}
                        onSubmitUpdate={(newDesc) => onSubmitUpdate(todoItem.id, newDesc)}
                    />)}
        </ul>
    )
}

export default TodoList;
