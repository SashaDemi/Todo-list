import {useState} from 'react';

const TodoForm = ({addTodo}) => {
    // using state to store data from input.
    const [value, setValue] = useState('')

    // This function will handle the event submission form and
    // prevents the default behavior of the onSubmit event.
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue('');
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type='text' className='todo-input'
                   value={value}
                   placeholder='Write your task'
                // Update the value state.
                   onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-button'>
                Add Task
            </button>
        </form>
    )
}
export default TodoForm;