import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className={`${task.completed ? 'Todo completed': "Todo"}`}>
            <p>{task.task}</p>
            <div>
                <FontAwesomeIcon className="fa-check-circle check-icon" icon={faCheckCircle} onClick={() => toggleComplete(task.id)} />
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon className="fa-trash delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}