import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { BiBorderRadius } from 'react-icons/bi';

const ThemeSettings = () => {
    const { currentColor,
        currentMode,
        setMode,
        setColor,setthemeSettings } = useStateContext();
    return (
        
        <div className=" bg-half-transparent w-screen fixed nav-item top-0 right-0 ">
            <div className="float-right h-screen dark:text-gray-400 bg-white dark:[#484B52] w-400 ">
                <div className="flex justify-between items-center p-4 ml-4 ">
                    <p className="font-semibold text-xl ">
                        Settings
                    </p>
                    <button
                        type="button"
                        className="text-2xl p-4 hover:drop-shadow-xl hover:bg-gray-400"
                        style={{ color: 'blue', borderRadius: "50%" }}
                        onClick={()=>setthemeSettings(false)}
                    >
                        <MdOutlineCancel /> 
                    </button>

                </div>
                <div className="flex-col border-color border-t-1 p-4 ml-4">
                    <p className="font-semibold text-lg">
                        Theme Mode
                    </p>
                    <div className="mt-4">
                        <input
                            type="radio"
                            id="light"
                            name="theme"
                            value="Light"
                            className="cursor-pointer"
                            onChange={() => setMode('light')}
                            checked={currentMode ==='Light'}
                        />
                        <label 
                            htmlFor="light"
                            className='ml-4 cursor-pointer text-md'
                        >
                            Light
                        </label>
                    </div>
                    <div className="mt-4">
                        <input
                            type="radio"
                            id="dark"
                            name="theme"
                            value="Dark"
                            className="cursor-pointer"
                            onChange={()=>setMode('dark')}
                            checked={currentMode ==='Dark'}
                        />
                        <label 
                            htmlFor="dark"
                            className='ml-4 cursor-pointer text-md'
                        >
                            Dark
                        </label>
                    </div>
                </div>
                <div className="flex-col border-color border-t-1 p-4 ml-4">
                    <p className="font-semibold text-lg">
                        Theme Colors
                    </p>
                    <div className="flex gap-3">
                    {themeColors.map((item, index) =>
                        <TooltipComponent key={index} position='TopCenter' content={item.name}>
                            <div className="relative mt-2 flex gap-5 items-center cursor-pointer ">
                            <button
                            type="button"
                            style={{ backgroundColor: item.color }}
                            className={`rounded-full h-10 w-10 cursor-pointer `}
                            onClick={() =>setColor(item.color) }
                                    
                        >
                                    <BsCheck className={ `${ currentColor === item.color ? 'block' : 'hidden' } text-white text-2xl ml-2`}/>
                        </button>
                            </div>
                        </TooltipComponent>
                      
                    )}
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default ThemeSettings
