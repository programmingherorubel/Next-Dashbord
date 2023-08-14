import { IoIosNotificationsOutline } from 'react-icons/io'
import Image from 'next/image';
import img from '../../img/rubel.jpg'
import logo from '../../img/logo.png'



const DashbordNavbar = () => {

    return (
        <div className='bg-[white]'>
            <div className='flex justify-between lg:justify-end px-10'>
                <div className='customhambaurger flex gap-5' style={{ visibility: 'hidden' }}>
                    <div>
                        <span className='mt-2 h-[4px]  block w-[20px] bg-blue-950'></span>
                        <span className='mt-2 h-[4px]  block w-[30px] bg-yellow-500'></span>
                        <span className='mt-2 h-[4px]  block w-[20px] bg-blue-950'></span>
                    </div>
                    <Image
                            src={logo.src}
                            width={60}
                            height={80}
                            alt="user profile picture"
                        />
                </div>
                <div className='flex gap-2 items-end px-3 py-1' style={{ border: '1px solid #FFFFF0' }}>
                    <IoIosNotificationsOutline className='text-3xl' />
                    <div className='flex gap-4'>
                        <Image
                            src={img.src}
                            width={50}
                            height={50}
                            style={{ borderRadius: '50%' }}
                            alt="user profile picture"
                        />
                        <div>
                            <h4>Welcome Back</h4>
                            <h3 className='text-lg'>Md Rubel</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashbordNavbar;