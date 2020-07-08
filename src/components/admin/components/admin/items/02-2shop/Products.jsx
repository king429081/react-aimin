import React, { useState, useEffect } from "react"
import { Table, Form, Input, Select, Button,Cascader  } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { API_GET_PRODUCTLIST, API_GET_PRODUCTSEARCH,API_POST_UPSTATUSPRODUCT } from '../../../api/index'

const { Search } = Input;
const { Option } = Select;

//表格初始状态

const pageSize = 5 //，每页显示的数据
export default class Product extends React.Component {
    
    state = {
        total: 0,
        products: [],
        status:0
    }
    componentDidMount() {
        if(this.pageNum){
            this.getProducts(this.pageNum)
        }else{
            this.getProducts(1)
        }
    }
    //得到基本数据
    getProducts = async (pageNum) => {
        this.pageNum = pageNum
        let res = await API_GET_PRODUCTLIST(pageNum, pageSize)
        //console.log(res)
        if (res.data.status == 0) {
            let products = res.data.data.list
            let total = res.data.data.total
            let status = res.data.data.list.status
            this.setState({
                products,
                total,
                status
            })
        }
    }
    handleChange = (value) => {
        //console.log(value)
    }
    //搜索
    onFinish = async (value) => {
        console.log(value)
        let searchwithname = value.searchwithname
        let searchwithkeyword = value.searchwithkeyword  
        let res
        if (!searchwithname || searchwithname == 0) {
            res = await API_GET_PRODUCTSEARCH(1, pageSize, searchwithkeyword, null)
        } else {
            res = await API_GET_PRODUCTSEARCH(1, pageSize, null, searchwithkeyword)
        }
        //console.log(res)
        let products = res.data.data.list
        this.setState({
            products
        })
    }
    onChange=value=>{
        //console.log(value)
        this.getProducts(value)
    }
    setHeard = () => {

        return (
            <div>
                <Form name="horizontal_login" layout="inline" onFinish={this.onFinish}>
                    <Form.Item
                        name="searchwithname"
                        style={{ width: "150px" }}
                    >
                        <Select defaultValue="0" style={{ width: 150 }} onChange={this.handleChange}>
                            <Option value="0">按名称搜索</Option>
                            <Option value="1">按内容搜索</Option>
                        </Select>

                    </Form.Item>
                    <Form.Item
                        name="searchwithkeyword"
                        rules={[{ required: true, message: '请输入关键字' }]}
                        style={{ width: "150px" }}

                    >
                        <Input
                            placeholder="关键字"
                        />
                    </Form.Item>
                    
                    <Form.Item shouldUpdate={true}>
                        {() => (
                            <Button
                                type="primary"
                                htmlType="submit"
                            >
                                搜索
                            </Button>
                        )}
                    </Form.Item>
                    <Button
                        style={{ marginLeft: "700px" }}
                        type="primary">
                        <PlusOutlined /><Link to={{pathname:'/admin/modifi',state:{"record":{}}}} style={{ color: "#fff" }}>添加商品</Link>
                    </Button>
                </Form>

            </div>
        )
    }
    //编辑
    editproduct=(record)=>{
        console.log(record)
    }
    
    change=record=>{
        console.log(record)
    }

    onClick=async value=>{
        //console.log(value)
        if(value.status==0){
            let res = await API_POST_UPSTATUSPRODUCT(value._id,1)
        //console.log(res)
        }else{
            let res = await API_POST_UPSTATUSPRODUCT(value._id,0)
        //console.log(res)
        }
        this.getProducts(this.pageNum)

    }
    render() {

        const columns = [
            {
                title: '商品名称',
                dataIndex: 'name',
                width:300
        
            },
            {
                title: '商品描述',
                className: 'column-money',
                dataIndex: 'desc',
            },
            {
                title: '价格',
                dataIndex: 'price',
                width:100,
            },
            {
                title: '状态',
                width:100,
                render: (record) => {
                    if(record.status==0){
                        return (
                            <div>
                                <Button type="primary" onClick={()=>this.onClick(record)}>下架</Button>
                                <span>在售</span>
                            </div>
                        )
                    }else{
                        return (
                            <div>
                                <Button type="primary" onClick={()=>this.onClick(record)}>上架</Button>
                                <span>不在售</span>
                            </div>
                        )
                    }
                        
                    
        
                }
            },
            {
                title: '操作',
                width:100,
                render: (record) => {
                     //console.log(record)
                     //let id = record._id
                    return (
                        <div>
                            
                            <Link to={{pathname:'/admin/detail',state:{"record":record}}} >详情</Link>
                            <hr ></hr>
                            <Link to={{pathname:'/admin/modifi',state:{"record":record}}}> 修改</Link>
                        </div>
        
                    )
                }
            },
        ];
        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={this.state.products}
                    bordered
                    title={this.setHeard}
                    pagination={{ 
                        defaultPageSize:pageSize,
                        onChange:this.onChange,
                        total:this.state.total
                     }}
                />
            </div>
        )
    }
}