# Bar-Chart-JS
Bar Chart package for react js


import React, {Component} from 'react';
import './App.css';

import  BarChartJS  from './barchartjs'

class App extends Component {
    render() {

        const chartData = [
            {labels: 'Gallardo', data_value: 40, bar_color: '#a0c4ff'},
            {labels: 'RX8', data_value: 150, bar_color: '#ffa0a0'},
            {labels: 'La Ferrari', data_value: 70, bar_color: '#ffe8a0'},
            {labels: 'Vanquish', data_value: 50, bar_color: '#d2ffa0'},
            {labels: 'Veyron', data_value: 50, bar_color: '#a3ffa0'},
            {labels: 'Prius', data_value: 40, bar_color: '#a0c4ff'},
            {labels: 'Aventadro', data_value: 150, bar_color: '#ffa0a0'},
            {labels: 'TTRS', data_value: 70, bar_color: '#ffe8a0'},
            {labels: 'R8', data_value: 50, bar_color: '#d2ffa0'},
            {labels: 'Supra', data_value: 50, bar_color: '#a3ffa0'},
        ];

        return (
            <div style={{width:'100%'}}>
                <BarChartJS
                    
                    //pass chart Data
                    chartData={chartData}
                    //chart title
                    chartTitle="Cars of Town"
                    /chart height 
                    chartHeight="300px"
                    //label for y axis
                     label_Y_axis="Car Count"
                    //label for x axis
                    label_X_axis="Car Brand"

                    //bar color mod custom user can add custom colors for bar fill by adding  bar_color: '#yourcolor' to data array
                    //bar color mod solid user can add one color for ever bar fill.
                    bar_color_mode="custom" // bar_color_mode="solid"
                    //solid color for bar fill
                    bar_solid_color="#ff70ae"
                    //background color of bar
                    bar_bg_color="#f7f7f7"

                    //font size and color of bar
                    bar_font_size="0.6em"
                    bar_font_color="#ff006a"

                    //in bar_fill_type="default" it use for fill bar according to maximum value
                    //in bar_fill_type="percentage" it use for fill bar as percentage
                    bar_fill_type="default"
                    //maximum count of bar fill (label_Y_axis)
                    bar_max_value="400"

                />
            </div>
        );
    }
}

export default App;
