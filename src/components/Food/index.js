import { useState } from 'react';
import React from 'react-dom'
import {data} from '../../data/index'
const Food = () => {
const [app, setApp] = useState(data)


//filtrar comidas
const filtromotor = (category) => {
  setApp(
    data.filter((item) => {
      return item.category === category;
    })
  )
}


//filtrar precos
const filtropreco = (price) => {
  setApp(
    data.filter((item) => {
      return item.price === price;
    })
  )
}



    return (
      <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>
      The best cars
        </h1>


        {/*filtered row */}
        <div className='flex flex-col lg:flex-row justify-between'>
      </div>
        {/*filtered type */}
        <div>
          
        <div>
          <p className='font-bold text-gray-500'>marcas filtrados</p>
          <div className='flex justfiy-between flex-wrap'>
            <button onClick={() =>  setApp(data)} className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>Mercedes</button>
            <button onClick={() => filtromotor('2jz')} className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>Mercedes</button>
            <button onClick={() => filtromotor('v6')} className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>Mercedes</button>
            <button onClick={() => filtromotor('2jz')} className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>Mercedes</button>
            <button onClick={() => filtromotor('v8')} className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>Mercedes</button>
            <button onClick={() => filtromotor('2jz')} className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>Mercedes</button>
          </div>
        </div>
        {/*filtered price */}

        <div>
        <p className='font-bold text-gray-500'>precos filtrados</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button  className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>Mercedes</button>
            <button  className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>Mercedes</button>
            <button  className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>Mercedes</button>
            <button  className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>Mercedes</button>
            <button  className='m-1 border-orange-600 text-orange-500 hover:bg-orange-500 hover:text-white'>Mercedes</button>
          </div>
        </div>

        </div>      

{/*mostrar tudo */}
<div className='grid grid-cols-1 lg:grid-cols-4 gap-6 pt-4'>
{app.map((item, index)=>(
  <div key={index} className='border shadow-lg hover:scale-105 duration-300'>
    <img src={item.image} className='w-full h-[200px] object-cover rounded-t-lg'/>
    <div className='flex justify-between px-2 py-4'>
      
    <p className='font-bold'>{item.name}</p>
    <p>
    <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
    </p>
    </div>
      </div>

))}
</div>
      </div>
      
    )
}

export default Food; 