import { MdDelete } from "react-icons/md"
import { FaRegEdit } from 'react-icons/fa';
import { TodoListProps } from "../../vite-env";
import { useNavigate } from "react-router-dom";


const TodoListItem = ({ todo, onCheckBoXChange, handleDeleteDoc }: TodoListProps) => {
    const navigate = useNavigate()
    return (
        <div key={todo.id} className="flex items-center justify-between w-full gap-4 px-4 py-2 rounded-lg ">
            <div className="flex items-center gap-4">
                <input checked={todo.isCompleted} type="checkbox" onChange={() => onCheckBoXChange(todo)} />
                <p className={`text-white ${todo.isCompleted ? "line-through" : ""}`}>{todo.title}</p>
            </div>
            <div className="flex items-center gap-4">
                <MdDelete color="white" onClick={() => handleDeleteDoc(todo.id)} />
                <FaRegEdit color="white" onClick={() => navigate(`/${todo.id}`)} />
            </div>
        </div>
    )
}
export default TodoListItem