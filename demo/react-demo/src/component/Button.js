import React,{Component} from "react"

class Button extends Component {
    constructor(){
        super();
        this.state = {
            name: "hello world"
        }
    }
    doSomething(name, e){
        e.preventDefault();
        console.log(name,e)
    }
    render(){
        //return <button onClick={this.doSomething.bind(this, this.state.name)}>点我</button>
        return <button onClick={e=>{this.doSomething(this.state.name, e)}}>点我</button>
    }
}
export default Button