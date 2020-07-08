import React from "react"
import { API_GET_USERLIST, API_POST_USERADD, API_GET_USERUPDATA, API_GET_USERDELETE } from '../../../api/index'
import { Card, Table, Form, Input, Button, Radio, Modal, message, Select } from 'antd';
import moment from 'moment'
import { remove } from "store2";


const option = []
const { Option } = Select;
export default class UserAdmin extends React.Component {



    state = {
        //radio: false,
        userList: [],//user列biao
        roles: [],
        visible: false,
        roleid: [],//选中的角色id
        visibleS: false,
        editname: "",
        editphone: "",
        editemail: "",
        editrole: "",
        userid: ""

    }
    componentDidMount() {
        this.getUserList()
    }


    //获取用户信息
    getUserList = async () => {
        let res = await API_GET_USERLIST()
        //console.log(res.data.data)
        let userList = res.data.data.users
        let roles = res.data.data.roles
        //let date =moment(res.data.data.users[0].create_time).format("YYYY-MM-DD-HH:mm:ss")
        userList.map(user => {
            user.creatTime = moment(user.create_time).format("YYYY-MM-DD-HH:mm:ss")
            roles.map(role => {
                if (role._id == user.role_id) {
                    //console.log(role.name)
                    user.rolename = role.name
                }
            })
        })
        //console.log(userList)
        this.setState({
            userList,
            roles
        })
    }


    //添加用户
    creatrole = () => {
        this.setState({ visible: true })
        let { roles } = this.state
        roles.map(item => {
            option.push(<Option key={item._id}>{item.name}</Option>)
        })

    }

    //添加角色完成
    onFinish = async value => {
        //console.log(value)
        let { username, password, phone, email, role } = value
        if (!this.state.userid) {
            
            let res = await API_POST_USERADD(username, password, phone, email, role)
            //console.log(res)
            let resoult = res.data
            if (resoult.status == 0) {
                message.success("添加用户成功")
                this.getUserList()
                this.setState({
                    visible: false
                })
            } else {
                message.warning("用户名已存在")
            }
        } else {
            let { userid } = this.state
            let res = await API_GET_USERUPDATA(userid,username,phone,email,role)
            let resoult = res.data
            if (resoult.status == 0) {
                message.success("修改用户成功")
                this.getUserList()
                this.setState({
                    visible: false
                })
            } else {
                message.warning("修改用户失败")
            }
        }


    }
    //取消
    onFinishFailed = () => {
        this.setState({ visible: false, visibleS: false })
    }
    //删除
    remove = async (record) => {
        //console.log(record)
        let res = await API_GET_USERDELETE(record._id)
        console.log(res)
        this.getUserList()
    }
    //修改
    edit = (record) => {
        console.log(record)
        this.setState({
            editname: record.username,
            editphone: record.phone,
            editemail: record.email,
            editrole: record.rolename,
            userid: record._id,
            editroleid:record.role_id
        })
        this.creatrole()
    }
    //设置头
    setheard = () => {
        return (
            <div>
                <Button
                    type="primary"
                    style={{ width: 100 }}
                    onClick={this.creatrole}
                >
                    创建用户
                            </Button>
            </div>
        )
    }
    render() {

        let { userList, editname, editphone, editemail, editrole } = this.state
        const columns = [

            {
                title: '用户名称',
                width: 150,
                dataIndex: 'username',
            },
            {
                title: '邮箱',
                width: 300,
                dataIndex: 'email',
            },
            {
                title: '电话',
                width: 150,
                dataIndex: 'phone',
            },
            {
                title: '注册时间',
                width: 200,
                dataIndex: 'creatTime',
            },
            {
                title: '所属角色',
                dataIndex: 'rolename',
            },
            {
                title: '操作',
                key: 'x',
                render: (record) => {
                    return (
                        <div>
                            <a onClick={() => this.edit(record)}>修改</a>
                            <a onClick={() => this.remove(record)}>删除</a>
                        </div>
                    )
                }
            },

        ];
        return (
            <div>
                <h3>role</h3>
                <div className="site-card-border-less-wrapper">
                    <Card bordered={false} style={{ width: 1300 }}>
                        <Table
                            columns={columns}
                            dataSource={userList}
                            title={this.setheard}
                            bordered
                        />

                        <Modal
                            title="Basic Modal"
                            visible={this.state.visible}
                            footer={null}
                        >
                            <Form
                                name="basic"
                                initialValues={{ remember: false }}
                                onFinish={this.onFinish}
                                style={{ width: 300 }}
                            >
                                <Form.Item
                                    label="用户名"
                                    name="username"

                                >
                                    <Input placeholder={editname} style={{ width: 300 }} />
                                </Form.Item>
                                <Form.Item
                                    label="密码"
                                    name="password"
                                >
                                    <Input type="password" style={{ width: 300 }} />
                                </Form.Item>
                                <Form.Item
                                    label="手机号"
                                    name="phone"
                                >
                                    <Input placeholder={editphone} style={{ width: 300 }} />
                                </Form.Item>
                                <Form.Item
                                    label="邮箱"
                                    name="email"
                                >
                                    <Input placeholder={editemail} style={{ width: 300 }} />
                                </Form.Item>
                                <Form.Item
                                    label="角色"
                                    name="role"
                                >
                                    <Select placeholder={editrole} style={{ width: 300 }} >
                                        {option}
                                    </Select>
                                </Form.Item>

                                <Form.Item style={{ marginLeft: 100 }}>
                                    <Button type="primary" onClick={this.onFinishFailed} style={{ marginRight: 20 }}>
                                        取消
                                    </Button>
                                    <Button type="primary" htmlType="submit">
                                        提交
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>

                    </Card>

                </div>

            </div>
        )
    }
}

