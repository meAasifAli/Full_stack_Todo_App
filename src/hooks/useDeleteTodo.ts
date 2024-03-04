import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebase"

const useDeleteTodo = () => {
    const handleDeleteDoc = async (id: string) => {
        await deleteDoc(doc(db, "todos", id))
    }

    return { handleDeleteDoc }
}
export default useDeleteTodo