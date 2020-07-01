import React from "react"
import { Table, Tag, Space, Button, Modal, Form, Input, Card, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { API_GET_CATEGROY, API_ADD_LOGIN, API_UPDATA_LOGIN } from '../../../api/index'
import { Redirect, Link } from 'react-router-dom'
import { render } from "@testing-library/react";
const { Option } = Select;
export default class ShopIndex extends React.Component {
    state = {
        parentId: "0",
        cartgroys: [],
        secondCartgros: [],
        visible: false,
        key: null,
        editvisibility: false,
        records: 0,
        recordname: null
    }
    componentDidMount() {
        this.getList()
    }
    cancle = () => {
        this.setState({
            visible: false,
            editvisibility: false,
            record: {}

        })
    }
    //添加分类
    onFinish = value => {
        let { parentId } = this.state
        console.log(value)
        this.setState({
            visible: false,
        });
        API_ADD_LOGIN(parentId, value.cart).then(res => {
            //console.log(res)
        })
        this.getList()
    }
    //得到商品
    getList = async () => {
        let { parentId } = this.state
        //console.log(parentId)
        let result = await API_GET_CATEGROY(parentId)
        //console.log(result)
        if (result.data.status === 0) {
            const cartgroys = result.data.data;
            if (parentId === "0") {
                this.setState({ cartgroys })
                console.log(parentId)
            } else {
                this.setState({ secondCartgros: cartgroys })
            }
        }
    }
    //显示添加商品
    showModal = () => {
        console.log(this.state.cartgroys)
        this.setState({
            visible: true,
        });
    };
    //编辑，拿到item
    edit_cart = (record) => {
        ///console.log("...",record)
        let records = record._id
        this.setState({
            records,
            recordname: record.name,
            editvisibility: true,
        })

    }
    //编辑
    onFinishEdit = (value) => {
        console.log(this.state.recordname)
       
        API_UPDATA_LOGIN(this.state.records, value.edit).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
         this.setState({
            editvisibility: false,
        })
        this.getList()

    }
    //二级分类
    second_cart = (record) => {
        //this.getList(record._id)
        // console.log(record._id)
        // let parentId= record._id
        // let result = await API_GET_CATEGROY(parentId)
        // console.log(result)
        // 
        this.setState({
            parentId: record._id,
            recordname: record.name
        }, this.getList)
    }
    //返回第一分类
    goFister = () => {
        this.setState({
            parentId: "0"
        }, this.getList)
    }
    //选择框
    handleChange=(value)=> {
        console.log(value);
        this.setState({
            parentId:value[1],
            recordname:value[0]

        },this.getList)
      }
    render() {
        
        let { parentId, cartgroys, secondCartgros, visible, key, editvisibility, records, recordname } = this.state
        const columns = [
            {
                width: "500px",
                title: '商品',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Action',
                key: 'action',
                render: (record) => (
                    <Space size="middle">
                        <span onClick={() => this.edit_cart(record)}><a >编辑分类</a></span>
                        {parentId == 0 ? <span onClick={() => this.second_cart(record)}><a >查看二级分类</a></span> : null}
                    </Space>
                ),
            },
        ]; 
        return (
            <div>
                {parentId == 0 ? <span>一级分类</span> : <div><a onClick={this.goFister}>一级分类</a><span>{recordname}</span></div>}
                <Button type="primary" onClick={this.showModal} style={{ left: "600px" }}> <PlusOutlined />添加分类</Button>
                <Table
                    bordered
                    dataSource={parentId == "0" ? cartgroys : secondCartgros}
                    columns={columns}
                />
                {/* 添加分类 */}
                <Modal
                    visible={this.state.visible}
                    footer={null}
                >
                    <Card title="提交商品" bordered={false} style={{ width: "100%" }} visible={this.state.visible}>
                        <Form
                            name="normal_login"
                            onFinish={this.onFinish}>
                            <Form.Item name="select">
                                <Select defaultValue='0' style={{ width: 120 }} onChange={this.handleChange}>
                                    <Option value="0">一级分类</Option>
                                    {cartgroys.map((item)=>{
                                        return <Option value={[item.name,item._id]}>{item.name}</Option>
                                    })}
                                </Select>
                            </Form.Item>
                            <Form.Item name="cart">
                                <Input />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" >
                                    提交
                            </Button>、
                            <Button type="primary" className="login-form-button" onClick={this.cancle}>
                                    取消
                            </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Modal>
                {/* 修改分类 */}
                <Modal
                    visible={this.state.editvisibility}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <Card title="编辑商品" bordered={false} style={{ width: "100%" }} visible={this.state.editvisibility}>
                        <Form
                            name="normal_login"
                            onFinish={this.onFinishEdit}>
                            <Form.Item name="edit">
                                <Input placeholder={recordname} />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" >
                                    修改
                                </Button>
                                <Button type="primary" className="login-form-button" onClick={this.cancle}>
                                    取消
                            </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Modal>

            </div>
        )
    }
}

