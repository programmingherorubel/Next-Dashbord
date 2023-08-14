"use client"


import { useState } from "react";
import { useForm } from "react-hook-form";





export default function Home() {
  const [activeInfo,setActiveInfo] = useState(false)
  

  
 
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    
  };
   

  
  return (
    <div className=" homepage p-4">
        <div className="mx-auto md:w-[40%]">
            <h1 className="text-2xl  text-center p-10 m-10 ">{activeInfo ? "Login" : "Registration"} Your Account</h1>

            {
            activeInfo ===  true ?  <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} name="email" className="p-2 rounded custom-input mt-6 border w-full " placeholder="Input Your Email" type="email"/>
                <input {...register("password")} name="password" className="p-2 rounded custom-input mt-6 border w-full" placeholder="Input Your Password" type="password"/>
                <button type="submit" class="rounded-full  p-2 w-full mt-6 bg-emerald-500 text-white uppercase text-lg">Login</button>
            </form>
            :
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img", { required: true })} className="p-2 rounded custom-input mt-6 border w-full"  type="file"/>
                <input {...register("name")}name="name" className="p-2 rounded custom-input mt-6 border w-full " placeholder="Input Your Name" type="text"/>
                <input {...register("email")}name="email" className="p-2 rounded custom-input mt-6 border w-full " placeholder="Input Your Email" type="email"/>
                <input {...register("password")}name="password" className="p-2 rounded custom-input mt-6 border w-full" placeholder="Input Your Password" type="password"/>

                <button type="submit" class="rounded-full p-2 w-full mt-6 bg-emerald-500 text-white uppercase text-lg">Registration</button>
            </form>
            }
            <h5 className="text-center mt-2" onClick={()=>setActiveInfo(!activeInfo)}>{activeInfo ? "you have already account Please " : "if you have no Account Please"} <b>{activeInfo ? "Login" : "Registration"}</b></h5>
        </div>
    </div>
  )
}
