
import { FormEvent, } from "react";
import useAddTodo from "../../hooks/useAddTodo";
import useGetTodos from "../../hooks/useGetTodos";
import useCompleteTodo from "../../hooks/useCompleteTodo";
import useDeleteTodo from "../../hooks/useDeleteTodo";
import CreateTodo from "../../components/form/CreateTodo";
import TodoListItem from "../../components/todoList/TodoListItem";


const Home = () => {

    //custom hooks
    const { handleAddTodo, text, setText } = useAddTodo()
    const { todos } = useGetTodos()
    const { onCheckBoXChange } = useCompleteTodo()
    const { handleDeleteDoc } = useDeleteTodo()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await handleAddTodo()
    }

    return (
        <div className="sm:w-1/2 mx-auto h-screen flex flex-col sm:items-center sm:justify-center gap-6">
            <CreateTodo handleSubmit={handleSubmit} text={text} setText={setText} />
            <div className="flex flex-col justify-start gap-4 w-full">
                <h2 className="text-red-700 text-2xl font-semibold text-center">Todo List</h2>
                {
                    todos.map(todo => {
                        return <TodoListItem todo={todo} onCheckBoXChange={onCheckBoXChange} handleDeleteDoc={handleDeleteDoc} />
                    })
                }
            </div>
        </div>
    )
}
export default Home