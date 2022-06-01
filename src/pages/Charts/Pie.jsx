
import * as React from "react";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';
import Header from '../../components/Header';
const Pie = () => {
    return (
        <div className='m-2 md:m-10 mt-2 md:mt-10 p-3 md:p-10 bg-white rounded-3xl'>
        <Header category="Charts" title="Pie Charts" />
        <AccumulationChartComponent id='charts'>
      <Inject services={[AccumulationDataLabel]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' startAngle='270' endAngle='90' dataLabel={{ visible: true, name: 'text', position: 'Outside' }}>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>;
            </div>
        )
        }
export default Pie;