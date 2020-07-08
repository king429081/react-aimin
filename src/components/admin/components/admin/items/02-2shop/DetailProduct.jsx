import React from "react"
import {API_GET_CATEGROY} from '../../../api/index'
import { Button} from 'antd';
import { LeftOutlined } from '@ant-design/icons';

export default class DetailProduct extends React.Component {

    componentWillMount() {
        this.getrecrod();
        
    }
    
    state={
        record:[],
        firstclass:"",
        sceondclass:""
    }


//得到传的数据
    getrecrod=()=>{
        let record = this.props.location.state.record
        //console.log(record)
        this.getclassname(0)
        this.getclassname(record.pCategoryId)
        this.setState({
            record
        })
    }
//得到分类名称
    getclassname = async (parentId)=>{
        let res= await API_GET_CATEGROY(parentId)
        //console.log(res)
        res.data.data.forEach(item => {
            //console.log(item)
            if(item._id==this.state.record.pCategoryId){
                //console.log(item)
                let firstclass = item.name
                this.setState({
                    firstclass
                })

            }else if( item._id == this.state.record.categoryId){
                //console.log(item)
                let sceondclass = item.name
                this.setState({
                    sceondclass
                })
            }
        });
    }
    render() {
        let{ record ,firstclass,sceondclass}= this.state
        //console.log(record)
        return (
            <div>
                <Button type="primary" style={{margin:10}} onClick={this.props.history.goBack}><LeftOutlined /> 返回</Button>
                
                <h3>商品名称：{record.name}</h3>
                <h3>商品描述：{record.desc}</h3>
                <h3>商品价格：￥{record.price}</h3>
                <h3>商品分类：{firstclass}=={sceondclass}</h3>
                <h3>商品图片：{record.imgs.map(item => {
                    return <img src={"http://localhost:5000/upload/"+item} alt="" />
                })}</h3>
                <h3>商品详情</h3> <div dangerouslySetInnerHTML={{__html:record.detail}}/>
            </div>
        )
    }
}

