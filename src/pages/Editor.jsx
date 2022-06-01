import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, Toolbar, RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor';
import  Header  from '../components/Header';

const Editor = () => {
    return (
        <div className='m-2 md:m-10 mt-2 md:mt-10 p-3 md:p-10 bg-white rounded-3xl'>
            <Header category="App" title="Editor" />
            <RichTextEditorComponent>
                <Inject services ={[HtmlEditor , Image, Link, QuickToolbar,Toolbar]} />
            </RichTextEditorComponent>
        </div>
    )
}

export default Editor
