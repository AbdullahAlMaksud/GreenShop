import React from 'react';
import Navigation from './section/Navigation';
import Banner from './section/Banner';
import ProductShowcase from './section/ProductShowcase';
import CustomerReviews from './section/CustomerReviews';
import AboutUs from './section/AboutUs';
import NewsLatter from './section/NewsLatter';
import Footer from './section/Footer';

const LandingPage = () => {
    return (
        <div className='dark:bg-gray-900 dark:text-white'>
            <nav className='z-10 fixed w-full'>
            <Navigation />
            </nav>

            <section className='z-10 dark:text-green-900'>
                <Banner />
            </section>
            <section className='pt-10 z-10'>
                <ProductShowcase />
            </section>
            <section className='pt-10 -z-10'>
                <CustomerReviews />
            </section>
            <section className='pt-10 pb-10 -mt-4 z-20 rounded-xl bg-white dark:bg-gray-900'>
                <AboutUs />
            </section>
            <section id='newsletter'>
                <NewsLatter />
            </section>

            <footer className='pt-10'>
                <Footer />
            </footer>
        </div>
    );
};

export default LandingPage;