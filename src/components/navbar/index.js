import React from 'react-dom'
import {AiFillAlert, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'
 
const Navbar = () => {
    return (
       
      <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/**left side */}
        <div className='flex items-center'>
            <div className='cursor-point'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
        <span className='font-bold'> KARS.</span>
      </h1>
      <div className='hidden lg:flex items-center bg-gray-300
      rounded-full p-1 text-[14px]'>
        <p className='bg-black text-white rounded-full p-2'>Encomendas</p>
        <p className='p-2'>Entregas</p>
      </div>
        </div>
        {/*search bar */}
     <div className='bg-gray-200 rounded-full flex items-center px-2
     w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={30}/>
        <input type='text' placeholder='search food' 
        className='bg-transparent p-2 w-full focus:outline'/>
     </div>
     {/*cart butao */}
     <button className='bg-black text-white hidden md:flex items-center
     py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-1'/>Carinho
     </button>
      </div>
      
    )
}

export default Navbar; 