import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime , SplineAreaSeries , Legend} from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import Header from '../../components/Header'
const Area = () => {
    return (
        <div className='m-2 md:m-10 mt-2 md:mt-10 p-3 md:p-10 bg-white rounded-3xl'>
            <Header category="Charts" title="Area Charts" />
        <ChartComponent
            id="area-chart"
            tooltip={{ enable: true }}
            primaryXAxis={areaPrimaryXAxis}
            primaryYAxis={areaPrimaryYAxis}
            
            
        >
            <Inject services={[Legend , SplineAreaSeries ,DateTime]} />
            <SeriesCollectionDirective>
                {areaCustomSeries.map((item, index) => 
                <SeriesDirective key={index} {...item} />
                )}
            </SeriesCollectionDirective>
            </ChartComponent>
            </div>
    )
}

export default Area
