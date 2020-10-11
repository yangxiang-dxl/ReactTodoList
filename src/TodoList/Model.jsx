import React from 'react'
import { Modal, Button,Input } from 'antd';

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            visible: false ,
            val:''
        };
    }

    componentDidMount(){
        console.log(this.props.todosIndex)
    }
    showModal = () => {
    this.setState({
      visible: true,
    });
  };

    handleOk = e => {
        this.setState({
        visible: false,
        });
        this.props.handleEdit(this.state.val,this.props.todosIndex)
    };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Edit
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input onChange={(e)=>{
              let val = e.target.value;
              this.setState({
                  val
              })
          }}></Input>
        </Modal>
      </>
    );
  }
}
