import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom' //路由的引入

//import App from './components/App'
//import App from './components/todolist/App'             //todolist
//import store from './components/todolist/store/index'   //todolist
//import App from './components/RouterStudy/App'   //路由组件入口
//import App from './components/知乎日报/app'    //知乎日报的入口
//import App from './components/ReduxStudy/App' // redux的粗暴用法
//import store from './components/ReduxStudy/Redux/store' // redux的粗暴用法  仓库
//import App from './components/计数器APP/app'
//import store from './components/计数器APP/store/index'
//import App from './components/sync应用-电影/app'
//import store from './components/sync应用-电影/store/store'
import App from './components/admin/app.jsx'
ReactDOM.render(
  <Router><App/></Router>,     //路由使用的方法
  //<App store={store} />,   //redux的粗暴用法
  //<Provider store={store}><App /></Provider>,
  //<App></App>,
  document.getElementById('root')
);
// store.subscribe(()=>{
//   ReactDOM.render(
//     // <Router>
//     //   <App store={store} />
//     // </Router>,//路由使用的方法
//     <App store={store} />,   
//     document.getElementById('root')
//   );
// })//学习redux的粗暴用法

