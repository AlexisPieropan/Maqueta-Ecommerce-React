import React from "react";
import {BsArrowLeft} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'

export  function Favoritos(){
    return(
        <div className="w-full h-screen flex justify-center items-center">
            <div className="space-y-5 flex flex-col justify-center items-center">
                <h1 className="text-xl font-semibold ">No tienes Productos favoritos</h1>
                <NavLink to={'/'}>
                <button className="bg-gray-800 text-white px-5 py-2 rounded-m  drop-shadow-xl flex items-center space-x-2">
                    <span>Volver a comprar</span>
                    <BsArrowLeft/>
                </button>
                </NavLink>
            </div>
        </div>
    )
    
}