import React,{useState} from "react";
import { CiSearch,CiShoppingCart } from 'react-icons/ci'
import watch from '../assets/watch.jpg'
import laptop from '../assets/laptop.jpg'
import monitor from '../assets/monitor.jpg'
import mouse from '../assets/mouse.jpg'
import prof from '../assets/prof.jpg'
import keyboard from '../assets/keyboard.jpg'
import sunGlass from '../assets/glasses.jpeg'
import leatherWatch from '../assets/leatherWatch.jpg'



const Main = () => {

    //optimizando en un array los datos
    let Products=[
        {
            img:sunGlass,
            title:"Lentes de Sol",
            description:"lorem ipsum dolar",
            price:40
        },
        {
            img:keyboard,
            title:"Teclado Negro",
            description:"lorem ipsum dolar",
            price:60
        },
        {
            img:mouse,
            title:"Mouse Negro",
            description:"lorem ipsum dolar",
            price:20
        },
        {
            img:monitor,
            title:"Monitor One PLus",
            description:"lorem ipsum dolar",
            price:100
        },
        {
            img:laptop,
            title:"Laptop Acer",
            description:"lorem ipsum dolar",
            price:200
        },
        {
            img:watch,
            title:"Reloj Apple",
            description:"lorem ipsum dolar",
            price:40
        },
        {
            img:leatherWatch,
            title:"Reloj de Cuero",
            description:"lorem ipsum dolar",
            price:60
        },
    ]


    const[filtroProdu,setFiltroProdu]=useState(Products)
    const searchHandler = (e)=>{
        const filtroArray= Products.filter((product)=> product.title.toLocaleLowerCase().includes(e.target.value))
        if(filtroArray.length != 0){
            setFiltroProdu(filtroArray)
        }
    }


    return(
        <div className="w-full relative">
            <div className="sticky top-0 z-10">
                <div className="header flex justify-between items-center p-4 bg-white">
                    <h1 className="text-3x1 font-bold">E-COMMERCE SHOP</h1>
                    <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded">
                        <input type="text" placeholder="Buscar Producto" className="bg-transparent outline-0" onChange={searchHandler}/>
                        <button onClick={()=>searchHandler}><CiSearch/></button>
                    </div>
                </div>
                <div className="categorias bg-white w-full flex justify-between space-x-8  px-2 py-10">
                    <div className="bg-black text-white px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Relojes</p>
                    </div>
                    <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Laptops</p>
                    </div>
                    <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Monitores</p>
                    </div>
                    <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Mouses</p>
                    </div>
                    <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Lentes</p>
                    </div>
                    <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Teclados</p>
                    </div>
                    <div className="bg-white  px-5 py-2 rounded-full drop-shadow-xl">
                        <p>Lentes de sol</p>
                    </div>
                </div>
            </div>
            
            <div className="productos grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
                {filtroProdu && filtroProdu.map((product,idx)=>{
                    return(
                        <>
                        <div key={idx} className="producto h-[300px] bg-white drop-shadow-2x1 p-2 border">
                            <img src={product.img} alt="" className="w-full h-[60%] object-cover p-2"/>
                            <div className="m-2 bg-gray-100 p-2">
                                <h1 className="text-xl font-semibold">{product.title}</h1>
                                <p className="text-sm">{product.description}</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-xl font-bold">${product.price}.00</p>
                                    <CiShoppingCart size={'1.4rem'}/>
                                </div>
                            </div>
                        </div>
                    </>
                    )
                })}
                
            </div>
        </div>
    )
    
}
export default Main