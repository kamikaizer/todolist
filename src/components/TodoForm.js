import React from 'react'

export const TodoForm = () => {

  return (
    <form className='TodoForm'>
        <input type='text' className='todo-input' placeholder='¿Que vas a hacer hoy?' />
        <button type='sumbit' className='todo-btn'>
            Agregar
        </button>
    </form>
  )
}
