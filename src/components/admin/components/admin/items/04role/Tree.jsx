import React from "react"
import { Tree } from 'antd';
import menuList from '../../menuConfig'
const { TreeNode } = Tree;
export default class Trees extends React.Component {
    componentWillMount() {
        this.getMenuList()
    }
    state = {
        menulist: [],
        menuLists: [],
        checked: [],
        selecteds: []
    }
    //初始化 获取菜单列表
    getMenuList = () => {
        menuList.map((item, index) => {
            //console.log(item)
            this.state.menulist.push({
                title: item.title,
                key: item.key,

                children: []
            })
            if (item.children) {
                item.children.map((item, ind) => {
                    this.state.menulist[index].children.push({
                        title: item.title,
                        key: item.key
                    })
                })
            }
        })
        let menuLists = [
            {
                title: 'parent 1-0',
                key: '0-0',
                children: this.state.menulist

            }
        ]
        this.setState({
            menuLists
        })

    }


    onCheck = (checkedKeys, info) => {
        console.log(checkedKeys );
        this.setState({
            checked: checkedKeys
        })
    };
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    render() {
        let { menuLists } = this.state
        return (
            <div>
                <Tree
                    
                    checkable
                    defaultExpandAll
                    defaultExpandedKeys={['0-0-0', '/admin/home']}
                    defaultSelectedKeys={['0-0-0', '/admin/home']}
                    defaultCheckedKeys={['0-0-0', '/admin/home']}
                    onSelect={this.onSelect}
                    onCheck={this.onCheck}
                    treeData={menuLists}
                />
            </div>
        )
    }
}

