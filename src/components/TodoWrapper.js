import TodoForm from './TodoForm';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Todo from "./Todo";
// using the UUID library to generate a unique ID number.
uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        // using spread operator to make copy
        const newTodos = [...todos,
            {
                id: uuidv4(),
                task: todo,
                completed: false,
                isEditing: false
            }]
        setTodos(newTodos);

        console.log(newTodos)
    }

    // this function is needed to reload state by id, then pass to Todo component.

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            } else {
                return todo;
            }
        }));
    }
    // delete item by its id
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    };
    return (
        <div className='todo-wrapper'>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, index) => (
                <Todo task={todo} key={index}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}/>
            ))}
        </div>
    )
}
export default TodoWrapper;