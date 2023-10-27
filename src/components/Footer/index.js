import React from "react";

import { AiFillCamera, AiFillWindows } from "react-icons/ai";


const Footer = () => {
    return (
        <footer>
            <div className="p-10 bg-gray-700 text-gray-300 uppercase">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4 font-bold xc"> xtobobo Design</h4>
                                <p className="text-white-500">
                                <strong className="font-bold">Phone: </strong>+ 258 84 69 00 855<br></br>
                                <strong>email: </strong>amakhoekars@gmail.com<br></br>
                            
                            </p>
                        </div>

                         {/*usefull links */}
                         <div className="mb-5">
                            <h4 className="text-2xl pb-4">usefull links</h4>
                            <ul className="text-gray-500">
                            <li className="pb-4"><a className="text-green-300">nossos servicos</a></li>
                            <li className="pb-4"><a className="text-green-300">About us</a></li>
                            <li className="pb-4"><a className="text-green-300">Brandig</a></li>
                            
                            </ul>
                        </div>
                        {/*usefull links */}
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">Nossos Servicos</h4>
                            <ul className="text-gray-500">
                            <li className="pb-4"><a className="text-green-300">Web Design</a></li>
                            <li className="pb-4"><a className="text-green-300">Design Grafico</a></li>
                            <li className="pb-4"><a className="text-green-300">Brandig</a></li>
                            <li className="pb-4"><a className="text-green-300">Digital Marketing</a></li>
                            <li className="pb-4"><a className="text-green-300">Network Administration</a></li>
                            </ul>
                        </div>
                         {/*usefull links */}
                         <div className="mb-5">
                            <h4 className="pb-4">Nossos Servicos</h4>
                            <p className="text-gray-500 pb-2"></p>
                            <form className="flex flex-row flex-wrap">
                                <input type="email" 
                                className="text-gray-500 w-2/3 p-2 focus:border-yellow-50
                                rounded-xl"/>
                                <button className="p-2 w-1/3 bg-gray-500 text-green-300 hover:bg-green-400 hover:text-white">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-slate-800 text-gray-500 px-10">
                <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
                                <div className="text-center">
                                    <div>
                                        Copyright <strong><span>xtobobo</span></strong>. All Rights Reserved
                                    </div>
                                    <div>
                                        Design by <a href="" className="text-green-300">xtobobo</a>
                                    </div>
                                </div>
                        <div className=" text-xl text-white">
                        <a href="" className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"><AiFillCamera /></a>
                        <a href="" className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"><AiFillCamera /></a>
                        <a href="" className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1"><AiFillWindows /></a>
                                </div>
                            </div>
                        </div>
        </footer>
    )
}
export default Footer;