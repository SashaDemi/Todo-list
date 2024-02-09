import {useState} from 'react';

const EditTodoForm = ({editTodo, task}) => {
    // show up value
    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue('');
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type='text' className='todo-input'
                   value={value}
                   placeholder='Update task'
                   onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-button'>
                Update
            </button>
        </form>
    )
}
export default EditTodoForm;