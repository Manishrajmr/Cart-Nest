import React, { useState } from 'react';
import { MdShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const {cart} = useSelector((state) => state);
  const [value,setValue] =  useState("");
  return (
  <div className=' bg-black text-white'>
      <div className='flex justify-between max-w-5xl py-4 px-2.5 mx-auto items-center ' >
     <NavLink to='/'>
         <div className='font-bold text-2xl ' >
        {/* <img src="https://www.freepik.com/free-vector/flat-design-mobile-store-logo-template_32378651.htm#fromView=search&page=1&position=1&uuid=b5d43c78-6449-491a-9c11-27c5463ff915&query=shopping+cart+app+logo" alt="logo " /> */}
        CartNest
      </div>
     </NavLink>

     

      <div className='flex items-center gap-4 fon  '>
        <NavLink to="/">
            <p>Home</p>
        </NavLink>

      <NavLink to="/cart">
        <div className='relative'>
          <MdShoppingCart />
          <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" >{cart.length}</span>
      </div>
      </NavLink>

      


      </div>
    </div> 
  </div>
  );
}

export default Navbar;
