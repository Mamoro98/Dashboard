import React from 'react'
import { ScheduleComponent, Week, Day, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import  Header  from '../components/Header';
const Calendar = () => {
    return (
        <div className='m-2 md:m-10 mt-2 md:mt-10 p-3 md:p-10 bg-white rounded-3xl'>
            <Header category="App" title="Calender" />
            <ScheduleComponent
                height="360px"
                eventSettings={{
                    dataSource:scheduleData
                }}
                selectedDate = {new Date(2021,0,10)}
            >
                <Inject services={[Week , Day , WorkWeek , Month , Agenda , Resize , DragAndDrop]} />
            </ScheduleComponent>
            
        </div>
    )
}

export default Calendar
