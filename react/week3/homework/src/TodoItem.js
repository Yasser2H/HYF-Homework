import { useState } from 'react';

function TodoItem(props) {
    const { text, date, onRemove, onSubmitUpdate } = props;
    const [checked, setChecked] = useState(false);
    const [inputText, setInputText] = useState(props.text);
    const [isEdited, setIsEdited] = useState(false);

    function handleEdit(event) {
        setInputText(event.target.value);
    }

    return isEdited ?
        (<li className="children">
            <form onSubmit={(event) => { onSubmitUpdate(inputText); setIsEdited(false); event.preventDefault(); }}>
                <input type="text"
                       value={inputText}
                       placeholder="Edit todo"
                       onChange={handleEdit} />
                <input type="submit" value="Update" disabled={!inputText} />
                <input type="button" onClick={() => setIsEdited(false)} value="Cancel" />
            </form>
        </li>) :
        (<li className="children">
            <span className={checked ? "complete" : ""}>{text} | {date}</span>
            <input onClick={() => setChecked(!checked)} type="checkbox" name="todoList" />
            <button onClick={onRemove}>Delete</button>
            <button onClick={() => setIsEdited(true)}>Edit</button>
        </li>)


}

export default TodoItem;