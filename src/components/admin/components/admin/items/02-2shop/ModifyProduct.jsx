import React from "react"
import { Form, Input, Button, Checkbox, Select, Upload, Modal, message, Cascader } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import ReactQuill, { Quill } from 'react-quill';
import { ImageDrop } from 'quill-image-drop-module';
import 'react-quill/dist/quill.snow.css';
import { LeftOutlined } from '@ant-design/icons';
import { API_GET_CATEGROY, API_POST_ADDPRODUCT, API_POST_UPDATAPRODUCT } from '../../../api/index'
import  PicturesWall from './PicturesWall '

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
        firstres: [],//父类数据
        secondres: [],//子类数据
        quillstate: "",//富文本内容
        option: [],
        childoption: [],
        record: {}
    };

    //富文本得到数据
    onQuillChange = (content, delta, source, editor) => {
        //console.log(content)
        let quillstate = content
        this.setState({
            quillstate
        })
    }
    //表单得到数据
    onFinish = async values => {
        let quillstate = this.state.quillstate
        let { categoryIds, name, desc, price, imgs } = values
        if (!this.state.record.name) {
            if(!categoryIds[1]){
                let res = await API_POST_ADDPRODUCT(0, categoryIds[0], name, desc, price, quillstate, imgs)
                console.log(res)
            }else{
                let res = await API_POST_ADDPRODUCT(categoryIds[1], categoryIds[0], name, desc, price, quillstate, imgs)
                console.log(res)
            }
        } else {
            let res = await API_POST_UPDATAPRODUCT(this.state.record._id,categoryIds[1], categoryIds[0], name, desc, price, quillstate, imgs)
            console.log(res)
        }
        console.log('Success:', values);
        this.props.history.goBack()
        //console.log(res)
    };
    //钩子函数
    componentWillMount() {
        this.getclassdata(0)
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
    //初始化数据option
    initoption = (firstres) => {
        //console.log(firstres)
        const option = firstres.map(item => {
            return {
                value: item._id,
                label: item.name,
                isLeaf: false,

            }
        })

        this.setState({ option })
    }
    initoptionsec = (secondres) => {
        //console.log(firstres)
        const childoption = secondres.map(item => {
            return {
                value: item._id,
                label: item.name,
                parentId: item.parentId
            }
        })
        this.setState({ childoption }, () => {
            //console.log(this.state.childoption)
            let options = this.state.option.map(item => {
                if (this.state.childoption.parentId == item._id) {
                    return item.children = this.state.childoption
                }
            })
            this.setState({
                option: this.state.option
            })

        })
    }


    //得到分类数据
    getclassdata = async (parentId) => {
        let res = await API_GET_CATEGROY(parentId)
        //console.log(res)
        let firstres = res.data.data
        this.initoption(firstres)
        this.setState({
            firstres
        })
    }
    onChanges = async value => {
        console.log(value)
        let res = await API_GET_CATEGROY(value)
        let secondres = res.data.data
        this.initoptionsec(secondres)

    }

    //得到父类id
    onChange = async value => {
        console.log(value)
        let res = await API_GET_CATEGROY(value)
        //console.log(res)
        let secondres = res.data.data
        this.setState({
            secondres
        })
    }
    //得到子类id
    onChangesecond = (value) => {
        console.log(value)
    }
    render() {
       

      
        
        const {  option, record } = this.state;
        //console.log(firstres)
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
                    <Form.Item
                        style={{ width: "400px" }}
                        label="商品名称"
                        name="name"
                        initialValue={record.name}
                        rules={[{ required: true, message: '请输入商品名称' }]}
                    >
                        <Input placeholder="请输入商品名称" />
                    </Form.Item>
                    <Form.Item
                        style={{ width: "400px" }}
                        label="商品描述"
                        initialValue={record.desc}
                        name="desc"
                        rules={[{ required: true, message: '请输入商品描述' }]}
                    >
                        <TextArea placeholder="请输入商品描述" />
                    </Form.Item>
                    <Form.Item
                        style={{ width: "400px" }}
                        label="商品价格"
                        name="price"
                        initialValue={record.price}
                        rules={[{ required: true, message: '请输入商品价格' }]}
                    >
                        <Input type="number" placeholder="请输入商品价格" addonAfter="元" />
                    </Form.Item>
                    <Form.Item
                        style={{ width: "400px" }}
                        label="商品分类"
                        name="categoryIds"
                        rules={[{ required: true, message: '请输入商品分类' }]}>
                        <Cascader options={option} changeOnSelect={true} onChange={this.onChanges} placeholder="Please select" />
                    </Form.Item>
                    <Form.Item
                        style={{ width: "400px" }}
                        label="商品图片"
                        name="imgs"

                    >
                        <PicturesWall></PicturesWall>
                    </Form.Item>

                    <Form.Item style={{ width: 800 }} label="商品详情" initialValue={record.detail}>
                        <ReactQuill
                            theme="snow"
                            modules={this.modules}
                            formats={this.formats}
                            onChange={this.onQuillChange}
                            defaultValue={record.detail}
                            placeholder="Please Input"

                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

