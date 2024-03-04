import { TodoListemItemProps } from "../../vite-env"




const CreateTodo = ({ handleSubmit, text, setText }: TodoListemItemProps) => {
    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-4 w-full px-2 py-2">
            <input value={text} onChange={(ev) => setText(ev.target.value)} className="px-2 py-4 rounded-lg outline-0 border-2 border-gray-200 w-full" type="text" placeholder="Enter A Todo" />
            <button type="submit" className="bg-red-700 rounded-lg border-none px-4 text-white py-4 ">Add</button>
        </form>
    )
}
export default CreateTodo