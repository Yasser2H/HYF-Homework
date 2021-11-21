function SetTodoItem(props) {
    return (
        <li>
            <div style={{ display: "flex", marginTop: "4px", marginBottom: "4px" }}>
                <button style={{ justifyContent: "center", marginLeft: "6px", marginRight: "6px" }} onClick={props.onRemove}>Remove</button>
                <input id={props.radioId} value={props.text} type="checkbox" name="todo" />
                <label style={{ marginLeft: "4px" }} htmlFor={props.radioId}>{props.text}</label>
            </div>
        </li>
    )
}

export default SetTodoItem;