/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "./assets/logo.png";
import User from "./assets/user.svg";
import { NavLink } from "react-router-dom";
import { useUser } from '../../utilities/zustand'

const Navbar = () => {
  const { user } = useUser()


  return (
    <div className="bg-white p-10">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <NavLink to=''>
          <img className="cursor-pointer" src={Logo} alt="logo" />
        </NavLink>

        <div className="">
          <ul className="font-[400] flex items-center gap-[4vw] text-[22px] leading-[35px] normal">
            <li>
              <a className="hover:text-gray-500 text-black" href="#">
                Продажа
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500 text-black">
                Аренда
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500 text-black">
                Коммерческая
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500 text-black">
                Ипотека
              </a> 
            </li>
          </ul>
        </div>

        <div>        
          { user 
          ? <NavLink 
              className="flex px-5 py-2 hover:text-gray-500 text-black text-[22px] leading-[35px]"
              to="profile" >
              <img className="mr-3" src={User} alt="user" />
              Профиль 
            </NavLink>
          : <NavLink 
              className="flex px-5 py-2 hover:text-gray-500 text-black text-[22px] leading-[35px]"
              to="entry" >
              <img className="mr-3" src={User} alt="user" />
              Войти
            </NavLink>    
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
