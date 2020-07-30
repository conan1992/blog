import React, {Component} from "react"
/* 运算符&& */
class Mailbox extends Component{
    render(){
        let length = this.props.message.length
        return (<div>
            <h1>hello</h1>
            {length>0 && <p>你有{length}条邮件。</p>}
        </div>)
    }
}
export default Mailbox