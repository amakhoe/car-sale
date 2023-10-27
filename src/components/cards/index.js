import React from "react"
import car1 from '../../assets/img/anthony-bautista-KhqYRs1hoAk-unsplash.jpg'
const Cards = () => {
    return(
<div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
    {/*card */}
    <div className="rounded-xl relative hover:scale-95 duration-100">
        {/*overlay */}
        <div className=" absolute w-full h-full bg-black/40 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Sun's Out</p>
            <p className="px-2">Thers out</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">encomenda hoje</button>
        </div>
        <img src={car1} className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"/>
    </div>

    <div className="rounded-xl relative hover:scale-95 duration-100">
        {/*overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Sun's Out</p>
            <p className="px-2">Thers out</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">encomenda hoje</button>
        </div>
        <img src={car1} className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"/>
    </div>


    <div className="rounded-xl relative hover:scale-95 duration-100">
        {/*overlay */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Sun's Out</p>
            <p className="px-2">Thers out</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4 rounded-md">encomenda hoje</button>
        </div>
        <img src={car1} className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"/>
    </div>

</div>
    )
}

export default Cards;