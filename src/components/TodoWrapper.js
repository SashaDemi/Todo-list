import TodoForm from './TodoForm';
import {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
// using the UUID library to generate a unique ID number.
uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

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
        localStorage.setItem('todos', JSON.stringify(newTodos));
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
// this function return isEditing flag
    const editTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {...todo, isEditing: !todo.isEditing};
            } else {
                return todo;
            }
        }))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {...todo, task, isEditing: !todo.isEditing};
            } else {
                return todo;
            }
        }))
    }
    return (
        <div className='todo-wrapper'>
            <h1 className='todo-list-title'>Todo list</h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, key) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} key={todo.id}/>
                    ) : (
                    <Todo task={todo} key={todo.id}
                          toggleComplete={toggleComplete}
                          deleteTodo={deleteTodo}
                          editTodo={editTodo}/>
                    )
            ))}
        </div>
    )
}
export default TodoWrapper;