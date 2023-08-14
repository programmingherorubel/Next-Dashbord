import About from '../About/About';
import Certifications from '../Certifications/Certifications';
import DashbordNavbar from '../DashbordNavbar/DashbordNavbar';
import Education from '../Education/Education';
import FastPart from '../FastPart/FastPart';
import SecondPart from '../SecondPart/SecondPart';
import Skill from '../Skill/Skill';

const MyProfile = () => {
    return (
        <div>
            <DashbordNavbar></DashbordNavbar>
            <div className='rounded-lg bg-[#1E2875] h-[169px] w-full'><h5 className='text-2xl text-white'>My Profile</h5></div>
            <div className='mt-[-100px] w-[90%] rounded-md	p-8 mx-auto bg-white'>
            <FastPart></FastPart>
            <div className='grid md:grid-cols-2 gap-10 mt-6 justify-between h-auto'>
                <div><SecondPart></SecondPart></div>
                <div className='rounded-2xl'><Certifications></Certifications></div>
                <About></About>
                <Education></Education>
                <Skill></Skill>
            </div>
            </div>
           
        </div>
    );
};

export default MyProfile;