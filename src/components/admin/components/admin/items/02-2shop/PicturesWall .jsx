import React from 'react'
import { Upload, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {API_POST_DELIMG} from '../../../api/index'

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }


export default class PicturesWall extends React.Component {
    state = {
      previewVisible: false,//大图显示
      previewImage: '',
      previewTitle: '',
      name:"",
      fileList: [
        
      ],
    };
    componentDidMount(){
      if(this.props.imgs){
        this.initimgs()
      }else{}
    }
    
    initimgs=()=>{
      let imgs =  this.props.imgs
      imgs.map((item,index)=>{
        this.state.fileList.push(
          {
            uid:-index,
            name:item,
            status:"done",
            url:"http://localhost:5000/upload/"+item
          }
        ) 
        this.setState({
          fileList:this.state.fileList
        })
      })
      //console.log(this.state.fileList)

    }
    handleCancel = () => this.setState({ previewVisible: false });
  
    handlePreview = async file => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
  
      this.setState({
        previewImage: file.url || file.preview,
        previewVisible: true,
        previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
      });
    };
    
    onRemove=async value=>{
        //console.log(value,"..0")
        let name = value.response.data.name
        let res =await API_POST_DELIMG(name)
        console.log(res)
        if(res.data.status==0){
            message.success("删除图片成功")
        }
    }
  
    handleChange = ({ file,fileList }) => {
        //console.log(file,"upload",fileList)
        if(file.status=="done"){
            console.log(file.response)
            if(file.response.status==0){
                message.success("上传图片完成")
                //console.log(fileList)
            }else{
                message.warn("上传图片失败")
            }
        }
        
        this.setState({ 
            fileList,
        });
    }
  
    render() {
      const { previewVisible, previewImage, fileList, previewTitle } = this.state;
      const uploadButton = (
        <div>
          <PlusOutlined />
          <div className="ant-upload-text">Upload</div>
        </div>
      );
      return ( 
        <div className="clearfix">
          <Upload
            action="/manage/img/upload" //图片上传地址
            listType="picture-card"
            fileList={fileList}
            name="image"
            onPreview={this.handlePreview}
            onChange={this.handleChange}
            onRemove={this.onRemove}  
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={this.handleCancel}
          >
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>
      );
    }
  }