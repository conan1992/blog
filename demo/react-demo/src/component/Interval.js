import React, {Component} from "react"
/* React 列表 & Keys */
class Hello extends Component{
    constructor(){
        super();
        this.state = {
            opacity: 1
        }
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            let opacity = this.state.opacity;
            opacity -= 0.1;
            opacity = opacity < 0 ? 1: opacity;
            this.setState({opacity})
        }, 200)
    }
    render(){
        return <div style={{opacity: this.state.opacity}}>hello {this.props.name}</div>
    }
}
export default Hello