import React, { useState, useEffect } from 'react';
import SectionHeading from '../../components/SectionHeading';
import ReviewCard from '../../components/ReviewCard';
import reviews from '../../../public/data/customerReview.json';
import Marquee from 'react-fast-marquee';

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};
const CustomerReviews = () => {
    const [shuffledReviews, setShuffledReviews] = useState([]);
    useEffect(() => {
        setShuffledReviews(shuffleArray([...reviews]));
    }, [reviews]);

    return (
        <div className="bg-[url('bg.svg')] bg-cover bg-top lg:bg-[url('lg-bg.svg')] bg-no-repeat pb-8">
            <SectionHeading heading={'What Our Customers Say'} subheading={"At GreenShop, we pride ourselves on delivering exceptional service and high-quality organic products. But don't just take our word for it—hear directly from our valued customers!"}/>
            <div >
                <div className="w-11/12 mx-auto">
                <Marquee pauseOnHover={true} speed={30}>
   
                    <div className="flex flex-wrap justify-center">
                        {shuffledReviews.map((review) => ( 
                            <ReviewCard key={review.id} review={review} />
                        ))}
                    </div>
                        </Marquee>
                </div>
            </div>

        </div>
    );
};

export default CustomerReviews;
