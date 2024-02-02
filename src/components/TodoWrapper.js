import TodoForm from './TodoForm';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
// using the UUID library to generate a unique ID number.
const uniqueId = uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        // using spread operator to make copy
        setTodos([...todos,
            {
                id: uniqueId,
                task: todo,
                completed: false,
                isEditing: false
            }]);

        console.log(todos)
    }
    return (
        <div className='TodoWrapper'>
            <TodoForm addTodo={addTodo}/>
        </div>
    )
}
export default TodoWrapper;