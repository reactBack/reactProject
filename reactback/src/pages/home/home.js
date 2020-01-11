import React, { Component } from 'react';
import styles from './home.module.less'
import {Menu, Dropdown,Icon ,Layout} from 'antd'

import Pie from '../../components/echarts/pie/pie'
import Bar from '../../components/echarts/bar/bar'
import Comment from './Comment'
import Collapse from './Collapse'
const { Header, Content, Footer, Sider } = Layout;
class Home extends Component{
    render(){
        return(
        <div className={styles.home}>
            <Layout>
            <Content style={{ margin: '24px 16px 0'}} scroll={{y:200,x:500}}>
            <div className={styles.user}>
            <Icon type="user" className={styles.userIcon} />
                <span>321</span>
                <h3>新增客户</h3>
            </div>
            <div className={styles.tags}>
            <Icon type="tags" className={styles.tagsIcon} />
                <span>+970</span>
                <h3>销售数据</h3>
            </div>
            <div className={styles.wechat}>
            <Icon type="wechat" className={styles.wechatIcon} />
                <span>49</span>
                <h3>用户评论</h3>
            </div>
            <div className={styles.eye}>
            <Icon type="eye" className={styles.eyeIcon} />
                <span>+897</span>
                <h3>UV</h3>
            </div>
            <div className={styles.chart}>
            <Icon type="bar-chart" className={styles.chartIcon} />
                <span>+288</span>
                <h3>更新</h3>
            </div>
            <div className={styles.shopping}>
            <Icon type="shopping-cart" className={styles.shoppingIcon} />
                <span>29</span>
                <h3>新增订单</h3>
            </div>
            <div className={styles.database}>
            <Icon type="database" className={styles.databaseIcon} />
                <span>$37624</span>
                <h3>库存信息</h3>
            </div>
            <div className={styles.mail}>
            <Icon type="mail" className={styles.mailIcon} />
                <span>123</span>
                <h3>消息</h3>
            </div>
            <div className={styles.close}>
            <Icon type="close-circle" className={styles.closeIcon} />
                <span>34</span>
                <h3>取消订单</h3>
            </div>
            <div className={styles.transaction}>
            <Icon type="transaction" className={styles.transactionIcon} />
                <span>$53412</span>
                <h3>总利润</h3>
            </div>
        
        <div className={styles.pie}>
            <div className={styles.sliver}>
            <Icon type="menu" />
            饼状图
            </div>
            <div className={styles.piee}>
                <Pie></Pie>
            </div>
        </div>
        <div className={styles.pie}>
            <div className={styles.sliver}>
            <Icon type="menu" />
            柱状图
            </div>
            <div className={styles.piee}>
                <Bar></Bar>
            </div>
        </div>
        <div className={styles.pie}>
            <div className={styles.sliver}>
            <Icon type="menu" />
            评论信息
            </div>
            <div className={styles.piee}>
                <Comment></Comment>
            </div>
        </div>
        <div className={styles.pie}>
            <div className={styles.sliver}>
            <Icon type="menu" />
            警告提示
            </div>
            <div className={styles.piee}>
                <Collapse></Collapse>
            </div>
        </div>
        </Content>
        </Layout>
        </div>
    )
 }
}

export default Home;