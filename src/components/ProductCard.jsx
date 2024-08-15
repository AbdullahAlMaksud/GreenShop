import { Button } from '@material-tailwind/react';
import React from 'react';
import { BiDetail } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { FcRating, FcRatings } from 'react-icons/fc';
import { MdAttachMoney, MdCheck, MdDoneAll } from 'react-icons/md';

const ProductCard = ({ product }) => {
    return (
        <div className='shadow-sm rounded-xl relative group'>

            <div>
                <div className='bg-secondary/10 rounded-xl relative'>
                    <img src={product.image} className='h-32 lg:h-80 object-contain mx-auto py-2' alt="" />
                    {
                        product.sale === true ? <span className='absolute text-xs bg-red-400 rounded-xl px-3 text-white top-2 left-2'>Sale</span> : ""
                    }
                </div>
                <div className='pb-2'>
                    <h2 className='text-center text-md font-semibold mt-2'>{product.name}</h2>
                    <div className='flex gap-2 justify-center text-sm px-2'>
                        <p className='flex items-center justify-center rounded border px-1'><MdAttachMoney className='text-green-800' />{product.price}</p>
                        <p className='flex items-center justify-center border gap-1 px-1 rounded'><MdDoneAll className='text-red-800' /> {product.pricePerUnit}</p>
                    </div>
                    <h2 className='text-center text-xs truncate ... mb-2 px-3'>{product.description}</h2>
                </div>
            </div>
            <div className='absolute h-full w-full bg-green-400/40 items-center flex justify-center -bottom-20 duration-500 scroll-smooth group-hover:bottom-0 opacity-0 group-hover:opacity-100 hover:backdrop-blur-md rounded-xl'>
                <div className='flex flex-col justify-center items-center px-5 text-center'>

                    <h2 className='font-bold'>{product.name}</h2>
                    <p className='text-xs hidden md:flex'>{product.description}</p>
                    <div className='bg-white/40 px-5 py-2 rounded-lg border border-border mt-2 text-xs font-sans'>
                    <p className=''><span className='font-semibold'>Arrived:</span> <br className='flex md:hidden'/> {product.arrivalDate}</p>
                    <p className=''><span className='font-semibold'>Rating: </span><br className='flex md:hidden'/>  {product.rating}</p>
                    <p className=''><span className='font-semibold'>Price:</span> <br className='flex md:hidden'/>  ${product.price}/{product.pricePerUnit}</p>
                    </div>
                    <div className='flex mt-2 md:mt-5 gap-2 items-center justify-center'>
                    <Button className='bg-success max-h-10 px-10 py-2 font-normal md:hidden flex'>+</Button>
                    <Button className='bg-success max-h-10 px-5 py-2 lg:px-10 lg:py-3 font-normal hidden md:flex'>Add to Cart</Button>
                    <Button className='max-h-10 lg:px-3 lg:py-3 px-2 py-2'><BiDetail className='text-sm md:text-lg'/></Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductCard;