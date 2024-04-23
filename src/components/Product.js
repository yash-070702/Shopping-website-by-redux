import React from "react";
import {toast} from  "react-hot-toast";
import {add,remove} from "../redux/Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";

function Product({post}){

    const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();

    function addToCart(){
        dispatch(add(post));
        toast.success("Item Added To Cart");
    }

    function removeFromCart(){
        dispatch(remove(post.id));
        toast.error("Item Remove From Cart");
    }
    return(
<div className="flex shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl">
    <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40  mt-1">{post.title.split(" ").slice(0,3).join(" ")+"..."}</p>
    </div>
    <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
            {post.description.split(" ").slice(0,10).join(" ")+"..."};
        </p>
    </div>
    <div className="h-[180px]">
        <img src={post.image} className="h-full w-full"/>
    </div>
    <div className="flex justify-between items-center w-full mt-5 gap-12">
         <div>
    <p className="text-green-600 font-semibold">${post.price}</p>
    </div>

{
    cart.some((p)=>p.id==post.id) ? 
    (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
     onClick={removeFromCart}>
        Remove Item</button>):
    (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={addToCart}>Add to Cart </button>)
}
</div>
</div>
   
)
}
export default Product;