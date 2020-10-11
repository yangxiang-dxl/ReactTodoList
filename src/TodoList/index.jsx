import React,{Component} from 'react'
import PropTypes from 'prop-types'
import InputValue from './InputValue'
import Todos from './Todos'
import Model from './Model'
// localStorage.setItem('todolist',[
//     '杨祥',
//     '苹果'
// ])
export default class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            todolist:[],
        }
    }
    componentDidMount(){
       if(localStorage.getItem('todolist')[0])
            this.setState({
                todolist:localStorage.getItem('todolist').split(',') 
            })
       
    }
    componentDidUpdate(){
        let todolist = this.state.todolist.slice()
        
        localStorage.setItem('todolist',todolist)
        
    }
     addTodos = (todo)=>{
        if(!todo){
          
            return
        }else{
            console.log(todo)
            let todolist = this.state.todolist.slice()
            todolist.push(todo)
            this.setState({
                todolist
            })
        }
    }
    delTodos = (index)=>{
        console.log(index)
        let todolist  =  this.state.todolist.slice()
        todolist.splice(index,1)
        this.setState({
            todolist
        })
    }
    handleEdit=(val,i)=>{
        let todolist  =  this.state.todolist.slice()
        todolist[i] = val
        this.setState({
            todolist
        })
    }
    render(){
        return (
            <div  style={
                {
                    width:'600px',
                    margin:'0 auto'
                }
            }>
                <InputValue addTodos={this.addTodos}> </InputValue>
                <Todos todolist={this.state.todolist} delTodos={this.delTodos} 
                handleEdit = {this.handleEdit}
                ></Todos>
            </div>
        )
    }
}
TodoList.propTypes = {
    todolist:PropTypes.string,

}




