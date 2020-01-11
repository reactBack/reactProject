import React,{Fragment,Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import './sale.css'
class Sale2 extends Component{
  constructor(){
    super()
    this.state={
      option : {
        title: {
            text: '服装销售图',
            // subtext: '纯属虚构',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['上衣', '裤子', '鞋']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 335, name: '上衣'},
                    {value: 310, name: '裤子'},
                    {value: 234, name: '鞋'}
                    // {value: 135, name: '帽子'},
                    // {value: 109, name: '围巾'},
                    // {value: 50, name: '袜子'}
                ],  
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
            
        ]
      }
    }
  }
    render(){
      let {option} = this.state
      return(
          <div className='login'>
            <ReactEcharts option={option} className='box'></ReactEcharts>
          </div>
      )
  }
}
export default Sale2;