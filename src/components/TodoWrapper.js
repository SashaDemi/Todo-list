import TodoForm from './TodoForm';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Todo from "./Todo";
// using the UUID library to generate a unique ID number.
const uniqueId = uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        // using spread operator to make copy
        const newTodos = [...todos,
            {
                id: uniqueId,
                task: todo,
                completed: false,
                isEditing: false
            }]
        setTodos(newTodos);

        console.log(newTodos)
    }
    return (
        <div className='todo-wrapper'>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, index) => (
                <Todo task={todo} key={index} />
            ))}
        </div>
    )
}
export default TodoWrapper;