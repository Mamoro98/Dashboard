import React from 'react'
import { GridComponent, ColumnDirective, Toolbar,ColumnsDirective, Selection, Sort, Filter, Page, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import  Header  from '../components/Header';
const Customers = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Customers" />

            
            <GridComponent
                
                dataSource={customersData}
                allowPaging
                allowSorting
                toolbar={['Delete']}
                editSettings={{
                    allowDeleting:true , allowEditing:true
                }}
                width="auto"

            >
                <ColumnsDirective>
                    {customersGrid.map((item, index) => (
                        <ColumnDirective
                        key={index} {...item}
                        /> 
                    ) )}
                </ColumnsDirective>
                <Inject services={[Selection,Sort , Toolbar,Filter,Page,Edit]} />
            </GridComponent>

        </div>
    );
}

export default Customers
