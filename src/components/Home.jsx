import React, { useState } from 'react'
import data from "./csvjson";
import { View, View0, View2 } from "./View";
import { View1 } from "./View";
import {FaBars} from 'react-icons/fa';

const Home = () => {
    const [div, setDiv] = useState(false);
    const [def, setDefault] = useState(true);
    const [unsort, setUnsort] = useState(false);
    const [des, setDes] = useState(false);
    const [asce, setAsce] = useState(false);

    const clickDiv = e => {
        setDiv(current => !current);
    }

    const clickDef = () => {
        setAsce(false);
        setDes(false);
        setDefault(false);
        setUnsort(true);
        setDiv(false);
    } 
    const clickAsc = () => {
        setDefault(false);
        setUnsort(false);
        setAsce(true);
        setDiv(false);
    } 
    const clickDes = () => {
        setDefault(false);
        setAsce(false);
        setUnsort(false);
        setDes(true);
        setDiv(false);
    }

    // const selected = (key) =>{
    //     console.log(key,"clicked");
    // }

  return (
    <div className="flex h-full p-[1rem] md:p-[3rem] w-full flex-col bg-gradient-to-b from-[#f6d365] to-[#fda085]">
        <div className="flex font-sign justify-center rounded-[5rem] text-[3rem] items-center w-full">
            EMPLOYEE DATA 
        </div>
      <div className=" flex p-[2rem] bg-[#ebeaea] justify-center rounded-[3rem] flex-col w-full">
          {data.length>0&&<>
            <div className="flex overflow-x-scroll scrollbar-hide w-full border-[.2rem] border-[#000000] rounded-[3rem]">
              <table className="">
                <thead>
                    {div?(<div className="flex flex-col ml-[1.3rem] mt-[3.3rem] absolute items-center justify-center p-[1rem] px-[1rem] bg-[#919191] rounded-[1rem]"> 
                        <button onClick={clickDef} className="text-[#ffffff] w-[7.5rem] rounded-[1rem] font-bold border-[.2rem] py-[.4rem] px-[.6rem] hover:bg-[#ffffff] hover:text-black hover:border-[#ffffff]">Unsort</button>
                        <button onClick={clickAsc} className="text-[#ffffff] w-[7.5rem] mt-[.5rem] rounded-[1rem] font-bold border-[.2rem] py-[.4rem] px-[.6rem] hover:bg-[#ffffff] hover:text-black hover:border-[#ffffff]">Sort by ASC</button>
                        <button onClick={clickDes} className="text-[#ffffff] w-[7.5rem] font-bold mt-[.5rem] rounded-[1rem] border-[.2rem] py-[.4rem] px-[.6rem] hover:bg-[#ffffff] hover:text-black hover:border-[#ffffff]">Sort by DESC</button>
                    </div>):null}
                  <tr className="bg-gradient-to-r from-[#f6d365] to-[#fda085]">
                    <th className="p-[1rem]">Id </th>
                    <th className="py-[1rem] px-[2rem]"><div className="flex items-center"><h1>First_Name</h1><FaBars onClick={clickDiv} className="ml-[1rem] text-black hover:text-blue-500"/></div></th>
                    <th className="p-[1rem]">Last Name</th>
                    <th className="p-[1rem]">Email</th>
                    <th className="p-[1rem]">Gender</th>
                    <th className="p-[1rem]">Ip_address</th>
                    <th className="p-[1rem]">Airport code</th>
                    <th className="p-[1rem]">Time</th>
                    <th className="p-[1rem]">Status</th>
                    <th className="py-[1rem] px-[5rem]">Mobile</th>
                    <th className="py-[1rem] px-[5rem]">Area</th>
                    <th className="p-[1rem]">Show</th>
                    <th className="p-[1rem]">Edit</th>
                  </tr>
                </thead>
                
                {
                    asce?(<tbody><View1 data={data} /></tbody>):null
                }
                {
                    des?(<tbody><View2 data={data} /></tbody>):null
                }
                {
                    def?(<tbody><View data={data} /></tbody>):null
                }
                {
                    unsort?(<tbody><View0 data={data} /></tbody>):null
                }
                
              </table>
            </div>
          </>}
          {data.length < 1 && <div className="font-bold text-[2rem]">No Data</div>}
        </div>
        
        <div className="flex flex-row mt-[3rem] items-center justify-center">
            <h2 className="select-none text-white">Designed with ❤️ By</h2>
            <div className='flex w-[8.5rem] h-[3rem] items-center justify-center'> 
                <a className='' href="https://hareshkurade.me/My_Portfolio/">
                    <strong className="hover:text-[1.03rem] text-white hover:text-[#4eabf7] cursor-pointer ">Haresh Kurade</strong>
                </a>
            </div>
        </div>

    </div>

  )
}

export default Home;
