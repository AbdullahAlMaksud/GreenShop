// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import bannerData from '../../../public/data/banner-data.json'
import { Button } from '@material-tailwind/react';


const Banner = () => {
    return (
        <div>
            <>
                <Swiper
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {
                        bannerData.map((data) => 
                        <SwiperSlide
                        className='min-h-72'
                        style={{
                            background: `url(${data.backgroundImage}) no-repeat`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <div className='flex gap-3 w-11/12 mx-auto flex-col justify-center min-h-72'>
                            <h2 className='text-4xl'>{data.headline}</h2>
                            <h2 className='text-xl'>{data.subheadline}</h2>
                            <Button className='w-fit bg-primary'>{data.ctaButton}</Button>
                        </div>
                    </SwiperSlide>
                    
                        
                    )
                    }
                </Swiper>
            </>
        </div>
    );
};

export default Banner;