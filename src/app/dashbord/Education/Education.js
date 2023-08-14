import React from 'react';

const Education = () => {
    return (
        <div className='' style={{boxShadow:'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'}}>
            <div className='flex justify-between p-4'  >
                <p className='text-2xl'>Education</p>
                <p className='text-2xl'>Edit</p>
            </div>
            
                <p className='text-2xl p-4'>IIT  HYDERABAD</p>
                <div className='flex justify-between px-2 py-1'>
                    <p> (2010-2014)  </p>       
                    <p> Btech</p>
                </div>
                <p className='px-2 py-1'>Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</p>
            
        </div>
    );
};

export default Education;