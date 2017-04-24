/**
 * Created by dell on 2017/4/24.
 */
import React,{Component} from 'react'
import SliderList from './components/SliderList.js'

export default class SliderApp extends Component{
    render(){
        const {imgArr} = this.props;
        return <div className="banner">
                    <SliderList />
                </div>
    }
}