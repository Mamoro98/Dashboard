
import * as React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Category, Tooltip, Zoom, Crosshair } from '@syncfusion/ej2-react-charts';
import Header from '../../components/Header';
import { moroData , moroprimaryyAxis, moroprimaryxAxis } from '../../data/dummy'
const Financial = () =>{
   
    return (
        <div className='m-2 md:m-10 mt-2 md:mt-10 p-3 md:p-10 bg-white rounded-3xl'>
            <Header category="Charts" title="Financial Charts" />
        <ChartComponent id='charts' primaryXAxis={moroprimaryxAxis} primaryYAxis={moroprimaryyAxis}  title='Maximum and Minimum Rainfall'>
            <Inject services={[HiloSeries, Tooltip, Category, Crosshair, Zoom]} />
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={moroData} xName='x' yName='low' name='India' type='Hilo' low='low' high='high'>
                </SeriesDirective>
            </SeriesCollectionDirective>
            </ChartComponent>
            </div>
    );
    }
export default Financial;