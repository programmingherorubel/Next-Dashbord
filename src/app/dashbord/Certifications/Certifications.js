import React from 'react';
import logo from '../../img/logo.png'
import Image from 'next/image';

const Certifications = () => {
    return (
        <>
        <h5 className='text-2xl'>Certifications</h5>
            <div className='mt-2 rounded-lg text-start p-4' style={{boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}}>
                <div className='flex '>
                    <p>7 Years  (2014-2021) </p> <p>Full-time</p>
                    <Image
                        width={80}
                        height={80}
                        src={logo}
                        className='mx-8'
                    />
                </div>
                <div className='flex '>
                    <p>Oruphones </p> <p>Full Stack Developer</p>
                </div>
            </div>
            <div className='mt-2 rounded-lg text-start p-4' style={{boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}}>
                <div className='flex '>
                    <p>7 Years  (2014-2021) </p> <p>Full-time</p>
                    <Image
                        width={80}
                        height={80}
                        src={logo}
                        className='mx-8'
                    />
                </div>
                <div className='flex '>
                    <p>Oruphones </p> <p>Full Stack Developer</p>
                </div>
            </div>
        </>

    );
};

export default Certifications;