import React, {useState} from 'react'
import { motion } from 'framer-motion';

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("")
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='What is the Task Today?' onChange={(e) => setValue(e.target.value)}/>
        <motion.button whileTap={{ scale: 0.9 }} type='submit' className='todo-btn'>Add Task</motion.button>
    </form>
  )
}
