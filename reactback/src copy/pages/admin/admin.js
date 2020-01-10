import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import AdminLess from './admin.module.less'

import SilderNav from "../../components/silderNav/silderNav"
const { Header, Sider, Content } = Layout;


class Admin extends Component{
     render(){
        return(
            <Layout className={AdminLess.adminBox}>
            <Sider>
              <SilderNav></SilderNav>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                />
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
            </Layout>
          </Layout>
        )
    }
}


export default Admin;