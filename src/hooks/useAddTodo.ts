import { collection, doc, setDoc } from "firebase/firestore"
import { useState } from "react"
import { db } from "../firebase"

const useAddTodo = () => {
  const [text, setText] = useState<string>('');

  const handleAddTodo = async () => {
    const docref = doc(collection(db, "todos"))
    await setDoc(docref, {
      title: text,
      isCompleted: false
    })
    setText("")
  }
  return { handleAddTodo, text, setText }
}
export default useAddTodo