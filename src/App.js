import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Signup from './Login/Signup';
import UserAccount from './Account/UserAccount';
import Orders from './Account/Orders';
import {Route,Link,BrowserRouter as Router, Routes} from "react-router-dom";
import React, { useState } from 'react';

function App() {

  const [users3,setUsers3]=useState([]);

  const addUser=(mail2)=>{
    let existence=-1
    for (let index = 0; index < users3.length; index++) {
        if(users3[index]==mail2){
            existence=0;
        }
        
    }
    if(existence!==-1){
        alert("Already account exists")
        return;
    }
    // const isAlreadyAdded=cartItem.findIndex(function(array){
    //     return array.id===iid
    // })

    // if(isAlreadyAdded!==-1){
    //     alert("Item already added to cart")
    //     return;
    // }
    
    setUsers3([...users3,mail2]);
    // alert("Account created successfully");
}
  return (
    <Router>
      <Routes>
        <Route exact path="/profile" element={<UserAccount users3={users3}/>}/>
        <Route exact path="/orders" element={<Orders users3={users3}/>}/>
        <Route exact path="/signup" element={<Signup addUser={addUser}/>}/>
        <Route exact path="/login" element={<Login addUser={addUser}/>}/>
      </Routes>
    </Router>
    
    // <div>
    //   <Login/>
    //   <Signup/>
    //   <UserAccount/>
    //   <Orders/>
    // </div>
  );
}

export default App;
