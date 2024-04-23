import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import CardItem from "../components/CartItem";



function Cart(){
    const [totalAmount,setTotalAmount]=useState(0);
    const {cart}=useSelector((state)=>state);

    console.log(cart);
    useEffect(()=>{
        let sum=0;
        cart.forEach(element => {
           sum=sum+element.price; 
        });

        setTotalAmount(sum); 
    },[cart]);

    return(
<div>
     {
        cart.length>0 ?
        (<div className=" flex  mb-16  gap-28"> 
            <div> {
                cart.map((item,index)=>{
                    return <CardItem key={item.id} item={item} itemIndex={index}/>
                })
            }
            </div>
            <div className="self-end ">
            
                <div className="flex flex-col">
                    <p className="text-green-700 uppercase font-bold">Your Cart</p>
                <p className="text-green-700 uppercase font-bold text-4xl">Summary</p>
                </div> 
                <div className="flex flex-col gap-3 mt-4">
                <p><span className="font-semibold">Total Item:{cart.length}</span> </p>
           <p className="font-semibold">Total Amount:<span className="font-extrabold">${totalAmount}</span></p> 
   <button className="text-white bg-green-800 font-semibold py-2 w-[300px] rounded-md"> CheckOut Now</button>
                </div>
        
</div>
           
           
        </div>):
        ( <div className="flex justify-center items-center h-[88.5vh] flex-col gap-5">
                <p className="font-bold text-[1.3rem]"> Your Cart is Empty!!</p>
                <Link to={"/"}>
                    <button className=" bg-green-600 text-white font-semibold px-6 py-2 rounded-lg ">
                        Shop Now
                        </button>
                        </Link>
            </div>)
     }
</div>
    );
};
export default Cart;