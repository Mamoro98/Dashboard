
import * as React from "react";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, Inject } from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';
const Pie = () => {
    return (
        <div className='m-2 md:m-10 mt-2 md:mt-10 p-3 md:p-10 bg-white rounded-3xl'>
        <Header category="Charts" title="Area Charts" />
    <AccumulationChartComponent id='charts'>
      <Inject services={[PieSeries]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' type='Pie'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
            </div>
        )
        }
