import trashImg from '../images/trashImg.png'
import renameImg from '../images/renameImg.png'

// adding dynamic data to <p>.
const Todo = ({task}) => {
    return (
        <div className='todo'>
            <p>{task.task}</p>
            <div>
                <img className='rename-image' src={renameImg} alt='Rename'/>
                <img className='trash-image' src={trashImg} alt='Trash'/>
            </div>
        </div>
    )
}
export default Todo;