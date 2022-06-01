import React, { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import {Cart , Chat , Notification , UserProfile} from '.'
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
const NavButton = ({ title, color, customfunc, icon, dotColor }) => {
    
    return (
        <TooltipComponent content={title} position="BottomCenter">
            <button
                type="button"
                className="relative text-xl rounded-full p-3 hover:bg-light-gray " 
                onClick = {customfunc}
                style={{ color :color }}
                
            >
                <span
                    style={{background:dotColor}}
                    className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2 "
                />
                    {icon}
                
            </button>
        </TooltipComponent>
    );
}

const Navbar = () => {
   
    const {  setActivemenu, isClicked ,handleClick, screenSize, setscreenSize , currentColor} = useStateContext()
    useEffect(() => {
        const handleResize = () => setscreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.addEventListener('resize', handleResize);
    })
    
    useEffect(() => {
        if (screenSize <= 900) {
            setActivemenu(false);
        }
        else {
            setActivemenu(true);
        }

    },[screenSize])

    return (
        <div className="flex justify-between p-2 md:mx-6 relative">
            <NavButton
                title="Menu"
                color={currentColor}
                customfunc={()=>setActivemenu((prev) => !prev)}
                icon={<AiOutlineMenu/>}
            />
            <div className="flex">
            <NavButton
                title="Chart"
                color={currentColor}
                customfunc={()=>handleClick('cart')}
                icon={<FiShoppingCart/>}
                />
                <NavButton
                title="Notification"
                color={currentColor}
                customfunc={()=>handleClick('notification')}
                icon={<RiNotification3Line/>}
                />
                <NavButton
                title="chat"
                color={currentColor}
                customfunc={()=>handleClick('chat')}
                icon={<BsChatLeft/>}
                />

                <TooltipComponent content="Profile" position="BottomCenter">
                    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg "
                    onClick={()=>handleClick('userProfile')}
                    >
                        <img src={avatar} alt="avatar" className="rounded-full w-8 h-8" />
                        <p >
                            <span className="text-gray-400 text-14 ">
                                Hi, {' '} Moro 
                            </span>
                            <MdKeyboardArrowDown className="text-gray-400 text-14" />
                        </p>
                    </div>
                </TooltipComponent>
                {isClicked.chat && <Chat />}
                {isClicked.notification && <Notification />}
                {isClicked.cart && <Cart />}
                {isClicked.userProfile && <UserProfile/>}
            </div>
        </div>
    )
}

export default Navbar
