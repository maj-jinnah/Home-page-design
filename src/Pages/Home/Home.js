import React from 'react';
import Arivals from './Arivals/Arivals';
import BottomSwiper from './BottomSwiper/BottomSwiper';
import Deals from './Deals/Deals';
import TopSwiper from './Swiper/TopSwiper';

const Home = () => {
    return (
        <div>
            <TopSwiper></TopSwiper>
            <BottomSwiper></BottomSwiper>
            <div className='mt-[42px] mb-[26px] w-[1270px] mx-auto'>
                <hr />
            </div>
            <Arivals></Arivals>
            <Deals></Deals>
        </div>
    );
};

export default Home;