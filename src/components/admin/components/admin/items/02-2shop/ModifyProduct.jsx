import React from "react"
import { Form, Input, Button, Checkbox, Select, Upload, Modal, message, Cascader } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import ReactQuill, { Quill } from 'react-quill';
import { ImageDrop } from 'quill-image-drop-module';
import 'react-quill/dist/quill.snow.css';
import { LeftOutlined } from '@ant-design/icons';
import { API_GET_CATEGROY, API_POST_ADDPRODUCT, API_POST_UPDATAPRODUCT } from '../../../api/index'
import PicturesWall from './PicturesWall '

// 在quiil中注册quill-image-drop-module
Quill.register('modules/imageDrop', ImageDrop);
const { TextArea } = Input;
const { Option } = Select;


export default class ModifyProduct extends React.Component {
    modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link', 'image'],
            ['clean'],
        ],
        imageDrop: true,
    };

    formats = [
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
    ];
    state = {
        loading: false,//
        quillstate: "",//富文本内容
        record: {},
        imgs: [],
        option: []

    };
    componentDidMount() {
       this.getoptions()
    }

    //得到一级二级分类,并且初始化option的值
    getoptions = async () => {
        let first = await API_GET_CATEGROY(0)
        //console.log("first",first)
        //this.state.option
        first.data.data.map(async (item, index) => {
            this.state.option.push({
                value: item._id,
                label: item.name,
                children: []
            })
            let second = await API_GET_CATEGROY(item._id)
            //console.log(second)
            second.data.data.map((item) => {
                //console.log(index,item)
                this.state.option[index].children.push({
                    value: item._id,
                    label: item.name
                })
            })
            this.setState({
                option:this.state.option
            })
        })
    }
    //富文本得到数据
    onQuillChange = (content) => {
        //console.log("content",content)
        let quillstate = content
        this.setState({
            quillstate
        })
    }
    //表单得到数据
    onFinish = async values => {
        if(!this.state.quillstate){
            let content = values.desc
            this.onQuillChange(content)
        }else{

        }



        console.log(this.refs.pictureswall.state.fileList)
        console.log(values.imgs)
        let fileList = this.refs.pictureswall.state.fileList
        let imgs = []
        fileList.map(item => {
            if (item.response) {
                let res = item.response.data.name
                imgs.push(res)
            } else {
                let res = item.name
                imgs.push(res)
            }
        })
        this.setState({imgs:imgs})
        //console.log(this.state.imgs)
        let quillstate = this.state.quillstate
        let { categoryIds, name, desc, price } = values
        if (!this.state.record.name) {
            if (!categoryIds[1]) {//添加数据
                let res = await API_POST_ADDPRODUCT(0, categoryIds[0], name, desc, price, quillstate, this.state.imgs)
                //console.log(res)
            } else {
                let res = await API_POST_ADDPRODUCT(categoryIds[1], categoryIds[0], name, desc, price, quillstate, this.state.imgs)
                //console.log(res)
            }
        } else {//修改数据
            let res = await API_POST_UPDATAPRODUCT(this.state.record._id, categoryIds[1], categoryIds[0], name, desc, price, quillstate, this.state.imgs)
            //console.log(res)
        }
        console.log('Success:', values);
        this.props.history.goBack()
        //console.log(res)
    };
    //钩子函数
    componentWillMount() {
        this.setrecord()
    }
    //初始化record
    setrecord = () => {
        let record = this.props.location.state.record || {}
        console.log(record)
        this.setState({
            record
        })

    }
    //完成分类掉函数
    onChange = (value) => {
        console.log(value);
    }
    //选择调该函数
    loadData = value => {
        console.log(value)
    }
    render() {
        const { option, record } = this.state;
        //console.log(option)
        return (
            // 
            <div>
                <Button type="primary" style={{ margin: 10 }} onClick={this.props.history.goBack}><LeftOutlined /> 返回</Button>
                <span>添加商品</span>
                <Form
                    style={{ marginLeft: 100, backgroundColor: "#fff", width: 1000, padding: 20 }}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                >
                    {/* 名称 */}
                    <Form.Item
                        style={{ width: "400px" }}
                        label="商品名称"
                        name="name"
                        initialValue={record.name}
                        rules={[{ required: true, message: '请输入商品名称' }]}
                    >
                        <Input placeholder="请输入商品名称" />
                    </Form.Item>
                    {/* 商品描述 */}
                    <Form.Item
                        style={{ width: "400px" }}
                        label="商品描述"
                        initialValue={record.desc}
                        name="desc"
                        rules={[{ required: true, message: '请输入商品描述' }]}
                    >
                        <TextArea placeholder="请输入商品描述" />
                    </Form.Item>
                    {/* 价格 */}
                    <Form.Item
                        style={{ width: "400px" }}
                        label="商品价格"
                        name="price"
                        initialValue={record.price}
                        rules={[{ required: true, message: '请输入商品价格' }]}
                    >
                        <Input type="number" placeholder="请输入商品价格" addonAfter="元" />
                    </Form.Item>
                    {/* 分类 */}
                    <Form.Item
                        style={{ width: "400px" }}
                        label="商品分类"
                        name="categoryIds"
                        rules={[{ required: true, message: '请输入商品分类' }]}
                        initialValue={[record.pCategoryId, record.categoryId]}
                    >
                        <Cascader
                            options={option}
                            onChange={this.onChange}
                            loadData={this.loadData}
                            changeOnSelect
                        />
                    </Form.Item>
                    {/* 图片 */}
                    <Form.Item
                        style={{ width: "400px" }}
                        label="商品图片"
                        name="imgs"

                    >
                        <PicturesWall imgs={record.imgs} ref="pictureswall"></PicturesWall>
                    </Form.Item>
                    {/* 详情 */}
                    <Form.Item style={{ width: 800 }} label="商品详情" initialValue={record.detail}>
                        <ReactQuill
                            theme="snow"
                            modules={this.modules}
                            formats={this.formats}
                            onChange={this.onQuillChange}
                            defaultValue={record.detail}
                            placeholder="Please Input"
                            style={{height:"180px"}}
                        />
                    </Form.Item>
                    {/* 提交 */}
                    <Form.Item style={{marginTop:70,textAlign:"center"}}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

