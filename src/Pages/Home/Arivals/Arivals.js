import React from 'react';
import image1 from "../../../assets/MiddleImg/1.jfif";
import image2 from "../../../assets/MiddleImg/2.png";
import image3 from "../../../assets/MiddleImg/3.png";
import image4 from "../../../assets/MiddleImg/4.png";
import image5 from "../../../assets/MiddleImg/5.png";
import image6 from "../../../assets/MiddleImg/6.png";

const Arivals = () => {
    return (
        <div className='h-[459px] py-[46px]'>
            <p className='text-[28px] mb-[23.5px] pl-[105px]'><span className='text-[#00CAD7]'>New</span>  Arrivals</p>
            <div className='flex gap-[31px] px-[75px] mx-auto'>
                <div className='h-[287px] w-[186px] border-[1px] p-[14px]'>
                    <p className='text-xs'>Bin Bakar Electronics</p>
                    <h1 className='text-[15px]'>Samsung 40N5300 S..</h1>
                    <img src={image1} alt="" className='h-[129px] w-full object-cover' />
                    <div className='flex items-center justify-start gap-[8px] my-[11px]'>
                        <span className='text-[13px] text-[#697475]'><del>RS 60.000</del></span>
                        <span className='text-[15px] text-[#0AAEB9]'>RS 56.000</span>
                    </div>
                    <button className='w-[158px] h-[35px] bg-[#15ADB7] text-[15px] text-white'>
                        Add to cart
                    </button>
                </div>
                <div className='h-[287px] w-[186px] border-[1px] p-[14px]'>
                    <p className='text-xs'>Bin Bakar Electronics</p>
                    <h1 className='text-[15px]'>Samsung Automatic..</h1>
                    <img src={image1} alt="" className='h-[129px] w-full object-cover' />
                    <div className='flex items-center justify-start gap-[8px] my-[11px]'>
                        <span className='text-[13px] text-[#697475]'><del>RS 60.000</del></span>
                        <span className='text-[15px] text-[#0AAEB9]'>RS 56.000</span>
                    </div>
                    <button className='w-[158px] h-[35px] bg-[#15ADB7] text-[15px] text-white'>
                        Add to cart
                    </button>
                </div>
                <div className='h-[287px] w-[186px] border-[1px] p-[14px]'>
                    <p className='text-xs'>Bin Bakar Electronics</p>
                    <h1 className='text-[15px]'>Haier HSU-12HFMAC ..</h1>
                    <img src={image1} alt="" className='h-[129px] w-full object-cover' />
                    <div className='flex items-center justify-start gap-[8px] my-[11px]'>
                        <span className='text-[13px] text-[#697475]'><del>RS 60.000</del></span>
                        <span className='text-[15px] text-[#0AAEB9]'>RS 56.000</span>
                    </div>
                    <button className='w-[158px] h-[35px] bg-[#15ADB7] text-[15px] text-white'>
                        Add to cart
                    </button>
                </div>
                <div className='h-[287px] w-[186px] border-[1px] p-[14px]'>
                    <p className='text-xs'>Bin Bakar Electronics</p>
                    <h1 className='text-[15px]'>Anex Roti Maker ..</h1>
                    <img src={image1} alt="" className='h-[129px] w-full object-cover' />
                    <div className='flex items-center justify-start gap-[8px] my-[11px]'>
                        <span className='text-[13px] text-[#697475]'><del>RS 60.000</del></span>
                        <span className='text-[15px] text-[#0AAEB9]'>RS 56.000</span>
                    </div>
                    <button className='w-[158px] h-[35px] bg-[#15ADB7] text-[15px] text-white'>
                        Add to cart
                    </button>
                </div>
                <div className='h-[287px] w-[186px] border-[1px] p-[14px]'>
                    <p className='text-xs'>Bin Bakar Electronics</p>
                    <h1 className='text-[15px]'>Gree GS-12FITH..</h1>
                    <img src={image1} alt="" className='h-[129px] w-full object-cover' />
                    <div className='flex items-center justify-start gap-[8px] my-[11px]'>
                        <span className='text-[13px] text-[#697475]'><del>RS 60.000</del></span>
                        <span className='text-[15px] text-[#0AAEB9]'>RS 56.000</span>
                    </div>
                    <button className='w-[158px] h-[35px] bg-[#15ADB7] text-[15px] text-white'>
                        Add to cart
                    </button>
                </div>
                <div className='h-[287px] w-[186px] border-[1px] p-[14px]'>
                    <p className='text-xs'>Bin Bakar Electronics</p>
                    <h1 className='text-[15px]'>Gree Air Conditioner..</h1>
                    <img src={image1} alt="" className='h-[129px] w-full object-cover' />
                    <div className='flex items-center justify-start gap-[8px] my-[11px]'>
                        <span className='text-[13px] text-[#697475]'><del>RS 60.000</del></span>
                        <span className='text-[15px] text-[#0AAEB9]'>RS 56.000</span>
                    </div>
                    <button className='w-[158px] h-[35px] bg-[#15ADB7] text-[15px] text-white'>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Arivals;