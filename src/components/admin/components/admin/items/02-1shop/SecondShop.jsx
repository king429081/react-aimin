import React from 'react'
import { Table, Tag, Space, Button, Modal, Form, Input, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {Redirect,Link} from 'react-router-dom'
import { API_GET_CATEGROY, API_ADD_LOGIN, API_UPDATA_LOGIN } from '../../../api/index'



export default class SecondShop extends React.Component{


    componentDidMount(){
        this.giveParentId()
        this.getList(this.props.location.query.name._id)
        
    }
    giveParentId=()=>{
        //console.log(this.props.location.query.name)
        let parentId =this.props.location.query.name._id
        this.setState({
            parentId
        })
    }



    state={
        visible: false,
        key: null,
        editvisibility:false,
    }

    getList = (parentId) => {
        console.log(parentId+"...")
        API_GET_CATEGROY(parentId).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }




    showModal = () => {
        this.setState({
          visible: true,
        });
      };
      cancle=()=>{
        this.setState({
        visible: false,
        editvisibility:false,
        })
    }
    onFinish = value => {
        console.log(value)
  }
    render(){
        const dataSource = [
            {
              key: '1',
              name: '胡彦斌',
            }]
        const columns = [
            {
                width: "500px",
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
        ];
        return(
            <div>
                <div>
                <Button type="primary" onClick={this.showModal} style={{ left: "650px" }}> <PlusOutlined />添加分类</Button>
                <Button type="primary" ><Link to="/admin/shop" style={{color:"#fff"}}>返回</Link></Button>
                <Table 
                dataSource={dataSource} 
                columns={columns}
                 />
                <Modal
                    visible={this.state.visible}
                    footer={null}
                >
                    <Card title="提交商品" bordered={false} style={{ width: "100%" }} visible={this.state.visible}>
                    <Form
                        name="normal_login"
                        onFinish={this.onFinish}>
                        <Form.Item name="cart">
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" >
                                提交
                            </Button>、
                            <Button type="primary"  className="login-form-button" onClick={this.cancle}>
                                取消
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
                </Modal>
                <Modal
                    visible={this.state.editvisibility}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                </Modal>
            </div>
            </div>
        )
    }
}