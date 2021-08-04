import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { baseurl } from "../../utils/apiCalls";
import "./Signup.css"

export default function Signup(){

    const {loginHandler} = useAuth();

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function SignUpHandler(name, username, email, password){
        try{
            const response = await axios.post(`${baseurl}/api/users/signup`,{
                name: name, email: email, username: username, password: password
            },{
                headers:{
                    ContentType: "application/json",
                },
            });
            if(response.status === 200){
                // console.log(username, password)
                return loginHandler(username, password)
            }
        }
        catch(error){
            // console.log(error.response);   
        }
    }


    return(
        <div className="signup-layout">
            <div className="signup-box">
                <input 
                type="text"
                className="signup-field"
                placeholder="Name"
                onChange={(event)=>setName(event.target.value)}
                />
                <input 
                type="text"
                className="signup-field"
                placeholder="Username"
                onChange={(event)=>setUsername(event.target.value)}
                />
                <input 
                type="email"
                className="signup-field"
                placeholder="E-mail"
                onChange={(event)=>setEmail(event.target.value)}
                />
                <input 
                type="password"
                className="signup-field"
                placeholder="Password"
                onChange={(event)=>setPassword(event.target.value)}
                />
                <button className="signup-button" onClick={()=>SignUpHandler(name, username, email, password)}>Sign up</button>
            </div>
        </div>
    );
}