/**
 * Created by dell on 2017/4/24.
 */
import React,{Component} from 'react'
import HeaderApp from './header/HeaderApp.js'
import SliderApp from './banner/SliderApp.js'

export default class Pages extends Component{
    constructor(props){
        super(props);
        this.state={title:"首 页"};
        this.options=['筛选','搜索'];
        this.imgArr = ['../images/fj01.jpg','../images/fj02.jpg','../images/fj03.jpg','../images/fj04.jpg'];
    }
    render(){
        const {title} = this.state;
        return <div>
            <HeaderApp title={title} options={this.options}/>
            <SliderApp imgArr={this.imgArr}/>
        </div>
    }
}