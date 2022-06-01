
import * as React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject , Legend, Category, Tooltip, DataLabel, StackingColumnSeries, ChartAnnotation } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryYAxis, stackedPrimaryXAxis } from '../../data/dummy';
import Header from '../../components/Header';
const Stacked =() => {
 
    return (
        <div className='m-2 md:m-10 mt-2 md:mt-10 p-3 md:p-10 bg-white rounded-3xl'>
            <Header category="Charts" title="Stacked Charts" />
    <ChartComponent id='charts' primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis} title='Fruit Consumption'>
      <Inject services={[StackingColumnSeries, Legend, Tooltip, DataLabel, Category, ChartAnnotation]}/>
      {/* <AnnotationsDirective>
        <AnnotationDirective content={this.template1} coordinateUnits='Point' x='Jamesh' y={14.5}>
        </AnnotationDirective>
        <AnnotationDirective content={this.template2} coordinateUnits='Point' x='Michael' y={12}>
        </AnnotationDirective>
        <AnnotationDirective content={this.template3} coordinateUnits='Point' x='John' y={12}>
        </AnnotationDirective>
      </AnnotationsDirective> */}
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <SeriesCollectionDirective
            
            >
                {stackedCustomSeries.map((item,index)=> 
                    <SeriesDirective
                    key={index} {...item}
                    />
                )}
        {/* <SeriesDirective dataSource={this.data} type='StackingColumn' xName='x' yName='y0' name='Apple' marker={this.marker1}></SeriesDirective>
        <SeriesDirective dataSource={this.data} type='StackingColumn' xName='x' yName='y1' name='Orange' marker={this.marker2}></SeriesDirective>
        <SeriesDirective dataSource={this.data} type='StackingColumn' xName='x' yName='y2' name='Grapes' marker={this.marker3}></SeriesDirective> */}
      </SeriesCollectionDirective>
            </ChartComponent>
            </div>
    );
    }

export default Stacked;