import React from 'react';
import {Link} from 'react-router-dom'

export default class List extends React.Component{
    render(){
        return(
            <div>
                List
                <h3>组件列表</h3>
                <ul>
                    <li><Link to="/detail/1">first</Link></li>
                    <li><Link to="/detail/2">2222</Link></li>
                    <li><Link to="/detail/3">3</Link></li>
                    <li><Link to="/detail/4">4444</Link></li>
                    <li><Link to="/detail/5">5</Link></li>
                </ul>
            </div>
        )
    }
}