import { Button } from '@material-tailwind/react';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { FcRating, FcRatings } from 'react-icons/fc';
import { MdAttachMoney, MdCheck, MdDoneAll } from 'react-icons/md';

const ProductCard = ({product}) => {
    return (
        <div className='shadow-sm rounded-xl hover:shadow-xl hover:shadow-black/20 hover:cursor-pointer'>
            <div className='bg-secondary/10 rounded-xl relative'>
                <img src={product.image} className='h-32 lg:h-80 object-contain mx-auto py-2' alt="" />
                {
                    product.sale===true ? <span className='absolute text-xs bg-red-400 rounded-xl px-3 text-white top-2 left-2'>Sale</span> : ""
                }
            </div>
            <div className='pb-2'>
            <h2 className='text-center text-md font-semibold mt-2'>{product.name}</h2>
            <div className='flex gap-2 justify-center text-sm px-2'>
                <p className='flex items-center justify-center rounded border px-1'><MdAttachMoney className='text-green-800'/>{product.price}</p>
                <p className='flex items-center justify-center border gap-1 px-1 rounded'><MdDoneAll className='text-red-800'/> {product.pricePerUnit}</p>
            </div>
            <h2 className='text-center text-xs truncate ... mb-2 px-3'>{product.description}</h2>
            </div>
            <Button className='w-full bg-success'>Add to Cart</Button>
        </div>
    );
};

export default ProductCard;