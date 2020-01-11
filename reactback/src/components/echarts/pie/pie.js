import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
class Pie extends Component{
    constructor(){
        super()
        this.state={
            option:{
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: []
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position:['0%','0%']
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {value: 335},
                            {value: 310},
                            {value: 234},
                            {value: 135},
                            {value: 1548}
                        ]
                    }
                ]
            }
        }
    }
    render(){
        let {option} =this.state
        return(
            <div>
                <ReactEcharts option={option}></ReactEcharts>
            </div>
        )
    }
}
export default  Pie;