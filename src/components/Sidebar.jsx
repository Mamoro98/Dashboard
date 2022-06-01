import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
const Sidebar = () => {
    const { Activemenu, setActivemenu, screenSize, currentColor } = useStateContext();
    const handleCloseSidebar = () => {
        if (screenSize <= 900 && Activemenu) {
            setActivemenu(false);
        }
    }
    //const [Activemenu, setActivemenu] = useState(true);
    
    // const Activeclass = {`flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-${currentColor} text-md m-2`};
    const Normalclass = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray';
    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {
                Activemenu && (
                    <>

                    <div className="flex justify-between items-center">
                            <Link
                                to="/"
                                onClick={handleCloseSidebar}
                                className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                            <SiShopware />
                            <span>
                                Shoppy
                            </span>
                        </Link>
                        <TooltipComponent content="Menu" position="BottomCenter">
                                <button type="button"
                                    onClick={()=>setActivemenu((prev)=>!prev)}
                                    className="p-4 block text-xl mt-4 hover:bg-light-gray rounded-full ">
                                    <MdOutlineCancel />
                                </button>
                            </TooltipComponent>
                            
                        </div>
                        <div className="mt-10">
                            {
                                links.map(item =>
                                    <div key={item.title} >
                                        <p className="mt-4 text-gray-500 m-3 uppercase">
                                            {item.title}
                                        </p>
                                        {
                                            item.links.map(link => (
                                                <NavLink to={`/${link.name}`}
                                                    key={link.name}
                                                    onClick={handleCloseSidebar}
                                                    className={({ isActive }) =>
                                                    isActive ? `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-${currentColor} text-md m-2 text-bold text-xl` : Normalclass
                                                    }
                                                    
                                                >
                                                    {link.icon}
                                                    <span className="capitalize">
                                                        {link.name}
                                                    </span>
                                                </NavLink>
                                            )
                                        )
                                        }
                                </div>
                            )
                            }

                            </div>
                        </>
                )

            }
        </div>
    )
}

export default Sidebar
