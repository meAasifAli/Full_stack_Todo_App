import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";



const useUpdateTodo = () => {

    const handleUpdateTodo = async (id: string, text: string) => {


        const docRef = doc(db, "todos", id);

        await updateDoc(docRef, {
            title: text
        })
    }

    return { handleUpdateTodo }
}
export default useUpdateTodo