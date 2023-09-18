import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const[value, setValue] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value)

        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' placeholder='Que vas a hacer hoy?' onChange={(e) => setValue(e.target.value)} value={value} />
        <button type='sumbit' className='todo-btn'>
            Agregar
        </button>
    </form>
  )
}
