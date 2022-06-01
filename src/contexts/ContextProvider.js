import React, { useState, useContext, createContext } from 'react';

const StateContext = createContext();

const initalState = {
    chat: false,
    userProfile: false,
    notification: false,
    cart : false,
}

export const ContextProvider = ({ children }) => {
    const [Activemenu, setActivemenu] = useState(true);
    const [isClicked, setisClicked] = useState(initalState);
    const [screenSize, setscreenSize] = useState(undefined);
    const [currentColor, setcurrentColor] = useState('blue');
    const [currentMode, setcurrentMode] = useState('Light');
    const [themeSettings, setthemeSettings] = useState(false)
    const setMode = (mode) => {
        setcurrentMode(mode)
        localStorage.setItem('themeMode', mode);
    }
    const setColor = (color) => {
        setcurrentColor(color)
        localStorage.setItem('themeColor', color);
    }
    


    const handleClick = (clicked) => {
        setisClicked({ ...initalState, [clicked]: true })
    };
    return (
        <StateContext.Provider 
            value={{
                Activemenu,
                setActivemenu,
                isClicked,
                setisClicked,
                handleClick,
                screenSize,
                setscreenSize,
                currentColor,
                currentMode,
                setMode,
                setColor,
                themeSettings,
                setthemeSettings


            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);