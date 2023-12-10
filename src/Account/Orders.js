import React from "react";
import { useEffect, useState } from "react";
import {collection,doc,getDocs} from "firebase/firestore";
import {db} from "../firebase-config";
import Menu from "../Common/Menu";
import "./accountstyle.css";


    
function Orders(props)
{
    const [items,setItems]=useState([]);
    const categoryRef=collection(db,"Orders");
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
        <div><Menu/>
                            <div className="container rounded container1">
                                <div className="row categoryname"><h1 className="ordersmargin">Your Orders</h1></div>
                                <div className="row cardsstyle">
                                    {/* {props.users3} */}
                                    {items.map((items)=>{
                                        
                                            if(items.emailid==props.users3)
                                            {
                                                return(<div className="col col-xl-3 col-lg-4 col-md-6">
                                                
                                                    <div class="card cardstyle">
                                                        <img src={items.imageURL} class="card-img-top" alt="..." height="255px"/>
                                                        <div class="card-body">
                                                            <h5 class="card-title">{items.itemName}</h5>
                                                            <h6 class="card-subtitle mb-2 text-muted">Rs.{items.itemPrice}</h6>
                                                            <h6 class="card-subtitle mb-2 text-muted">Quantity: {items.itemQuantity}g</h6>
                                                        
                                                            
                                                            {/* <button type="button" 
                                                            class="btn btn-primary"
                                                            onClick={()=>props.addInCart(items.id,props.categoryName)}>
                                                                Add to Cart</button> */}
                                                        </div>
                                                    </div>
                                                
                                            </div>
                                            
                                        
                                       
                                        );}
                                    })}
                                </div>
                            </div>
                        </div>
    )
}

export default Orders;