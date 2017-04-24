/**
 * Created by dell on 2017/3/8.
 */
import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom'
import HeaderApp from './src/header/HeaderApp.js'

render(
    <HeaderApp title={"首 页"} options={['筛选','搜索']}/>,
    document.getElementById('container')
);