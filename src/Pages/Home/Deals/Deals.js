import React from 'react';
import image1 from '../../../assets/Deals/1.jfif';
import image2 from '../../../assets/Deals/2.jfif';
import image3 from '../../../assets/Deals/3.jfif';
import image4 from '../../../assets/Deals/4.jfif';
import image5 from '../../../assets/Deals/5.jfif';

const Deals = () => {
    return (
        <div>
            <div className='h-[59px] w-[1242px] flex items-center ml-20 mt-[41px] mb-7'>
                <div className='w-[380px]'>
                    <h1 className='text-[28px]'><span className='text-[#00CAD7]'>Best</span> Deals</h1>
                </div>
                <div className='flex gap-[11px] text-[19px]'>
                    <h1 className='text-[#00CAD7] mr-6 w-[190px] border-b-[3px] border-[#00CAD7]'>Kitchen Appliances</h1>
                    <h1 className='w-[120px]'>Consoles</h1>
                    <h1 className='w-[129px]'>TV & Videos</h1>
                    <h1 className='w-[130px]'>Cell Phones</h1>
                    <h1 className='w-[124px]'>Grocery</h1>
                </div>
            </div>
            <div className='flex mb-[81px] ml-[75px] gap-[15px]'>
                <div className='flex flex-col gap-4'>
                    <div className='w-[414px] h-[286px] p-[23px] border-[1px]' >
                        <div className='h-[124px] flex gap-9'>
                            <p className='flex flex-col w-[174px] '>
                                <span className='text-[20px]'>Nintendo Switch</span>
                                <span className='text-[20px]'>Console</span>
                                <span className='text-[#14B1F0] text-[24px]'>Rs.65,208</span>
                                <span className='text-[18px]'>Rs.<del>66,000</del></span>
                            </p>
                            <p>
                                <span className='text-[36px] text-[#00CAD7]'>Special</span><br />
                                <span className='text-[36px]'>Offer</span>
                            </p>
                        </div>
                        <div className='h-[120px] flex gap-14 items-center'>
                            <div className='h-[91px] w-[137px] bg-[#00C9FF] py-[16.5px] px-6 text-center flex flex-col justify-center items-center'>
                                <span className='text-2xl'>Save</span>
                                <span className='text-2xl'>10%</span>
                            </div>
                            <div>
                                <img src={image1} alt="" className='h-[120px] w-full object-cover' />
                            </div>
                        </div>
                    </div>
                    <div className='w-[414px] h-[286px] p-[23px] border-[1px] flex' >
                        <div className='h-[] w-[174px] flex flex-col justify-center my-auto gap-[2px]'>
                            <span className='text-3xl text-[#C82020]'>Special</span>
                            <span className='text-3xl'>Offer</span>
                            <span className='text-[20px]'>Nintendo Switch </span>
                            <span className='text-[24px] text-[#C82020]'>Rs.65,208 </span>
                            <span className='text-[18px]'>Rs.<del>66,000</del></span>
                            <span className='text-[18px] text-[#0AAEB9]'>Already Sold: 6 </span>
                            <span className='text-[18px] text-[#0AAEB9]'>Available: 30</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='h-[91px] w-[91px] rounded-full budsGradiant'>
                                <div className='h-[91px] text-center flex flex-col justify-center items-center'>
                                    <span className='text-2xl'>Save</span>
                                    <span className='text-2xl'>10%</span>
                                </div>
                            </div>
                            <div>
                                <img src={image2} alt="" className='h-[170px] w-full object-cover' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-[588px] w-[414px] border-[1px] pt-[23px] pl-[23px]'>
                    <div className='h-[459px] w-[371.5px] relative'>
                        <div>
                            <img src={image3} alt="" className='h-[459px] w-full object-cover' />
                        </div>
                        <div className='absolute top-0'>
                            <h1><span className='text-[32px] text-[#C82020]'>Special</span><br />
                                <span className='text-[32px]'>Offer</span></h1>
                        </div>
                        <div className='absolute top-0 -right-[18px] h-[141px] w-[141px] rounded-full bg-[#FF512F]'>
                            <div className='h-[141px] text-center flex flex-col justify-center items-center'>
                                <span className='text-4xl'>Save</span>
                                <span className='text-4xl'>10%</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-[20px]'>Nintendo Switch Console</p>
                        <span className='text-[24px] text-[#D22727] mr-[20px]'>Rs.65,208</span>
                        <span className='text-[18px]'>Rs.<del>66,000</del></span>
                        <p className='text-[18px] text-[#0AAEB9]'>
                            <span className='mr-[35px]'>Already Sold: 6</span>
                            <span>Available: 30</span></p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='w-[396px] h-[286px] p-[23px] border-[1px] flex' >
                        <div className='flex flex-col'>
                            <p className='flex flex-col w-[174px] mb-2'>
                                <span className='text-[20px]'>Nintendo Switch</span>
                                <span className='text-[20px]'>Console</span>
                                <span className='text-[#14B1F0] text-[24px]'>Rs.65,208</span>
                                <span className='text-[18px]'>Rs.<del>66,000</del></span>
                            </p>
                            <div className='h-[103px] w-[162px] bg-[#EECFCC] py-[36.5px] px-[7.5px] text-center flex flex-col justify-center items-center'>
                                <span className='text-4xl'>Save</span>
                                <span className='text-4xl'>10%</span>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <div className='h-[86px]'>
                                <h1 className='text-4xl text-right'>Special <br /> Offer</h1>
                            </div>
                            <div>
                                <img src={image4} alt="" className='h-[156px] w-full object-cover' />
                            </div>
                        </div>
                    </div>
                    <div className='w-[396px] h-[286px] p-[23px] border-[1px] pt-[23px] pl-[23px] relative' >
                        <div className='h-[156px] w-[212px]  '>
                            <div>
                                <img src={image5} alt="" className='w-full object-cover ml-[51.5px]' />
                            </div>
                            <div className='absolute top-0 pt-[23px]'>
                                <h1><span className='text-[32px] text-[#C82020]'>Special</span><br />
                                    <span className='text-[32px]'>Offer</span></h1>
                            </div>
                            <div className='absolute top-0 right-[2px] h-[141px] w-[141px] rounded-full bg-[#F09819] mt-[23px]'>
                                <div className='h-[141px] text-center flex flex-col justify-center items-center'>
                                    <span className='text-4xl'>Save</span>
                                    <span className='text-4xl'>10%</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className='text-[20px]'>Nintendo Switch Console</p>
                                <span className='text-[24px] text-[#B8A023] mr-[20px]'>Rs.65,208</span>
                                <span className='text-[18px]'>Rs.<del>66,000</del></span>
                                <p className='text-[18px] text-[#C82020]'>
                                    <span className='mr-[35px]'>Already Sold: 6</span>
                                    <span>Available: 30</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deals;