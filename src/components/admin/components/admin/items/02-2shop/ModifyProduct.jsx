import React from "react"
import { Form, Input, Button, Checkbox, Select, Upload, Modal, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;


export default class ModifyProduct extends React.Component {

    state = {
        loading: false,
      };
    handleChange = (value) => {
        console.log({ value });
    }
    render() {
        function getBase64(img, callback) {
            const reader = new FileReader();
            reader.addEventListener('load', () => callback(reader.result));
            reader.readAsDataURL(img);
        }

        function beforeUpload(file) {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isJpgOrPng) {
                message.error('You can only upload JPG/PNG file!');
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                message.error('Image must smaller than 2MB!');
            }
            return isJpgOrPng && isLt2M;
        }
        const uploadButton = (
            <div>
              {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div className="ant-upload-text">Upload</div>
            </div>
          );
        const onFinish = values => {
            console.log('Success:', values);
        };
        const { imageUrl } = this.state;
        return (
            <div>
                <h3>ModifyProduct</h3>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        style={{ width: "400px" }}
                        label="商品名称"
                        name="productname"
                        rules={[{ required: true, message: '请输入商品名称' }]}
                    >
                        <Input placeholder="请输入商品名称" />
                    </Form.Item>
                    <Form.Item
                        style={{ width: "400px" }}
                        label="商品描述"
                        name="productmodify"
                        rules={[{ required: true, message: '请输入商品描述' }]}
                    >
                        <TextArea placeholder="请输入商品描述" />
                    </Form.Item>
                    <Form.Item
                        style={{ width: "400px" }}
                        label="商品价格"
                        name="productprice"
                        rules={[{ required: true, message: '请输入商品价格' }]}
                    >
                        <Input placeholder="请输入商品价格" addonAfter="元" />
                    </Form.Item>
                    <Form.Item
                        style={{ width: "400px" }}
                        label="商品分类"
                        name="productclass"
                        rules={[{ required: true, message: '请输入商品分类' }]}
                    >
                        <Select defaultValue="请输入商品分类" onChange={this.handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        style={{ width: "400px" }}
                        label="商品图片"
                        name="productpicture"
                    >
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
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

