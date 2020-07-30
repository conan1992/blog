import React,{Component} from "react"

class Toogle extends Component {
    constructor(){
        super();
        this.state = {
            onOff: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState=>({
            onOff: !prevState.onOff
        }))
    }
    render(){
    return <div onClick={this.handleClick}>{this.state.onOff ? "on" : "off"}</div>
    }
}
export default Toogle