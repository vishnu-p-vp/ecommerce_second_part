import React, { useContext } from "react";
import "./form.css";
import { useEffect, useState } from 'react';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import {db} from '../firebase-config';

// import { async } from '@firebase/util';

// import {UserContext} from "./Context/UserContext"
import {Link, redirect} from "react-router-dom"
// import firebase from "firebase/compat/app"
// import { getAuth } from "firebase/auth";
// import { createUserWithEmailAndPassword,
//     signInWithEmailAndPassword
//   ,onAuthStateChanged, 
//   signOut
// } from 'firebase/auth';
// import {auth} from '../firebase-config'

// import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// const auth = getAuth();

function Signup(props)
{
    
    const [users,setUsers] = useState([]);
    const usersCollectionRef = collection(db,'Users');

    // const context=useContext(UserContext)
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');

    // const handleSignUp = () =>{
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
            // Signed in 
            // const user = userCredential.user;
            // ...
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
            // ..
        // });

        // onAuthStateChanged(auth, (user) => {
        //     if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
            //   const uid = user.uid;
            // context.setUser2({email: user.email, uid: user.uid})
              // ...
            // } else {
              // User is signed out
              // ...
        //     }
        //   });
        //   firebase
        //   .auth
        //   .createUserWithEmailAndPassword(email,password)
        //   .then(res=>{
        //     console.log(res)
        //     context.setUser2({email: res.user.email,uid:res.user.uid})
        //   })
        //   .catch(error=>{
        //     console.log(error)
        //   })
    // }

    // const handleSubmit=e=>{
    //     e.preventDefault()
    //     createUser()
    //     handleSignUp()
    // }

  useEffect(() => {
    const getUsers = async() => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({...doc.data(),id:doc.id})));

    }
    getUsers();
  },[]);

  const [newFirstName,setFirstName] = useState("");
  const [newLastName,setLastName] = useState("");
  const [newPhone,setPhone] = useState(0);
  const [newEmail,setEmail] = useState("");
  const [newPassword,setPassword] = useState("");
  const [newAddress,setAddress] = useState("");


  const createUser = async() => {
    await addDoc (usersCollectionRef, {firstName: newFirstName,lastName: newLastName, phoneNo: newPhone, 
      emailid: newEmail, password: newPassword, address: newAddress});
    props.addUser(newEmail);
  }

  

    return(
            <div class="wrapper">
            <div class="form">
                <header>Sign Up</header>
                {/* <form onSubmit={handleSubmit}> */}
                    <div class="field name">
                        <div class="input-area">
                            <input type="text" 
                            placeholder="First Name" onChange={(event) => {setFirstName(event.target.value);}}/> 
                            <i class=" icon fas fa-user"></i>
                        </div>
                    </div>
                    <div class="field name">
                        <div class="input-area">
                            <input type="text" 
                            placeholder="Last Name" onChange={(event) => {setLastName(event.target.value);}}/> 
                            <i class=" icon fas fa-user"></i>
                        </div>
                    </div>
                    <div class="field Phone Number">
                        <div class="input-area">
                            <input type="text" placeholder="Phone Number" onChange={(event) => {setPhone(event.target.value);}}/>
                            <i class="icon fas fa-user"></i>
                        </div>
                    </div>
                    <div class="field email">
                        <div class="input-area">
                            <input type="email" 
                            name="email"
                            id="email"
                            // value={email}
                            placeholder="Email"
                             onChange={(event) => {
                                // setEmail(event.target.value);
                                setEmail(event.target.value);

                            }}
                            />
                            <i class="icon fas fa-enevelope"></i>
                        </div>
                    </div>
                    <div class="field password">
                        <div class="input-area">
                            <input type="password"
                            name="password"
                            id="password"
                            // value={password}
                            placeholder="Password" 
                            onChange={(event) => {setPassword(event.target.value);
                                // setPassword(event.target.value);
                            }}
                            />
                            <i class="icon fas fa-lock"></i>
                        </div>
                    </div>
                    {/* <div class="field password">
                        <div class="input-area">
                            <input type="confirm password" placeholder="Confirm Password"/>
                            <i class="icon fas fa-lock"></i>
                        </div>
                    </div> */}
                    <div class="field address">
                        <div class="input-area">
                            <input type="Address" placeholder="Enter your address" onChange={(event) => {setAddress(event.target.value);}}/>
                            <i class="icon fas fa-home"></i>
                        </div>
                    </div>
                    

                    {/* <div class="radio_btn">
                        <input type="radio" value="male" id="male" name="gender" />
                        <label for="male">Male</label>
                        <input type="radio" value="female" d="female" name="gender"/>
                        <label for="female">Female</label>
                    </div> */}
                    <Link to="/profile">
                    <button type="submit" value="submit" 
                    onClick={createUser}
                    >Sign up
                        
                    </button></Link>
                {/* </form> */}
            </div>
            <div>

            {/* {users.map((users) => {
        
      })} */}
      </div>
        </div>
    );
}

export default Signup;










// import React from "react";
// import "./form.css";

// function Signup()
// {
//     return(
//         <div>
//                     <div class="wrapper">
//             <div class="form">
//                 <header>Sign Up</header>
//                 <form action=" ">
//                     <div class="field name">
//                         <div class="input-area">
//                             <input type="text" placeholder="Name"/>
//                             <i class=" icon fas fa-user"></i>
//                         </div>
//                     </div>
//                     <div class="field Phone Number">
//                         <div class="input-area">
//                             <input type="text" placeholder="Phone Number"/>
//                             <i class="icon fas fa-user"></i>
//                         </div>
//                     </div>
//                     <div class="field email">
//                         <div class="input-area">
//                             <input type="email" placeholder="Email"/>
//                             <i class="icon fas fa-enevelope"></i>
//                         </div>
//                     </div>
//                     <div class="field password">
//                         <div class="input-area">
//                             <input type="password" placeholder="Password"/>
//                             <i class="icon fas fa-lock"></i>
//                         </div>
//                     </div><div class="field password">
//                         <div class="input-area">
//                             <input type="confirm password" placeholder="Confirm Password"/>
//                             <i class="icon fas fa-lock"></i>
//                         </div>
//                     </div>
//                     <div class="field address">
//                         <div class="input-area">
//                             <input type="Address" placeholder="Enter your address"/>
//                             <i class="icon fas fa-home"></i>
//                         </div>
//                     </div>
                    

//                     <div class="radio_btn">
//                         <input type="radio" value="male" id="male" name="gender" />
//                         <label for="male">Male</label>
//                         <input type="radio" value="female" d="female" name="gender"/>
//                         <label for="female">Female</label>
//                     </div>
//                     <button type="submit" value="submit">Sign up
                        
//                     </button>
//                 </form>
//             </div>
//         </div>
//         </div>
//     );
// }

// export default Signup;