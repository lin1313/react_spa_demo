/**
 * Created by dell on 2017/4/18.
 */
import React,{Component} from 'react'

export default class Select extends Component{
    constructor(props){
        super(props);
        this.state = {isShow: false}
    }
    handleClick(){
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render(){
        const {options} = this.props;
        return <div className="selectBox">
                    <a href="#" onClick={this.handleClick.bind(this)}></a>
                    <ul style={{display: this.state.isShow ? "block":"none"}}>
                        {
                            options.map((option,i) => <li key={i}>{option}</li>)
                        }
                    </ul>
                </div>
    }
}

/*<ul style{{display: isShow ? "block":"hide"}}>*/