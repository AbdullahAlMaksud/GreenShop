import React from 'react';
import SectionHeading from '../../components/SectionHeading';
import { BiBullseye } from 'react-icons/bi';
import { MdLocalOffer } from 'react-icons/md';
import { IoCheckboxOutline } from 'react-icons/io5';

const AboutUs = () => {
    return (
        <div className="w-11/12 mx-auto">
            <SectionHeading heading={'About Us'} subheading={'At GreenShop, we are passionate about bringing you the freshest and most natural products. Our dedication to organic farming and sustainable practices ensures that every item we offer is not only good for you but also kind to the planet. Discover the difference in every bite, as we work to make healthy living accessible and enjoyable for everyone.'} />

            <div className='font-serif'>
                <div className='grid md:grid-cols-3 gap-3'>
                    
                    <div className='rounded-xl shadow-md mt-5 px-4 py-5 flex flex-col items-center relative overflow-clip'>
                        <BiBullseye className='text-7xl md:text-[7rem] text-red-300 absolute -top-4 -left-5 opacity-20'/>
                        <h2 className='text-lg md:text-2xl font-serif font-bold'>Our Mission</h2>
                        <p className='text-xs md:text-sm font-serif'> Our mission is to provide our community with a wide range of organic and eco-friendly products that support a healthier lifestyle and a cleaner planet. We are dedicated to sourcing our products from trusted suppliers who share our values of sustainability and quality.</p>
                    </div>

                    <div className='rounded-xl shadow-md px-2 py-5 mt-5 flex flex-col items-center relative overflow-clip'>
                        <MdLocalOffer className='text-7xl md:text-[7rem] text-green-300 absolute -top-4 -left-5 opacity-20'/>
                        <h2 className='text-lg md:text-2xl font-serif font-bold'>What We Offer</h2>

                        <ul className="list-disc pl-4 text-xs md:text-sm mt-2">
                            <li>Farm-fresh fruits and vegetables</li>
                            <li>Premium pantry staples</li>
                            <li>Organic groceries, personal care items, and household essentials</li>
                        </ul>
                    </div>
                    <div className='rounded-xl shadow-md px-2 py-5 mt-5 flex flex-col items-center relative overflow-clip'>
                        <IoCheckboxOutline className='text-[10rem] md:text-[10rem] text-green-300 absolute -top-7 -left-10 opacity-20'/>
                        <h2 className='text-lg md:text-2xl font-serif font-bold'>Why Choose GreenShop?</h2>
                        <ul className="list-disc pl-4 text-xs md:text-sm mt-2">
                            <li><strong>Quality Assurance:</strong> We meticulously select our products to meet high standards of quality and sustainability.</li>
                            <li><strong>Eco-Friendly Practices:</strong> We are committed to reducing our environmental impact through eco-friendly packaging and sustainable practices.</li>
                            <li><strong>Customer-Centric Service:</strong> Our team is dedicated to providing exceptional service and support, ensuring that your shopping experience is enjoyable and convenient.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;