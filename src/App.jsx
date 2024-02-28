import { useState, useEffect, useRef } from 'react'
import Navbar from './components/navbar'
import Todo from './components/todo'
import './App.css'

let Todos = []

function App() {

  const [todos, newtodo] = useState([])
  const [done, setdone] = useState(false)

  const count = localStorage.getItem('count') ? useRef(localStorage.getItem('count')) : useRef(0)
  
  const creat = useRef()

  
  let creatTodo = () => {
    const x = creat.current.value
    count.current++
    if (x) {
      newtodo([...todos, { text: x, istick: false, id: count.current }])
      // localStorage.setItem('todos', JSON.stringify([...todos, { text: x, istick: false, id: count.current }]))
      Todos.push({ text: x, istick: false, id: count.current })
      localStorage.setItem('count', count.current)
      creat.current.value = ""
    }
  }
  useEffect(() => {
    if (localStorage.getItem('todos')) {
      newtodo(JSON.parse(localStorage.getItem('todos')))
      Todos = JSON.parse(localStorage.getItem('todos'))
    }
  },[])

  useEffect(() => {
    Todos = todos
    let x = Todos.indexOf(Todos.find((todo)=> todo.text === "" ))
    if (x != -1) {
      Todos.splice(x,1)
    }
  })

  useEffect(() => {
    
  },[done])
  

  return (
    <>
      <Navbar />
      <main className='font-kode'>
        <section className={"flex flex-col text-center shadow-lg bg-amber-300 h-auto w-80 mx-auto my-10 rounded-lg"}>
          <span className='text-lg'>Add TO-DO</span>
          <div className='mt-10 flex flex-row gap-2 mx-auto'>
            <input className='rounded-md border-solid border-2 border-cyan-500 shadow-md p-1' type="text" ref={creat} />
            <button className='bg-orange-400 p-1 rounded-lg shadow-lg' onClick={() => creatTodo()} >Creat</button>
          </div>
          <button className='bg-orange-400 p-1 rounded-lg w-2/3 mx-auto mt-5 shadow-md mb-2' onClick={()=>done ? setdone(false) : setdone(true)}>Show {done?"not done":"done"}</button>
          <hr />
          <span className='text-lg font-bold font-sans my-2'>Your Todos</span>
          <hr />
          {/* {console.log(todos)} */}
          <div className='flex flex-col gap-2 mt-2 mb-5'>
            {todos.map((todo) => {
              
              if (done == false && todo.istick == false) {
                
                return (
                  <Todo key={todo.id} todo={todo} status={done}/>
                  )
              }
              else if (done == true && todo.istick == true){
                return (
                  <Todo key={todo.id} todo={todo} status={done}/>
                  )
              }
              else {
                return <></>
              }
            })}
          </div>
          {console.log(todos)}
        </section>
      </main>
    </>
  )
}

export default App
export {Todos}