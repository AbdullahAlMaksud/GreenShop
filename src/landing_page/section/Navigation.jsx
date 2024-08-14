import { Button } from '@material-tailwind/react';
import React from 'react';
import { CgDarkMode } from 'react-icons/cg';
import { HiMagnifyingGlass } from "react-icons/hi2";

const Navigation = () => {
    return (
        <div className='bg-gray-900 h-20 flex items-center justify-between'>
            <div className='w-11/12 mx-auto flex items-center justify-between'>
            <a className='flex items-center'>
               
               <Button className='bg-transparent shadow-none hover:shadow-none h-full font-serif capitalize md:text-3xl text-2xl relative z-0'> <img src="favicon.svg" className='md:w-14 w-10 absolute left-3 md:bottom-2 bottom-4 -z-10' alt="" />GreenShop</Button>
               </a>
   
               <div className='flex gap-2'>
                   <Button className='text-2xl bg-gray-700 px-3 py-3 rounded-full'><HiMagnifyingGlass /></Button>
                   <Button className='text-2xl bg-gray-700 px-3 py-3 rounded-full'><CgDarkMode/></Button>
               </div>
            </div>
            
        </div>
    );
};

export default Navigation;