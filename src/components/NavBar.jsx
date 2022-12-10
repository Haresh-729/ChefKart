import React, { useState } from "react";
import logo from "../assets/logo.png";
import area from "../assets/area.png";
import cart from "../assets/Cart.png";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconButton } from "rsuite";
import { Search } from "@rsuite/icons";
import Select from "react-select";

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Home");
  };

  const options = [
    // { value: "", label: "" },
  ];

  const [nav, setNav] = useState(false);

  return (
    <div className="select-none top-0 flex sticky z-50 justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-l from-[#f6d365] to-[#fda085]">
      <div className="flex flex-row">
        <img
          onClick={handleClick}
          className="cursor-pointer"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="xl:flex bg-gradient-to-r to-[#fa709a] from-[#fee140] rounded-md p-[0.1rem] md:hidden hidden">
        <button
          onClick={() => {
            navigate("/all_courses");
          }}
          className="rounded-md pr-3 flex flex-row items-center"
        >
          <img className="w-[2rem] p-1" src={area} alt="loc" />
          MENU
        </button>
      </div>
      <div className="xl:w-1/3 md:w-1/3 scrollbar-hide md:flex hidden">
        <Select
          placeholder="Search "
          className="w-full scrollbar-hide rounded-md border-[#7587A4] bg-white text-base font-medium text-[#7587A4] outline-none focus:border-blue focus:drop-shadow-2xl"
          options={options}
        />
      </div>
      <div className="xl:flex bg-gradient-to-r to-[#fa709a] from-[#fee140] rounded-md p-[0.1rem] md:hidden hidden">
        <button
          // onClick={() => {
          //   navigate("/add_shop");
          // }}
          className=" rounded-md pr-3 flex flex-row items-center"
        >
          <img className="w-[2rem] p-1" src={cart} alt="loc" />
          CART
        </button>
      </div>
      <div className="xl:flex hidden">
        <button className="rounded-md p-2 flex flex-row items-center px-[1rem] bg-gradient-to-r to-[#fa709a] from-[#fee140]">
          Login/Sign-up
        </button>
      </div>
      <div className="flex md:hidden xl:hidden pl-[8rem] pr-[1rem] z-10">
        <IconButton
          icon={<Search />}
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 justify-center font-poppins text-[1.5rem] font-bold text-white"
        ></IconButton>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="flex flex-col items-center absolute top-16 right-0 w-[20rem] px-2 bg-[#ffffff] rounded-[3rem] p-[3rem] text-white">
          <div className="bg-gradient-to-r to-[#fa709a] from-[#fee140] rounded-md w-full p-[0.1rem] flex xl:hidden">
            <button
              onClick={() => {
                navigate("/all_courses");
              }}
              className=" w-full justify-center rounded-md pr-3 flex flex-row items-center"
            >
              <img className="h-[1.9rem] p-[0.2rem]" src={area} alt="loc" />
              MENU
            </button>
          </div>
          <div className="xl:hidden flex w-full bg-gradient-to-r to-[#fa709a] from-[#fee140] rounded-md p-[0.1rem] mt-[0.5rem]">
            <button
              // onClick={() => {
              //   navigate("/add_shop");
              // }}
              className=" w-full justify-center rounded-md pr-3 flex flex-row items-center"
            >
              <img className="w-[2rem] p-1" src={cart} alt="loc" />
              CART
            </button>
          </div>
          <div className="flex xl:hidden mt-[0.5rem] w-full">
            <button className="rounded-md w-full justify-center p-2 flex flex-row items-center px-[1rem] bg-gradient-to-r to-[#fa709a] from-[#fee140]">
              LOGIN/ SIGNUP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
