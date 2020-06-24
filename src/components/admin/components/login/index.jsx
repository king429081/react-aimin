import React from 'react'
import './index/index.css'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


export default class Login extends React.Component {
    
    render() {
        const onFinish = values => {
            console.log('Received values of form: ', values);
          };
    
        return (
            <div className="login">
                <div className="header">
                    <h3>后台管理登录</h3>
                </div>
                <div className="useradmin">
                    <h3>用户登录</h3>
                    <div className="formadmin">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: '请输入用户名!' },
                                { max:14,message:'最大值只有14位' },
                                { min:4,message:'最小值只有4位' },
                            ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    { required: true, message: '请输入密码!' },
                                    { max:14,message:'最大值只有14位' },
                                    { min:4,message:'最小值只有4位' },

                            ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="密码"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>                                
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}