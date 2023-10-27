import supra from './assets/img/anastase-maragos-UZOUVADKq2g-unsplash.jpg'
import React from 'react-dom'
import './components/index.css'
const Heros = () => {
    return (
       
      <div className='clk max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/**overlay */}
            <div className='bg-black/40 absolute w-full h-full text-gray-300 max-h-[500px]
            flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Kars <span className='text-white'>dealership</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Kars <span className='text-green-500'>Best automobiles</span></h1>
            </div>
            <img src={supra}  className=' w-full max-h-[500px] object-cover'/>
        </div>
      </div>
    )
}

export default Heros; 