import React, {Component} from "react"
/* React 列表 & Keys */
class Input extends Component{
    constructor(){
        super();
        this.state = {
            value: "布加拉提"
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange(event){
        console.log(event)
        this.setState({
            value: event.target.value
        })
    }
    handleInpClick(event){
        console.log(event)
    }
    render(){
        let val = this.state.value
        return (<div>
            <input type="text" value={val} onChange={this.handleInputChange} onClick={this.handleInpClick.bind(this)}/>
            <h1>hello {val}</h1>
        </div>)
    }
}
export default Input