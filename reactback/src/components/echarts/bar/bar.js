import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
class Bar extends Component{
    constructor(){
        super()
        this.state={
            option:{
                title: {
                    text: '每月销售量',
                },
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月',],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220,444,555,666,777,888]
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
export default  Bar;