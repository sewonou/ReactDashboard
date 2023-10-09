import React from 'react';
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Legend,
    Category,
    Tooltip,
    ColumnSeries,
    DataLabel,
    Inject
} from "@syncfusion/ej2-react-charts";

import { ChartsHeader } from "../../components";
import  { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from "../../contexts/ContextProvider";
const Bar = () => {
    const  { currentMode } = useStateContext();
    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-xl">
            <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
            <div className=" w-full">
                <ChartComponent
                    id="charts"
                    primaryXAxis={barPrimaryXAxis}
                    primaryYAxis={barPrimaryYAxis}
                    chartArea={{ border: { width: 0 } }}
                    tooltip={{ enable: true }}
                    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                    legendSettings={{ background: 'white' }}
                >
                    <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
                    <SeriesCollectionDirective>
                        {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>

        </div>
    );
};

export default Bar;
