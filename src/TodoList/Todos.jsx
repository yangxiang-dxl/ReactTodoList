import React,{useEffect,useState} from 'react'
import {Button,Input} from 'antd'
import Model from './Model'

import PropTypes from 'prop-types'
export default function Todos(props){
    useEffect(()=>{
        
    })
    const [editTodo,setEditTodo] = useState(-1)
    return (
        <>
        <div style={{
            display:props.todolist.length>0?'none':'block',
        }}>
            你还没有任何数据，请输入
        </div>
      <ul>
          
          {
              props.todolist.map((item,i)=>{
                  return (
                      <li key={i} style={
                          {
                              display:'flex',
                              lineHeight:'80px',
                              justifyContent:'space-around'
                          }
                      }>
                          <span style={{
    
                          }}>{item}</span>
                          <div>
                              <Model type='default'
                               todosIndex={i}
                               handleEdit = {props.handleEdit}
                              >Edit</Model>
                              <Button type='default' onClick={
                                  ()=>{
                                    props.delTodos(i)
                                  }
                              }>Dle</Button>
                          </div>
                      </li>
                  )
              })
          }
      </ul>
      </>
    )
}
Todos.propTypes = {

}
