import React, {Component} from "react"
/* React 列表 & Keys */
class ListItems extends Component{
    render(){
        return this.props.data.map((item, index) => <li key={index}>{item}</li>)
    }
}
class List extends Component{
    render(){
        return (<div>
           <ul><ListItems data={this.props.data}/></ul>
        </div>)
    }
}
export default List