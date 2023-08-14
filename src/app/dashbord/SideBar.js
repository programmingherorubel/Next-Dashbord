import Link from "next/link";

const sidebar = () => {
    const myDashbordRoute = [
        {
            title:'My Profile',
            path:'/dashbord/myprofile'
        },
        {
            title:'My Connection',
            path:'/dashbord/myconnection'
        },
    ]
    
    return (
        <div className='sidebar'>
            <div className="text-center"><h4 className='inline-block p-2 mx-auto text-2xl mt-7 border'>Dashbord</h4></div>
            <ul className='mt-4'>
                
                {
                    myDashbordRoute.map((item)=>{
                        return <li className="mt-4"><Link className="text-2xl" href={item.path}>{item.title}</Link></li>
                    })
                }
            </ul>
            <p className="text-2xl" style={{marginTop:'100%'}}>Logout</p>
        </div>
    );
};

export default sidebar;