import React from 'react';

const Skill = () => {
    return (
        <div style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}>
            <div className='p-4 flex justify-between' >
                <p className='text-2xl '>Skill</p>
                <p className='text-2xl '>Edit</p>
            </div>
            <ul className='p-4'>
                <li>Node Js</li>
                <li>Type Script</li>
            </ul>
        </div>
    );
};

export default Skill;