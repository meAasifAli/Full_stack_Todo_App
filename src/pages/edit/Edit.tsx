import { useParams, useNavigate } from "react-router-dom"
import useGetDoc from "../../hooks/useGetDoc"
import { FormEvent, useEffect, useState } from "react"
import useUpdateTodo from "../../hooks/useUpdateTodo"

const Edit = () => {
    const navigate = useNavigate()
    const { handleUpdateTodo } = useUpdateTodo()
    const [text, setText] = useState<string>("")
    const { id } = useParams()

    const { todo } = useGetDoc(id!)

    useEffect(() => {
        if (todo) {
            setText(todo.title)
        }
    }, [todo])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        await handleUpdateTodo(id!, text)
        navigate("/")
    }
    return (
        <div className="sm:w-1/2 mx-auto h-screen flex flex-col sm:items-center sm:justify-center gap-6">
            <h1 className="text-2xl font-bold text-red-700">EditTodo</h1>
            <form onSubmit={handleSubmit} className="flex items-center gap-4 w-full px-2 py-2">
                <input value={text} onChange={(e) => setText(e.target.value)} className="px-2 py-4 rounded-lg outline-0 border-2 border-gray-200 w-full" type="text" placeholder="Enter A Todo" />
                <button type="submit" className="bg-red-700 rounded-lg border-none px-4 text-white py-4 ">Update</button>
            </form>
        </div>
    )
}
export default Edit