import React from "react"
import { Card, Table, Form, Input, Button, Radio, Modal, message} from 'antd';
import { API_GET_ROLELIST, API_POST_ADDROLE,API_POST_UPDATAROLE } from '../../../api/index'
import { formatDate } from '../../Filters'
import moment from 'moment'
import Trees from './Tree'
import usermessage from '../../../../userMessge'

export default class Role extends React.Component {
    state = {
        //radio: false,
        roleList: [],//roal列biao
        visible: false,
        roleid: [],//选中的角色id
        visibleS: false
    }
    componentDidMount() {
        this.getRoleList()
    }

    
    //获取角色信息
    getRoleList = async () => {
        let res = await API_GET_ROLELIST()
        let roleList = res.data.data
        //console.log(roleList)
        roleList.map((item, index) => {
            item.authtime = formatDate(item.auth_time)
            item.creattime = formatDate(item.create_time)
        })
        //console.log(roleList)


        this.setState({ roleList })
    }
    //设置单选框是否选中
    setradio = (value) => {
        console.log(value)
        //this.setState({radio:!this.state.radio})
        // if(value.__v==0){
        //    value.__v = 1 
        // }else{
        //     value.__v = 0 
        // }
        this.state.roleList.map(item=>{
            item.__v=0
        })
        value.__v=1
        let  roleid = value._id 
        this.setState({ roleid })//获取选中角色id

    }

    //添加用户
    creatrole = () => {
        this.setState({ visible: true })
    }

    //添加角色完成
    onFinish = async value => {
        //console.log(value)
        let res = await API_POST_ADDROLE(value.username)
        if (res.data.status == 0) {
            message.success("添加用户成功")
        }
        this.setState({ visible: false })
        this.getRoleList()
    }
    //取消
    onFinishFailed = () => {
        this.setState({ visible: false, visibleS: false })
    }

    //设置角色权限
    autorole = () => {
        this.setState({ visibleS: true })
    }
    //点击选择框
    onFinishSelect=async ()=>{
        //console.log("111")
        let res = this.refs.tree.state.checked
        //console.log(res) 
        let date = new Date()
        let da = moment(date).format("YYYY-MM-DD-HH:mm:ss")
        //console.log(da)
        let {roleid} = this.state
        //console.log(usermessage.user.data.username)
        let username = usermessage.user.data.username
        let resoult = await API_POST_UPDATAROLE(roleid,res,da,username)
        console.log(resoult)
        if(resoult.data.status==0){
            message.success("更新角色成功")
            this.setState({visibleS:false})
            this.getRoleList()
        }else(
            message.warn(resoult.data.msg)
        )
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
                    创建角色
                            </Button>
                <Button
                    type="primary"
                    style={{ width: 100 }}
                    onClick={this.autorole}
                    style={{ marginLeft: 20 }}
                >
                    设置角色权限
                            </Button>
            </div>
        )
    }
    render() {
        let { roleList } = this.state
        const columns = [
            {
                title: '',
                width: 50,
                render: value => <Radio name="select" checked={value.__v == 1 ? true : false} onClick={() => this.setradio(value)} />,
                 //render: value => <Radio name="select" />,
            },
            {
                title: '角色名称',
                dataIndex: 'name',
            },
            {
                title: '创建时间',
                dataIndex: 'creattime',
            },
            {
                title: '授权时间',
                dataIndex: 'authtime',
            },
            {
                title: '授权人',
                dataIndex: 'auth_name',
            },
        ];
        return (
            <div>
                <h3>role</h3>
                <div className="site-card-border-less-wrapper">
                    <Card bordered={false} style={{ width: 1300 }}>
                        <Table
                            columns={columns}
                            dataSource={roleList}
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
                                style={{ height: 100 }}
                            >
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item style={{ float: "right" }}>
                                    <Button type="primary" onClick={this.onFinishFailed} style={{ marginRight: 20 }}>
                                        取消
                                    </Button>
                                    <Button type="primary" htmlType="submit">
                                        提交
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                        <Modal
                            title="Basic Modal"
                            visible={this.state.visibleS}
                            footer={null}
                        >
                            <Form
                                name="basic"
                                initialValues={{ remember: false }}
                                onFinish={this.onFinishSelect}
                                style={{ minHeight: 100 }}
                            >
                                <Form.Item name="power">
                                    <Trees ref ="tree"></Trees>
                                </Form.Item>
                                <Form.Item >
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

