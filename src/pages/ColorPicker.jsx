import React from 'react';
import { ColorPickerComponent } from  '@syncfusion/ej2-react-inputs'

import { Header } from "../components";

const ColorPicker = () => {

    const change = (args) => {
        document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
    };

    return (
        <div className="m-2 md:m-10 mt-24 p-2  md:p-10 bg-white rouded-3xl">
            <Header title="Coloir Picker" category="App" />
            <div className="text-center">
                <div id="preview" />
                <div className="flex justify-center items-center gap-20 flex-wrap">
                    <div>
                        <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallet</p>
                        <ColorPickerComponent
                            id="inline-pallete"
                            mode="Palette"
                            modeSwitcher={false}
                            inline
                            showButtons={false}
                            change={change}
                        />
                    </div>
                    <div>
                        <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
                        <ColorPickerComponent
                            id="inline-picker"
                            mode="Picker"
                            modeSwitcher={false}
                            inline
                            showButtons={false}
                            change={change}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColorPicker;
