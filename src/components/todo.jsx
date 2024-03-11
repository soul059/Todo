import React, { useEffect, useState, useRef } from 'react'
import { Todos } from '../App'

const todo = ({ todo, status }) => {
  const [done, setdone] = useState(false)
  const [count, setcount] = useState(0)
  const check = useRef(null)
  const span = useRef(null)

  useEffect(() => {
    if (count == 0) {
      console.log('TODOS are going to save')
      setcount = count++
    }
    else {
      setcount = count++
      console.log('TODOS are going to save')
      localStorage.setItem('todos', JSON.stringify(Todos))
    }
  }, [done])
  if (todo.text == "" || todo.text == null) {
    return <></>
  }

  if (status == false && todo.istick == true) {
    return <></>
  }
  else if (status == true && todo.istick == false) {
    return <></>
  }

  return (
    <div key={todo.id} className='flex flex-row gap-2 justify-between items-center mx-2 '>
      <input type="checkbox" ref={check} checked={todo.istick} onChange={() => {
        if (todo.istick == true) {
          todo.istick = false
        }
        else {
          todo.istick = true
        }
        setdone(!done)

      }} />
      {todo.istick ? <span ref={span} className='line-through'>{todo.text}</span> : <span ref={span}>{todo.text}</span>}
      <ul className='flex flex-row'>
        <li
          onClick={
            () => {
              todo.text = prompt("Edit your todo", todo.text)
              done ? setdone(false) : setdone(true)
            }
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
          </svg>
        </li>
        <li onClick={
          () => {
            let x = prompt("Are you sure you want to delete this todo? (yes/no)")
            if (x == 'yes') {
              todo.text = ""
              done ? setdone(false) : setdone(true)
            }
          }
        }>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </li>
      </ul>
    </div>
  )
}

export default todo
