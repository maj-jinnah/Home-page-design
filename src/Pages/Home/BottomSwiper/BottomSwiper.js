import React from 'react';
import image1 from "../../../assets/BottomImg/1.png";
import image2 from "../../../assets/BottomImg/2.png";
import image3 from "../../../assets/BottomImg/3.png";
import image4 from "../../../assets/BottomImg/4.png";

const BottomSwiper = () => {
    return (
        <div className='h-[231px]'>
            <div className='flex gap-[32px] justify-center'>
                <div className='h-[199px] w-[272px] border-[1px] relative'>
                    <img src={image1} alt="" className='h-[197px] w-full object-cover' />
                    <div className='absolute top-[138px] -left-[9px] w-[269px] h-[49px] flex justify-around items-center bg-[#FEF9F9F2] shadow-lg'>
                        <p className='text-[25px]'>Electronics</p>
                        <p className='text-[21px] text-[#14B1F0]'>Shop</p>
                    </div>
                </div>
                <div className='h-[199px] w-[272px] border-[1px] relative'>
                    <img src={image2} alt="" className='h-[197px] w-full object-cover' />
                    <div className='absolute top-[138px] -left-[9px] w-[269px] h-[49px] flex justify-around items-center bg-[#FEF9F9F2] shadow-lg'>
                        <p className='text-[25px]'>Fashion</p>
                        <p className='text-[21px] text-[#14B1F0]'>Shop</p>
                    </div>
                </div>
                <div className='h-[199px] w-[272px] border-[1px] relative'>
                    <img src={image3} alt="" className='h-[197px] w-full object-cover' />
                    <div className='absolute top-[138px] -left-[9px] w-[269px] h-[49px] flex justify-around items-center bg-[#FEF9F9F2] shadow-lg'>
                        <p className='text-[25px]'>Appliances</p>
                        <p className='text-[21px] text-[#14B1F0]'>Shop</p>
                    </div>
                </div>
                <div className='h-[199px] w-[272px] border-[1px] relative'>
                    <img src={image4} alt="" className='h-[197px] w-full object-cover' />
                    <div className='absolute top-[138px] -left-[9px] w-[269px] h-[49px] flex justify-around items-center bg-[#FEF9F9F2] shadow-lg'>
                        <p className='text-[25px]'>Babies Store</p>
                        <p className='text-[21px] text-[#14B1F0]'>Shop</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomSwiper;


// style={{ background: `linear-gradient(to top, #F3EDC9 100%, #FFFFFF )` }}