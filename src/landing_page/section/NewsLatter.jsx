import React from 'react';

const NewsLatter = () => {
    return (
        <section class="flex flex-col w-11/12 mx-auto overflow-hidden bg-white rounded-lg dark:bg-gray-800 md:flex-row md:h-48 border border-border">
            <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-primary md:dark:bg-gray-800">
                <div class="px-6 py-6 md:px-8 md:py-0 text-center md:text-left">
                    <h2 class="text-lg font-bold text-primary dark:text-white md:text-gray-100">Signup to Get Fresh Arrivals & Exciting New Finds!</h2>

                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">Stay in the loop with the latest GreenShop updates! Our product selection is constantly evolving to bring you the freshest and most exciting organic offerings.</p>
                </div>
            </div>
            <div class="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                <form>
                    <div class="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                        <input class="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email" />
                        <button class="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-success rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">subscribe</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default NewsLatter;