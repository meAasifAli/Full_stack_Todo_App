/// <reference types="vite/client" />
import { FormEvent } from "react";

interface Todo {
    id: string,
    title: string,
    isCompleted: boolean
}

interface TodoListemItemProps {
    handleSubmit: (e: FormEvent) => void;
    text: string;
    setText: (text: string) => void;
}

interface TodoListProps {
    todo: Todo;
    onCheckBoXChange: (todo: Todo) => void;
    handleDeleteDoc: (id: string) => void;
}