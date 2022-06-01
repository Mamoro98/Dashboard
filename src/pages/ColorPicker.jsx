import React from 'react'
import  Header  from '../components/Header';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
const ColorPicker = () => {
    const change = (args) => {
        document.getElementById('preview').style.backgroundColor = args.currentValue.hex
    }
    return (
        <div className='m-2 md:m-10 mt-2 md:mt-10 p-3 md:p-10 bg-white rounded-3xl'>
            <Header category="App" title="Color Picker" />
            <div className="text-center">
                <div id="preview" />
            </div>
            <div className="flex justify-center items-center gap-20 flex-wrap " >
                <div>
                    <p className = "font-bold text-2xl mt-2 mb-4">
                        Inline Pallete
                    </p>
                    <ColorPickerComponent
                        id="Inline Pallete"
                        mode="Palette"
                        modeSwitcher={false}
                        inline
                        showButtons={false}
                        change={change}
                    />
                </div>
                <div>
                    <p className = "font-bold text-2xl mt-2 mb-4">
                        Inline Picker
                    </p>
                    <ColorPickerComponent
                        id="Inline Picker"
                        mode="Picker"
                        modeSwitcher={false}
                        inline
                        showButtons={false}
                        change={change}
                    />
                </div>
            </div>
        </div>
    )
}

export default ColorPicker
