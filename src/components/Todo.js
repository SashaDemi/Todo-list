import trashImg from '../images/trashImg.png'
import renameImg from '../images/renameImg.png'

// adding dynamic data to <p>.
const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {

    // this function will mark done or not todo items
    const getTaskClassName = (task) => {
        if (task.completed) {
            return 'completed';
        } else {
            return 'in-completed';
        }
    }

    return (
        <div className='todo'>
            <p onClick={() => toggleComplete(task.id)} className={getTaskClassName(task)}>{task.task}</p>
            <div>
                <img className='rename-image' src={renameImg} alt='Rename' role='button' onClick={() => editTodo(task.id)}/>
                <img className='trash-image' src={trashImg} alt='Trash' role='button' onClick={() => deleteTodo(task.id)}/>
            </div>
        </div>
    )
}
export default Todo;