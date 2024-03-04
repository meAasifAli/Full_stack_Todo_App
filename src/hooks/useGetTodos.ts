import { collection, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import { Todo } from "../vite-env";

const useGetTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const getTodos = async () => {
        const unsub = onSnapshot(collection(db, "todos"), (querysnapshot) => {
            const docs: Todo[] = querysnapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id, isCompleted: doc.data().isCompleted, title: doc.data().title }
            })
            setTodos(docs)
        })

        return () => unsub()
    }
    useEffect(() => {
        getTodos()
    }, [])
    return { todos }
}
export default useGetTodos