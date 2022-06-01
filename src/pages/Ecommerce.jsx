import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Button, Stacked, Pie, SparkLine } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';

const Ecommerce = () => {
    const { currentColor,
        currentMode,
        setMode,
        setColor } = useStateContext();
    return (
        <div className="mt-12 " >
            <div className="flex flex-wrap lg:flex-nowrap justify-center ">
                <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repat bg-cover bg-center">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-bold text-gray-400">Earnings </p>
                            <p className="text-2xl">$63.500.400</p>                            
                        </div>
                    </div>
                    <div className="mt-4">
                        <Button
                            color="white"
                            bgColor={currentColor}
                            text="Download"
                            borderRadius="10px"
                            size = 'md'
                    
                        />
                    </div>
                </div>
                <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
                    {earningData.map((item) => {
                        return (
                            <div
                                key={item.title}
                            className=" dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl "
                            >
                                <button
                                    type="button"
                                    style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                                    className="text-2xl p-4 hover:drop-shadow-xl rounded-full opacity-0.9 "
                                >
                                    {item.icon}
                                </button>
                                <p className="mt-4">
                                    <span className="text-lg text-semibold">
                                        {item.amount}
                                    </span>
                                    <span className={`text-sm text-${item.pcColor} ml-2`}>
                                        {item.percentage}
                                    </span>
                                </p>
                                <p className="text-gray-400 text-sm mt-1">
                                    {item.title}
                                </p>
                          </div>  
                        );
                    })}

                </div>
            </div>
            
            <div className="flex flex-wrap gap-10 justify-center ">
                <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 rounded-2xl md:w-780 ">
                    <div className="flex justify-between">
                        <p className="font-semibold text-xl">
                            Revenu update
                        </p>
                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                                <span >
                                    <GoPrimitiveDot/>
                                </span>
                                <span >
                                    Expense
                                </span>
                            </p>
                            <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                                <span >
                                    <GoPrimitiveDot/>
                                </span>
                                <span >
                                    Budject
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className=" mt-10 flex flex-wrap justify-center gap-10 ">
                        
                        <div className="border-r-1 border-color m-4 pr-10">
                            <div>
                                <p >
                                    <span className="text-3xl font-semibold">
                                        $10.00
                                    </span>
                                    <span className="p-3 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                                        50%
                                    </span>
                                </p>
                                <p className="text-gray-400 mt-1">
                                    Budget
                                </p>
                            </div>
                            <div className="mt-4">
                                <p >
                                    <span className="text-3xl font-semibold">
                                        $1.000
                                    </span>
                                    
                                </p>
                                <p className="text-gray-400 mt-1">
                                    Expense
                                </p>
                            </div>
                           
                            <div className="mt-4">
                                <SparkLine
                                    currentColor={currentColor}
                                    id="line-sparkline"
                                    type="Line"
                                    height="80px"
                                    width="220px"
                                    data={SparklineAreaData}
                                    color={currentColor}

                               />
                                
                            </div>
                        </div>
                        <Stacked
                            width="320px"
                            height="360px"
                        />
                   </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Ecommerce
