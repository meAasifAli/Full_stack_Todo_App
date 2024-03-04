import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase"

const useCompleteTodo = () => {
    const onCheckBoXChange = async (todo: Todo) => {
        await updateDoc(doc(db, "todos", todo.id), {
            isCompleted: !todo.isCompleted
        }
        )
    }
    return { onCheckBoXChange }
}
export default useCompleteTodo