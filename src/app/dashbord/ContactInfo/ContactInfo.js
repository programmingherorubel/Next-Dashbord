import React from 'react';

const ContactInfo = () => {
    return (
        <div className='mt-4 p-6' style={{boxShadow:'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}} >
            <p className='text-gray-500'>Your Name</p>
            <div className='flex justify-between'>
                <h5 className='text-bold'>Md Rubel</h5>
                <h5 className='text-bold'>Edit</h5>
            </div>

            <p className='text-gray-500 mt-2'>Email</p>
            <div className='flex justify-between'>
                <h5 className='text-bold'>md.rubel007@hotmail.com</h5>
                <h5 className='text-bold'>Edit</h5>
            </div>

            <p className='text-gray-500 mt-2'>Phone Number</p>
            <div className='flex justify-between'>
                <h5 className='text-bold'>+88 01907626245</h5>
                <h5 className='text-bold'>Edit</h5>
            </div>
        </div>
    );
};

export default ContactInfo;