// 用户所有的权限列表
export default [
  {
    name:'首页',
    icon:'home',
    path:'/admin/home',
    id:'0'
  },
  {
    name:'销售数据',
    icon:'setting',
    path:'/admin/sale',
    id:'1',
    children:[
      {
        name:'库存数据',
        path:'/admin/sale1'
      },
      {
        name:'销量数据',
        path:'/admin/sale2'
      }
    ]
  },
  {
    name:'新增订单',
    icon:"",
    path:'/admin/newAdd',
    id:'2',
    children:[
      {
        name:'上衣',
        path:'/admin/newAdd/jacket',
        id:'2-0',
        children:[
         {
          name:'男',
          path:'',
          id:'2-0-0'
         },
         {
          name:'女',
          path:'',
          id:'2-0-1'
         },

        ]
      },
      {
        name:'裤子',
        path:'',
        id:'2-1',
        children:[
          {
           name:'男',
           path:'',
           id:'2-1-0'
          },
          {
           name:'女',
           path:'',
           id:'2-1-1'
          },
 
         ]
      },
      {
        name:'鞋子',
        path:'',
        id:'2-2',
        children:[
          {
           name:'运动',
           path:'',
           id:'2-2-0'
          },
          {
           name:'休闲',
           path:'',
           id:'2-2-1'
          },
 
         ]
      },
      {
        name:'其它',
        path:'',
        id:'2-3',
        children:[
          {
            name:'帽子',
            path:'',
            id:'2-3-0'
          },
          {
            name:'围巾',
            path:'',
            id:'2-3-1'
          },
          {
            name:'袜子',
            path:'',
            id:'2-3-2'
          }
        ]
      }
      
    ]
  },
  {
    name:'库存信息',
    icon:'setting',
    path:'/admin/stock',
    id:'3'
  },
  {
    name:'取消订单',
    icon:'setting',
    path:'/admin/cancel',
    id:'4',
    children:[
      {
        name:'上衣',
        path:'/admin/newAdd/jacket',
        id:'2-0',
        children:[
         {
          name:'男',
          path:'',
          id:'2-0-0'
         },
         {
          name:'女',
          path:'',
          id:'2-0-1'
         },

        ]
      },
      {
        name:'裤子',
        path:'',
        id:'2-1',
        children:[
          {
           name:'男',
           path:'',
           id:'2-1-0'
          },
          {
           name:'女',
           path:'',
           id:'2-1-1'
          },
 
         ]
      },
      {
        name:'鞋子',
        path:'',
        id:'2-2',
        children:[
          {
           name:'运动',
           path:'',
           id:'2-2-0'
          },
          {
           name:'休闲',
           path:'',
           id:'2-2-1'
          },
 
         ]
      },
      {
        name:'其它',
        path:'',
        id:'2-3',
        children:[
          {
            name:'帽子',
            path:'',
            id:'2-3-0'
          },
          {
            name:'围巾',
            path:'',
            id:'2-3-1'
          },
          {
            name:'袜子',
            path:'',
            id:'2-3-2'
          }
        ]
      }
      
    ]
  },
  {
    name:'登录',
    icon:'Login',
    path:'/login',
    id:'5'
  },
]