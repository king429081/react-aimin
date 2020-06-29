import React, { useState, useEffect } from "react"
import { Table, Form, Input, Select, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";


const { Search } = Input;
const { Option } = Select;


export default class Product extends React.Component {

    onFinish=(value)=>{
        console.log(value)
    }
    setHeard = () => {

        return (
            <div>
                <Form  name="horizontal_login" layout="inline" onFinish={this.onFinish}>
                    <Form.Item
                        name="searchwithname"
                        style={{width:"150px"}}
                    >
                        <Input  defaultValue="按名称搜索" />
                    </Form.Item>
                    <Form.Item
                        name="searchwithkeyword"
                        rules={[{ required: true, message: '请输入关键字' }]}
                        style={{width:"150px"}}

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
                    style={{marginLeft:"200px"}}
                    type="primary">
                        <PlusOutlined /><Link to="/admin/modifi" style={{color:"#fff"}}>添加商品</Link> 
                    </Button>
                </Form>

            </div>
        )
    }
    render() {
        const columns = [
            {
                title: '商品名称',
                dataIndex: 'name',
                
            },
            {
                title: '商品描述',
                className: 'column-money',
                dataIndex: 'describe',
            },
            {
                title: '价格',
                dataIndex: 'money',
            },
            {
                title: '状态',
                dataIndex: 'state',
                render:()=>{
                    return(
                        <div>
                            <Button type="primary">下架</Button>
                            <span>在售</span>
                        </div>
                    
                    )
                }
            },
            {
                title: '操作',
                dataIndex: 'operation',
                render:()=>{
                    return(
                    <Link >详情修改</Link>
                    )
                }
            },
        ];
        const data = [
            {
                key: '1',
                name: '华为手机',
                describe:'华为手机666',
                money: '￥100',
                state: '在售',
            }
        ];
        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    title={this.setHeard}
                 />
            </div>
        )
    }
}