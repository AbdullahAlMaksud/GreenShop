import { Button } from '@material-tailwind/react';
import React from 'react';
import { CgDarkMode } from 'react-icons/cg';
import { HiMagnifyingGlass } from "react-icons/hi2";
import DarkMode from '../../utilities/DarkMode';

const Navigation = () => {
    return (
        <div className='bg-transparent  h-16 flex items-center justify-between backdrop-blur-sm'>
            <div className='w-11/12 mx-auto flex items-center justify-between'>
            <a className='flex items-center'>
               <Button className='bg-transparent shadow-none hover:shadow-none h-full font-serif normal-case md:text-2xl text-2xl relative z-0 flex gap-0.5'> <img src="favicon.svg" className='md:w-12 w-12 absolute left-3 md:left-3.5 md:bottom-3 bottom-3 -z-10' alt="" /><span>G</span><span className='text-primary'>reenShop</span></Button>
               </a>
               <div className='flex gap-2 items-center'>
                   <Button className='bg-white/50 rounded-full px-.5 h-fit py-.5'><DarkMode/></Button>
                   <Button onClick={() => document.getElementById('newsletter').scrollIntoView({ behavior: 'smooth' })} className='lg:text-xs text-xs py-2.5 px-5 w-fit h-fit font-serif rounded-lg bg-success'>Sign up</Button>
               </div>
            </div>
        </div>
    );
};

export default Navigation;