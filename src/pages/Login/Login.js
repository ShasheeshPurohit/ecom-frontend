import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import "./Login.css"

export default function Login(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {loginHandler, loginState} = useAuth();


    return(
        <div className="login-layout">
            <div className="login-box">
                <input 
                type="text"
                className="login-field"
                placeholder="Username"
                onChange={(event)=>setUsername(event.target.value)}
                />
                <input 
                type="password"
                className="login-field"
                placeholder="Password"
                onChange={(event)=>setPassword(event.target.value)}
                />
                <button className="login-button" onClick={()=>loginHandler(username,password)}>Login</button>
                <h2 className="login-item ">{loginState}</h2>
            </div>
        </div>
    );
}