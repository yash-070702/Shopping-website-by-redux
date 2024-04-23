import React from "react";
import { IoCart } from "react-icons/io5";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../Assets/Images/logo.png";

function Navbar(){
    const{cart}=useSelector(state=>state)
    return(
        <div className="">
<nav className="flex justify-between items-center h-20 max-w-6xl mx-auto ">

    <NavLink to="/">
        <div className="ml-5">
        <img src={logo}className="h-14"/>
        </div> 
    </NavLink>
    <div className="text-white flex flex-col items-center">
<p className=" text-[2.5rem]    ">  Ya-Zon </p>     
<p className="text-[10px]   "> A Shopping Website</p> 
    </div>

    <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
        <NavLink to="/">
        <p>Home</p>
        </NavLink>
<NavLink to="/cart">
<div className="relative">
    <IoCart className="text-2xl"/>
    {cart.length>0 &&
      <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white ">{cart.length}</span>}
  
    </div>
</NavLink>   

    </div>
</nav>
</div>
    );
};

export default Navbar;