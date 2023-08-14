import React from 'react';
import img from '../../img/rubel.jpg'
import icon from '../../img/icon.PNG'
import Image from 'next/image';

const FastPart = () => {
    return (
     
                <div className='flex items-center flex-wrap justify-between'>
                    <Image
                        src={img}
                        width={100}
                        height={100}
                        style={{ borderRadius: '50%' }}
                        alt="user profile picture"
                    />

                    <input type="file" class=" text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100
                        "/>

                    <div className='flex justify-between items-center p-4 '  style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'}}>
                        <div>
                        <h5><b>Professional Details</b></h5>
                        <p>This are the professional details <br/> shown to users in the app.</p>
                        </div>
                        <Image
                        src={icon}
                        width={50}
                        height={50}
                        style={{borderRadius:'50%'}}
                        alt="user profile picture"
                    />
                    </div>
                </div>
        
       
    );
};

export default FastPart;