import React, { useRef, useState } from "react";
import image from "../../../assets/SwiperImg/bgimg.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const TopSwiper = () => {
    return (
        <div className="h-[344px]">
            {/* <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="h-[240px] w-[490] p-6">
                        <h1><span className="text-[57px]">Shop</span> <span className="text-[57px] text-[#14B1F0]">Computer</span> <br /> <span className="text-[57px] text-[#14B1F0]">& experience</span></h1>
                        <p className="text-[13px]">You cannot inspect quality into the product; it is already there. <br />
                            I am not a product of my circumstances. I am a product of my decisions.</p>
                        <button className="h-[40px] w-[152px] bg-[#14B1F0] text-white rounded-[5px]">
                            View More
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper> */}

            <div className="flex items-start justify-between" style={{ backgroundImage: `url(${image})` }}>
                <div className="h-[340px] w-[490px] p-6 ml-[85px]">
                    <h1><span className="text-[57px]">Shop</span> <span className="text-[57px] text-[#14B1F0]">Computer</span> <br /> <span className="text-[57px] text-[#14B1F0]">& experience</span></h1>
                    <p className="text-[13px]">You cannot inspect quality into the product; it is already there. <br />
                        I am not a product of my circumstances. I am a product of my decisions.</p>
                    <button className="h-[40px] w-[152px] bg-[#14B1F0] text-white rounded-[5px] mt-1">
                        View More
                    </button>
                </div>
                <div className="pt-[52px] ">
                    <div className="h-[165px] w-[165px] rounded-full text-[47px] text-white mr-[150px] flex items-center justify-center radialGradiant"
                    >
                        <h1>40% <br /> Off</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSwiper;