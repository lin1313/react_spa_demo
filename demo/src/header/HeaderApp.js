/**
 * Created by dell on 2017/4/18.
 */
import React,{Component} from 'react'
import Mailbox  from './components/Mailbox.js'
import Title from './components/Title.js'
import Select from './components/Select.js'

export default class HeaderApp extends Component{
    render(){
        const {title,options} = this.props;
        return <div className="header">
                    <Mailbox />
                    <Title title={title}/>
                    <Select options={options}/>
                </div>
    }
}