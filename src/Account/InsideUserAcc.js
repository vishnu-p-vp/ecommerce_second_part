import React from "react";
import { Link } from "react-router-dom";
import userphoto from "../images/userphoto.jpg";
import "./accountstyle.css";
import { useEffect, useState } from "react";
import {collection,doc,getDocs} from "firebase/firestore";
import {db} from "../firebase-config";

function InsideUserAcc(props){

    const [items,setItems]=useState([]);
    const categoryRef=collection(db,"Users");
    useEffect(()=>{
        const getItems=async()=>{
            const data=await getDocs(categoryRef);
            setItems(data.docs.map((doc)=>(
                {...doc.data(),id:doc.id}
            )))
        }
        getItems();
    },[]);

    return(
        <div>
        {items.map((items)=>{
                                        
            if(items.emailid==props.users3)
            {
                return(
                <div className="align1">
            <div className="container align1">
                <div className="row">
                    <img src={userphoto} alt=".." className="circle imagesize center1"/>
                </div>
                <div className="row">
                    <div className="col col1">First Name</div>
                    <div className="col"><p>{items.firstName}</p></div>
                </div>
                <div className="row">
                    <div className="col col1">Last Name</div>
                    <div className="col"><p>{items.lastName}</p></div>
                </div>
                <div className="row">
                    <div className="col col1">Contact No.</div>
                    <div className="col"><p>{items.phoneNo}</p></div>
                </div>
                <div className="row">
                    <div className="col col1">Email</div>
                    <div className="col"><p>{items.emailid}</p></div>
                </div>
                <div className="row">
                    <div className="col col1">Address</div>
                    <div className="col"><p>{items.address}</p></div>
                </div>
              <Link to="/orders">
                    <button class="btn btn-primary btn-large buttonstyle" type="button">Your Orders</button></Link>
                    <br/>
                    
               
                <button class="btn btn-primary btn-large buttonstyle2" type="button">Logout</button>
               
            </div>
        </div>)}})}
        </div>);
    
}

export default InsideUserAcc;