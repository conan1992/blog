import React, {Component} from "react"
class UserGreeting extends Component {
    render(){
        return <h1>你好啊，布加拉提</h1>
    }
}
class GuestGreeting extends Component {
    render(){
        return <h1>你好,游客</h1>
    }
}
class Greeting extends Component{
    
    render(){
        
        if(this.props.type){
            return <UserGreeting/>
        }else{
            return <GuestGreeting/>
        }
    }
}
class LoginControl extends Component{
    constructor(){
        super();
        this.state = {
            type: false
        }
        this.btnClick = this.btnClick.bind(this)
    }
    btnClick(){
        this.setState(prevState=>({
            type: !prevState.type
        }))
    }
    render(){
        let content = this.state.type ? "登出" : "登录"
        let Button =  <button onClick={this.btnClick}>{content}</button>
        
        return (<div>
            <Greeting type={this.state.type}/>
            {Button}
        </div>)
    }
}
export default LoginControl