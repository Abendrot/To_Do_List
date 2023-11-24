import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <motion.div animate={{y:-10}} initial={{y:-25}} transition={{duration:0.1}} className='Todo'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
            <FontAwesomeIcon className='deleteIcon' icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </motion.div>
  )
}