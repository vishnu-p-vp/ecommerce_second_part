import React from "react";
import { Link } from "react-router-dom";
import "./form.css"
import { useEffect, useState } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import {db} from '../firebase-config';

function Login(props)
{
    const [users,setUsers] = useState([]);
    const usersCollectionRef = collection(db,'Users');

    const [newemail,setemail] = useState("");
    const [newpassword,setpassword] = useState("");
    
    useEffect(()=>{
        const getUsers=async()=>{
            const data=await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc)=>(
                {...doc.data(),id:doc.id}
            )))
        }
        getUsers();
    },[]);

    function checklogin(){
        users.map((users)=>{
            if(users.emailid==newemail && users.password==newpassword)
            {
                props.addUser(newemail)
                // window.location.href = "http://localhost:3000/profile";
                alert("Logged in successfully")
                return;
            }
            // else{
            //     alert("Invalid email or password")
            //     window.location.href = "http://localhost:3000/login";
            // }
        })
    }

    return(
        <div class="wrapper">
            <div class="form">
                <header>Login</header>
                {/* <form action=" "> */}
                    
                    <div class="field email">
                        <div class="input-area">
                            <input type="email" placeholder="Email"
                            onChange={(event) => {setemail(event.target.value);}}
                            />
                            <i class="icon fas fa-enevelope"></i>
                        </div>
                    </div>
                    
                    <div class="field password">
                        <div class="input-area">
                            <input type="password" placeholder="Password"
                            onChange={(event) => {setpassword(event.target.value);}}
                            />
                            <i class="icon fas fa-lock"></i>
                        </div>
                    </div>
                    

                    <Link to="/profile">
                    {/* <input type="submit"/> */}
                    <button type="submit" value="submit" 
                    onClick={checklogin}
                    >Login</button>
                    </Link>
                    <br/>Don't have an account?<Link to="/signup">Sign up</Link>
                {/* </form> */}
            </div>
        </div>
    );
}

export default Login;