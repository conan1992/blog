import React,{Component} from "react"
/**阻止组件渲染*/
class WarnItem extends Component{

    render(){
        if(!this.props.warn){
            return null
        }
        let style = {
            fontWeight: "bold",
            color: "red"
        }
        return (<div style={style}>警告</div>)
    }
}
class Warn extends Component{
    constructor(){
        super();
        this.state = {
            warn: true
        }
        this.handleToggleClick = this.handleToggleClick.bind(this)
    }
    handleToggleClick(){
        this.setState(prevState=>({
            warn: !prevState.warn
        }))
    }
    render(){
        return (<div>
            <WarnItem warn={this.state.warn} />
            <button onClick={this.handleToggleClick}>按钮</button>
        </div>)
    }
}
export default Warn