import React from 'react';
import brand1 from '../../../assets/brand/brand-(1).png'
import brand2 from '../../../assets/brand/brand-(2).png'
import brand3 from '../../../assets/brand/brand-(3).png'
import brand4 from '../../../assets/brand/brand-(4).png'

const Brand = () => {
    return (
        <div className='md:flex justify-center'>
            <img className='w-[350px]' src={brand1} alt="" />
            <img className='w-[350px]' src={brand2} alt="" />
            <img className='w-[350px]' src={brand3} alt="" />
            <img className='w-[350px]' src={brand4} alt="" />
        </div>
    );
};

export default Brand;