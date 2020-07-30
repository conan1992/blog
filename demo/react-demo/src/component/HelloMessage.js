import React,{Component} from "react"
class Content extends Component {
    render(){
        return (<div>
            <input value={this.props.value} onChange={this.props.update}/>
        <h1>hello {this.props.value}</h1>
        </div>)
    }
}
class HelloMessage extends Component{
    constructor(){
        super();
        this.state = {
            name: "布加拉提"
        }
    }
    handleInpChange(event){
        this.setState({
            name: event.target.value
        })
    }
    render(){
        return <Content value={this.state.name} update={this.handleInpChange.bind(this)}/>
    }
}
export default HelloMessage