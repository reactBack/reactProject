import React,{Fragment,Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import axios from 'axios'
import './sale1.css'
class Sale1 extends Component{
  constructor(){
    super()
    this.state={
        option:{
            title: {
                text: '库存数量图',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                left: 'center',
                top: 'bottom',
                data: ['上衣','裤子','鞋','上衣','裤子','鞋']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            series: [
                {
                    name: '半径模式',
                    type: 'pie',
                    radius: [20, 110],
                    center: ['25%', '50%'],
                    roseType: 'radius',
                    label: {
                        show: false
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    },
                    data: [
                        {value: 10, name: '上衣'},
                        {value: 5, name: '裤子'},
                        {value: 15, name: '鞋'}
                    ]
                },
                {
                    name: '面积模式',
                    type: 'pie',
                    radius: [30, 110],
                    center: ['75%', '50%'],
                    roseType: 'area',
                    data: [
                        {value: 10, name: '毛衣'},
                        {value: 5, name: '牛仔裤'},
                        {value: 15, name: '帆布鞋'},
                        {value: 25, name: '皮鞋'},
                        {value: 20, name: '阔腿裤'},
                        {value: 35, name: '风衣'}
                    ]
                }
            ]
        } 
  }
}
componentDidMount(){
    let url = 'http://10.60.14.27:3003/get/Stocks/ByType'
     axios.post(url)
     .then((res)=>{
         console.log(res)
     })
     .catch((err)=>{
         console.log(err)
     })
}
    render(){
      let {option} = this.state
      return(
          <div className='login'>
            <ReactEcharts option={option} className='bxo1'></ReactEcharts>
          </div>
      )
  }
}
export default Sale1;