/**
 * Created by dell on 2017/4/18.
 */
import React,{Component} from 'react'

export default class Title extends Component{
    render(){
        const {title} = this.props;
        return <div className="title">
                    <h3>{title}</h3>
                </div>
    }
}