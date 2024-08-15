import React, { useState, useEffect } from 'react';
import SectionHeading from '../../components/SectionHeading';
import productsData from '../../../public/data/products.json';
import ProductCard from '../../components/ProductCard';
import { Option, Select } from '@material-tailwind/react';

const ProductShowcase = () => {
    const [products] = useState(productsData);
    const [filteredProducts, setFilteredProducts] = useState(productsData);
    const [sortCriteria, setSortCriteria] = useState('');
    const [filterCriteria, setFilterCriteria] = useState('All Products');
    const [visibleProducts, setVisibleProducts] = useState(8);

    useEffect(() => {
        let filtered = [...products];
        if (filterCriteria !== 'All Products') {
            if (filterCriteria === 'Sale') {
                filtered = filtered.filter(product => product.sale);
            } else {
                filtered = filtered.filter(product => product.category === filterCriteria);
            }
        }
        if (sortCriteria === 'Short by Name') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortCriteria === 'Sort by Date') {
            filtered.sort((a, b) => new Date(b.arrivalDate) - new Date(a.arrivalDate));
        } else if (sortCriteria === 'Sort by Price') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'Sort By Ratings') {
            filtered.sort((a, b) => b.rating - a.rating);
        }
        setFilteredProducts(filtered);
    }, [filterCriteria, sortCriteria, products]);

    const handleShowAll = () => {
        setVisibleProducts(filteredProducts.length);
    };

    return (
        <div id='productShowcase' className='w-11/12 mx-auto'>
            <SectionHeading
                heading={'Discover Our Products'}
                subheading={'Browse our curated collection of organic fruits, vegetables, and pantry essentials, all sourced from trusted farms and suppliers.'}
            />
            <div className='flex flex-col lg:flex-row justify-between items-center mt-5 mb-5 text-s gap-2 text-center text-sm lg:text-md rounded-lg px-4 py-4 shadow-md'>
                <div>
                    <button onClick={() => setFilterCriteria('All Products')} className=' rounded-md text-green-900 border-green-700 border hover:shadow-md shadow-black px-3 mr-2'>All Products</button> |
                    <button onClick={() => setFilterCriteria('Vegetables')} className=' rounded-md text-green-900 border-green-700 border hover:shadow-md shadow-black px-3 mx-2'>Vegetables</button>|
                    <button onClick={() => setFilterCriteria('Fruits')} className=' rounded-md text-green-900 border-green-700 border hover:shadow-md shadow-black px-3 mx-2'>Fruits</button>|
                    <button onClick={() => setFilterCriteria('Spinach')} className=' rounded-md text-green-900 border-green-700 border hover:shadow-md shadow-black px-3 mx-2'>Spinach</button>|
                    <button onClick={() => setFilterCriteria('Bakery')} className=' rounded-md text-green-900 border-green-700 border hover:shadow-md shadow-black px-3 mx-2'>Bakery</button>|
                    <button onClick={() => setFilterCriteria('Dairy')} className=' rounded-md text-green-900 border-green-700 border hover:shadow-md shadow-black px-3 mx-2'>Dairy</button>|
                    <button onClick={() => setFilterCriteria('Nuts')} className=' rounded-md text-green-900 border-green-700 border hover:shadow-md shadow-black px-3 mx-2'>Nuts</button>|
                    <button onClick={() => setFilterCriteria('Pantry')} className=' rounded-md text-green-900 border-green-700 border hover:shadow-md shadow-black px-3 mx-2'>Pantry</button>|
                    <button onClick={() => setFilterCriteria('Sale')} className=' rounded-md text-green-900 border-green-700 border hover:shadow-md shadow-black px-3 mx-2'>Sale</button>
                </div>
                <div className="w-60 text-left">
                    <Select label="Sorting" value={sortCriteria} onChange={(e) => setSortCriteria(e)}>
                        <Option value="Short by Name">Short by Name</Option>
                        <Option value="Sort by Date">Sort by Date</Option>
                        <Option value="Sort by Price">Sort by Price</Option>
                        <Option value="Sort By Ratings">Sort By Ratings</Option>
                    </Select>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {filteredProducts.slice(0, visibleProducts).map((product) => (
                    <div key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            {visibleProducts < filteredProducts.length && (
                <div className='text-center mt-5'>
                    <button onClick={handleShowAll} className='w-full py-2 border border-green-500 text-green-900 font-bold rounded-lg'>Show All</button>
                </div>
            )}
        </div>
    );
};

export default ProductShowcase;
