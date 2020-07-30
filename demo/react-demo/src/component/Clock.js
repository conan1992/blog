import React, {Component} from "react"
class Clock extends Component {
    constructor(){
        super();
        this.state = {
            date: new Date()
        }
    }
    render(){
        return <h1>{this.state.date.toLocaleTimeString()}</h1>
    }
    componentDidMount(){
        this.interval = setInterval(()=>{
            this.tick()
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }
}
export default Clock