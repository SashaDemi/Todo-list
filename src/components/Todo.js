import trashImg from '../images/trashImg.png'
import renameImg from '../images/renameImg.png'

// adding dynamic data to <p>.
const Todo = ({task, toggleComplete}) => {

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
                <img className='rename-image' src={renameImg} alt='Rename'/>
                <img className='trash-image' src={trashImg} alt='Trash'/>
            </div>
        </div>
    )
}
export default Todo;