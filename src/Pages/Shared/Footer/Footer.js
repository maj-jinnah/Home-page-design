import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import img1 from '../../../assets/Cards/1.png';
import img2 from '../../../assets/Cards/2.png';
import img3 from '../../../assets/Cards/3.png';
import img4 from '../../../assets/Cards/4.png';

const Footer = () => {
    return (
        <div>
            <div className='h-[404px] py-14 px-[149px] bg-[#393939]'>
                <div className='h-[227px] w-[1105px] flex gap-28'>
                    <div className='w-[260px] h-[213px] flex flex-col'>
                        <div className='w-[132px] h-[48px] text-white border-[1px] border-white'>
                            <p><span className='text-3xl'>Win</span> Stor</p>
                        </div>
                        <p className='text-lg text-[#00CAD7]'>Got questions? Call us 24/7!</p>
                        <div className='text-[13px] py-[14px] text-white'>
                            <p>03 111 666 144</p>
                            <p>0317 1777015.</p>
                        </div>
                        <div>
                            <p className='text-[15px] text-[#00CAD7]'>Contact info</p>
                            <p className='text-[13px] text-white mb-[14px]'>info@winstore.pk</p>
                        </div>
                        <div className='flex items-center gap-[24px] text-white'>
                            <FaFacebookF className='text-[20px]'></FaFacebookF>
                            <BsTwitter className='text-[20px]'></BsTwitter>
                            <FaLinkedinIn className='text-[20px]'></FaLinkedinIn>
                            <GrInstagram className='text-[20px]'></GrInstagram>
                        </div>
                    </div>
                    <div className=' text-white'>
                        <p className='text-[20px] mb-[21px] text-[#00CAD7]'>Trending</p>
                        <p className='text-[13px] mb-3'>Installments</p>
                        <p className='text-[13px] mb-3'>Electronics</p>
                        <p className='text-[13px] mb-3'>Grocery</p>
                        <p className='text-[13px] mb-3'>Health & Beauty</p>
                        <p className='text-[13px] mb-3'>Home Appliances</p>
                        <p className='text-[13px] mb-3'>Mobile Accessories</p>
                    </div>
                    <div className=' text-white flex flex-col justify-start'>
                        <p className='text-[20px] mb-[21px] text-[#00CAD7]'>Information</p>
                        <p className='text-[13px] mb-3'>About Us</p>
                        <p className='text-[13px] mb-3'>Contact Us</p>
                        <p className='text-[13px] mb-3'>FAQs</p>
                        <p className='text-[13px] mb-3'>Shipping & Return</p>
                        <p className='text-[13px] mb-3'>Privacy policy</p>
                        <p className='text-[13px] mb-3'>Terms & Conditions</p>
                    </div>
                    <div className=' text-white flex flex-col justify-start'>
                        <p className='text-[20px] mb-[21px] text-[#00CAD7]'>Customer Care</p>
                        <p className='text-[13px] mb-3'>My Account</p>
                        <p className='text-[13px] mb-3'>Track Your Order</p>
                        <p className='text-[13px] mb-3'>Recently Viewed</p>
                        <p className='text-[13px] mb-3'>Wishlist</p>
                        <p className='text-[13px] mb-3'>Compare</p>
                        <p className='text-[13px] mb-3'>Become a Vendor</p>
                    </div>
                </div>
                <div className='h-[55px] flex justify-end gap-[11px] mt-[35px]'>
                    <div className='h-[53px] w-[97px] rounded-[5px] bg-white flex justify-center items-center'>
                        <div>
                            <img src={img1} alt="" className=' w-full object-cover' />
                        </div>
                    </div>
                    <div className='h-[53px] w-[97px] rounded-[5px] bg-white flex justify-center items-center'>
                        <div>
                            <img src={img2} alt="" className=' w-full object-cover' />
                        </div>
                    </div>
                    <div className='h-[53px] w-[97px] rounded-[5px] bg-white flex justify-center items-center'>
                        <div className='h-[50px] w-[95px]'>
                            <img src={img3} alt="" className='h-full w-full object-cover' />
                        </div>
                    </div>
                    <div className='h-[53px] w-[97px] rounded-[5px] bg-white flex justify-center items-center'>
                        <div>
                            <img src={img4} alt="" className=' w-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[59px] bg-[#161616]'>
                <h1 className='pt-[21px] text-[18px] text-white ml-[124px]'>© 2021 Winstore. All Rights Reserved.</h1>
            </div>
        </div>
    );
};

export default Footer;