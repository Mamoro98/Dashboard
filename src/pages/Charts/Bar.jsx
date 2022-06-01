
import * as React from "react";
import { ChartComponent,ColumnSeries, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import Header from '../../components/Header';
const Bar  = () => {
    return (
        <div className='m-2 md:m-10 mt-2 md:mt-10 p-3 md:p-10 bg-white rounded-3xl'>
            <Header category="Charts" title="Bar Charts" />
        <ChartComponent id='charts' primaryXAxis={barPrimaryXAxis} primaryYAxis={barPrimaryYAxis} title='Test'>
            <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
            <SeriesCollectionDirective>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                {barCustomSeries.map((item, index) =>
                    <SeriesDirective
                        key={index} {...item}
                    />
                )}
            </SeriesCollectionDirective>
            </ChartComponent>
            </div>
    );
}
export default Bar;