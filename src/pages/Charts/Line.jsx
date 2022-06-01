import React from 'react'
import Header from '../../components/Header'
import { LineChart } from '../../components'
const Line = () => {
    return (
        <div className='m-2 md:m-10 mt-2 md:mt-10 p-3 md:p-10 bg-white rounded-3xl'>
            <Header category="Charts" title="Line Charts" />
            <LineChart />
        </div>
    )
}

export default Line
