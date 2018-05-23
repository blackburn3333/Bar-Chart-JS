/**
 * Created by Burn's hand on 5/20/2018.
 */
import React, {Component} from 'react';
import './barchartjs.css';

class BarChartJS extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    render() {
        const {label_Y_axis,label_X_axis, bar_font_size, bar_fill_type, bar_max_value, bar_width, chartTitle, chartData, chartHeight, bar_font_color, bar_bg_color, bar_color_mode, bar_solid_color} = this.props;
        const barWidth = (100 / chartData.length).toFixed(2) + "%";
        var bar_inner;

        if (bar_width == null) {
            if (chartData.length <= 10) {
                bar_inner = "80%"
            } else {
                bar_inner = ((100 / chartData.length).toFixed(2) * 10) + "%";
            }
        } else {
            bar_inner = bar_width;
        }

        return (
            <div className="barchartBase">
                    <p className="title">{ chartTitle }</p>
                <div className="barchart" style={{"height": chartHeight}}>
                        <p className="y_label">
                            {label_Y_axis + " - " }{ bar_fill_type === 'percentage' ? '100%' : bar_max_value}
                        </p>
                    {
                        chartData.map((Data, index) => {
                            var color_code
                            bar_color_mode === 'custom' ? color_code = Data.bar_color :
                                bar_color_mode === 'solid' ? color_code = bar_solid_color :
                                    color_code = "#a3ffa0"

                            var value_of_type
                            bar_fill_type === 'percentage' ?
                                value_of_type = ~~((Data.data_value / bar_max_value) * 100) + "%" :
                                value_of_type = Data.data_value
                            return (
                                <div className="bar_base" key={index} style={{"width": barWidth}}>
                                    <div className="bar_outer" style={{
                                        width: bar_inner,
                                        backgroundColor: bar_bg_color
                                    }}>
                                        <div className="bar_fill" style={{
                                            height: (Data.data_value / bar_max_value) * 100 + "%",
                                            backgroundColor: color_code,
                                        }}>
                                            <span class="tooltiptext">{Data.labels}</span>
                                            <span style={{
                                                color: bar_font_color,
                                                fontSize: bar_font_size
                                            }}>{  value_of_type }</span>

                                    </div>

                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
                <div className="x_label_text">
                    <p>{ label_X_axis }</p>
                </div>
            </div>
        );
    }

}

export default BarChartJS;