import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Link } from 'react-router-dom';



function Navbar() {
    return (
        <>
            <nav className="width-before-scroll-bar w-full h-14 border-b border-zinc-200 flex flex-row-reverse md:flex-row items-center backdrop-blur-sm fixed top-0 z-50">
                        <div className="flex basis-1/4 items-center">
                                <div className="md:hidden pl-2">
                                </div>
                                <a href="https://www.noahvogtli.com/" className="pl-2">
                    <svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="75" height="75" viewBox="0 0 400 400" className="pl-5 mr-10 fill-black hover:fill-red-700 transition-colors duration-300"  > 
                        <g id="svgg"> 
                        <path id="path0" d="M152.400 102.174 C 146.240 113.926,141.065 124.094,140.900 124.771 C 140.533 126.279,236.881 319.193,238.000 319.188 C 238.440 319.186,240.219 316.218,241.954 312.592 C 243.689 308.967,257.279 281.380,272.154 251.288 C 287.029 221.197,299.200 196.493,299.200 196.391 C 299.200 196.289,311.260 171.821,326.000 142.018 C 340.740 112.215,352.800 87.323,352.800 86.703 C 352.800 85.754,349.108 85.609,329.495 85.788 L 306.189 86.000 287.107 124.800 C 276.611 146.140,261.163 177.527,252.777 194.550 L 237.531 225.499 201.372 153.150 C 181.484 113.357,164.850 80.802,164.406 80.804 C 163.963 80.806,158.560 90.423,152.400 102.174 M120.800 170.427 C 120.800 170.881,113.025 186.991,103.522 206.227 C 67.638 278.861,48.800 317.450,48.800 318.322 C 48.800 318.976,55.308 319.165,72.440 319.012 L 96.081 318.800 121.919 267.717 L 147.758 216.634 134.885 193.117 C 123.203 171.775,120.800 167.903,120.800 170.427" fill-rule="evenodd"></path>
                        </g> 
                    </svg>
                </a>  
            </div>

            <div className="justify-center items-center flex basis-2/4">
                    <div className="hidden md:flex text-sm font-medium">            
                    <Link to="/#home"><p className="pr-8 hover:cursor-pointer hover:text-red-700 hover:transition-colors duration-300">Home</p></Link>
                    <Link to="/about"><p className="pr-8 hover:cursor-pointer hover:text-red-700 hover:transition-colors duration-300">About</p></Link>
                    <Link to="/#projects"><p className="pr-8 hover:cursor-pointer hover:text-red-700 hover:transition-colors duration-300">Projects</p></Link>
                    <Link to="/"><p className="hover:cursor-pointer hover:text-red-700 hover:transition-colors duration-300">Contact</p></Link>
                </div>
            </div>
            <div className="flex basis-1/4 md:justify-end ">
                <div className="md:hidden">
                    <SidebarTrigger className="ml-5" />
                </div>
            </div> 
            </nav>
        </>
        
    );
}

export default Navbar;