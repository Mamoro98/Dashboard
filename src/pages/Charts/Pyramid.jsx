
import * as React from "react";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { PyramidData } from '../../data/dummy';
import Header from '../../components/Header';
const Pyramid =() =>{
    return (
        <div className='m-2 md:m-10 mt-2 md:mt-10 p-3 md:p-10 bg-white rounded-3xl'>
        <Header category="Charts" title="Pyramid Charts" />
        <AccumulationChartComponent id='charts'>
            <Inject services={[AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel]} />
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={PyramidData} xName='x' yName='y' type='Pyramid'>
                </AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
            </div>
    );
    }

export default Pyramid;