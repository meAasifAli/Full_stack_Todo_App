import { useEffect, useState } from "react"
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Todo } from "../vite-env";

const useGetDoc = (id: string) => {
    const [todo, setTodo] = useState<Todo>({} as Todo)


    useEffect(() => {
        const fetchDoc = async () => {
            const docRef = doc(db, "todos", id);
            const todoItem = await getDoc(docRef)
            setTodo(todoItem.data() as Todo)
        }
        if (id) {
            fetchDoc()
        }
    }, [id])
    return { todo }
}
export default useGetDoc