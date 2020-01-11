import React, { Component , Fragment} from 'react';
import { Layout, Icon ,Modal} from 'antd';
import AdminLess from './admin.module.less'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import ActionCreator from '../../store/actionCreator'
import {bindActionCreators} from 'redux'

import HeaderNav from '../../components/headerNav/headerNav'
import SilderNav from "../../components/silderNav/silderNav"
const { Header, Sider, Content ,Footer} = Layout;


class Admin extends Component{
     render(){
      let {tokenModal,setTokenModal} = this.props
        return(
          <Fragment>
            <Layout className={AdminLess.adminBox}>
            <Sider>
              <SilderNav></SilderNav>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                />
                <HeaderNav></HeaderNav>
              </Header>
              <Content
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 280,
                }}
              >
                {this.props.children}
              </Content>
              <Footer>这里是底部</Footer>
            </Layout>
          </Layout>
                <Modal
              title='11'
              visible={tokenModal}
              onOk={()=>{
                this.props.history.replace('/login')
                setTokenModal(false)
              }}
              onCancel={()=>{
                setTokenModal(false)
              }}
            >
              token失效，请重新登录！
            </Modal>
          </Fragment>
        )
    }
}


export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActionCreator,dispatch)
})(withRouter(Admin))