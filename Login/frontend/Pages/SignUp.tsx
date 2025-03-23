import { useState, useEffect } from "react";
import React from "react";
import solo from "./solo1.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();



  return (
    <div className=" bg-back1 h-screen flex justify-center items-center ">

      <div className="relative w-200 h-150 border-purple-700 border-3   ">

        <img className="h-full w-full object-cover blur-[1px] " src={solo} alt="solo" />

        <div className="absolute top-40 left-12 italic uppercase font-serif text-white text-6xl font-bold  ">
        <div className="pb-4">
        Welcome
        </div>
        <div>
        Player
        </div>
        </div>
      
        <div className="absolute top-0 right-0 bg-black opacity-80 w-1/2 h-148.5">
         
        <div className="pt-50 pl-20">
            <input onChange={(e)=>{
                setUsername(e.target.value)
            }} className="  bg-white py-2 px-7 text-center justify-center rounded-2xl "type="text" placeholder="Username / Email"></input>   
         </div>
         <div className="pt-10 pl-20">
            <input onChange={(e)=>{
                setPassword(e.target.value)
            }} className=" bg-white py-2 px-7 text-center justify-center rounded-2xl"type="password" placeholder="Password"></input>   
         </div>

         <div className="pl-36 pt-10">
            <button className=" px-7 py-2 rounded-2xl bg-button font-bold text-white hover:bg-purple-400 scale-125 transition-all duration-100 cursor-pointer " onClick={()=>{
                alert(`${username}\n${password}\ndo a backend call you idiot`)
            }}>SIGN UP</button>
         </div>
         
         <div
            className="absolute top-130 left-35 text-white text-sm cursor-pointer underline hover:text-button"
            onClick={()=>{
                navigate("/signin"); 
            }}>
            Already a Player ?
          </div>

        </div>
      </div>
    </div>
  );
};


export default SignUpPage;
