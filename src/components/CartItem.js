import React from "react";
import {toast} from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice";

function CardItem({item,itemIndex}){
const dispatch=useDispatch();

function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item Removed Successfully");
}

    return (
        <div>
            <div className="flex ml-[90px] w-[550px]  pb-5 border-b-[5px]  mt-10 gap-10  ">  
                  <div>
{ <img className="h-[180px] w-[150px]" src={item.image}/>}
            </div>
            <div className="flex flex-col w-[350px] gap-5" >
                <h1 className="text-xl font-bold">{item.title}</h1>
                 <p className=" text-gray-900 font-normal  ">
            {item.description.split(" ").slice(0,15).join(" ")+"..."};
        </p>
                <div className="flex w-full justify-between">
                <p className="text-green-600 font-bold">${item.price}</p>
                    <div className="bg-red-200 mr-5 rounded-full flex justify-center items-center"
                    onClick={removeFromCart}>
                    <MdDelete className="m-2 text-red-900"/>
                    </div>
                </div>
            </div>
       </div>
   </div>
    );
}
export default CardItem;