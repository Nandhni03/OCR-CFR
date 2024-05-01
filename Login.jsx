// import React, { useState } from "react"

// export const Login = (props) => {
//     const [email, setEmail] = useState('')
//     const [pass, setPass] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault()
//     }

//     return (
//         <div className="auth-form-container">
//             {props.currentForm === "login" ? (
//                 <form className="login-form" onSubmit={handleSubmit}>
//                     <label htmlFor="email">email</label>
//                     <input value={email} type="email" placeholder="youremail@gmail.com" id="email"></input>

//                     <label htmlFor="password">password</label>
//                     <input value={pass} type="password" placeholder="********" id="password"></input>
//                     <button type="submit">Login</button>
//                 </form>
//             ) : null}
//             <button className="link-btn" onClick={() => props.onFormSwitch("register")}>Don't have an account? Register here</button>
//         </div>
//     )
// }