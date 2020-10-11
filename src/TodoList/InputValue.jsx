import React,{useState} from 'react'
import { Input ,Button} from 'antd';
import PropTypes from 'prop-types'
export default  function InputValue(props){
    const [value,setValue] = useState('')
    
    return (
        <div>
            <Input placeholder="please input something" style={{
                width:'500px'
            }}
            onChange={(e)=>{
                setValue(e.target.value)
            }}
            />
            <Button type='primary' style={
                {
                    width:'90px'
                }
            }
            onClick={()=>{
                let val = value
                props.addTodos(val)
            }}
            >添加</Button>
        </div>
    )
}
InputValue.propTypes = {
    value:PropTypes.string
}