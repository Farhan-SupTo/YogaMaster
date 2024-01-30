import React from 'react';
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
const NavMobile = () => {
  return (
    <nav>
      {/* menu button */}
      <div className='cursor-pointer text-4xl text-heading ml-[10px] lg:hidden'>
        <BiMenu></BiMenu>
      </div>
      <ul>
      <li>
      {/* <a href="#home">Home</a> */}
      
        
        
      </li>
      </ul>
    </nav>
  );
};

export default NavMobile;