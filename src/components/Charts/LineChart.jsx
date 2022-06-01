import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Tooltip, DateTime , LineSeries , Legend} from '@syncfusion/ej2-react-charts';
import { lineCustomSeries , LinePrimaryXAxis , LinePrimaryYAxis}  from '../../data/dummy';
const LineChart = () => {
    return (
        <ChartComponent
            id="line-chart"
            tooltip={{ enable: true }}
            primaryXAxis={LinePrimaryXAxis}
            primaryYAxis={LinePrimaryYAxis}
            
            
        >
            <Inject services={[Legend , LineSeries,Tooltip ,DateTime]} />
            <SeriesCollectionDirective>
                {lineCustomSeries.map((item, index) => 
                <SeriesDirective key={index} {...item} />
                )}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default LineChart
