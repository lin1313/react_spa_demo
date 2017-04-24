/**
 * Created by dell on 2017/4/24.
 */
import React,{Component} from 'react'

export default class SliderList extends Component{
    render(){
        const {imgArr} = this.props;
        return <ul className="imgList">
                    {
                        imgArr.map((item,i) => {
                            return <li key={i}><img src={item}/></li>
                        })
                    }
                </ul>
    }
}