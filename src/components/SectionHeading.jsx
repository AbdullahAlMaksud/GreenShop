import React from 'react';

const SectionHeading = ({heading, subheading}) => {
    return (
        <div className='text-center'>
            <h2 className='text-green-700 text-xl md:text-3xl font-sans font-bold'>{heading}</h2>
            <h2 className='md:w-4/6 mx-auto pt-2 text-xs text-gray-600'>{subheading}</h2>
        </div>
    );
};

export default SectionHeading;