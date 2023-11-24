import React, {useState} from 'react'
import { motion } from 'framer-motion';

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
    }

  return (
    <motion.form animate={{y:-10}} initial={{y:-25}} transition={{duration:0.1}} className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" value={value} className='todo-input' placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </motion.form>
  )
}
