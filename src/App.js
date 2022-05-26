import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const App = () => {
    const activeMenu = false;
    return (
        <div>
            <BrowserRouter>
                <div className="felx relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{zIndex:'1000' }}>
                        <TooltipComponent content="Settings" position="Top">
                            <button type="button" className="p-4 text-3xl hover:drop-shadow-x1 hover:bg-light-gray text-white" style={{backgroundColor:"blue", borderRadius:"50%"}}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="fixed w-72 dark:bg-secondary-dark-bg sidebar bg-white"
                        >sidebar</div>
                                                 )
                        : (
                            <div className="w-0 dark:bg-secondary-dark-bg">
                                not visiable sidebar
                            </div>
                        )
                }
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
