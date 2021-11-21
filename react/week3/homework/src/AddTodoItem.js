import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddTodoItem(props) {

    return <form id="add-todo" onSubmit={props.onSubmit}>
        <div>
            <label htmlFor="todo_description">TodoItem Description: </label>
            <input id="todo_description"
                   type="text"
                   placeholder="Create new item"
                   value={props.inputValue}
                   onChange={props.onChange} />
        </div>
        <div>
            <label htmlFor="todo_date">Due Date: </label>
            <DatePicker id="todo_date"
                        selected={props.date}
                        dateFormat="dd-MM-yyyy"
                        onChange={(date) => props.onChange(date)}
                        minDate={props.date} />
        </div>
        <input type="submit" value="Add to the list" disabled={!props.inputValue} />
    </form>
}

AddTodoItem.propTypes = {
    inputValue: PropTypes.string,
    date: PropTypes.instanceOf(Date)
}

export default AddTodoItem;
