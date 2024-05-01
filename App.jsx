// import React, { useEffect, useState } from "react"
// import "./index.css"
// import { NewTodoForm } from "./NewTodoForm"
// import { TodoList } from "./TodoList"
// import { Login } from "./Login"
// import { Register } from "./Register"
// import { Link, Route, Routes } from "react-router-dom"

// export default function App() {
//   const [currentForm, setCurrentForm] = useState("login")

//   const toggleForm = (formName) => {
//     setCurrentForm(formName)
//   }




//   const [todos, setTodos] = useState(() => {
//     const localValue = localStorage.getItem("ITEMS")
//     if (localValue == null) return []

//     return JSON.parse(localValue)
//   })

//   useEffect(() => {
//     localStorage.setItem("ITEMS", JSON.stringify(todos))
//   }, [todos])

//   function addTodo(title) {
//     setTodos((currentTodos) => {
//       return [
//         ...currentTodos,
//         { id: crypto.randomUUID(), title, completed: false },
//       ]
//     })
//   }

//   function toggleTodo(id, completed) {
//     setTodos(currentTodos => {
//       return currentTodos.map(todo => {
//         if (todo.id === id) {
//           return { ...todo, completed }
//         }

//         return todo
//       })
//     })
//   }

//   function deleteTodo(id) {
//     setTodos(currentTodos => {
//       return currentTodos.filter(todo => todo.id !== id)
//     })
//   }




//   return (
//     <>
//       {/* <nav>
//         <ul>
//           <li><Link to="/" >App</Link></li>
//           <li><Link to="/Login" >Login</Link></li>
//           <li><Link to="/Register" >Register</Link></li>
//         </ul>
//       </nav> */}
//       {/* <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Register" element={<Register />} />
//       </Routes> */}

//       <NewTodoForm onSubmit={addTodo} />
//       <h1 className="header">Todo List</h1>
//       <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
//       

//        <div className="App">
//         {currentForm === "login" ? (
//           <Login currentForm={currentForm} onFormSwitch={toggleForm} />
//         ) : (
//           <Register currentForm={currentForm} onFormSwitch={toggleForm} />
//         )}
//       </div>
//     </>
//   )
// }


