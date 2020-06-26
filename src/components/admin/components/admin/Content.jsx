import React from "react"
import {Route} from 'react-router-dom'
import Index from './items/Index'
 export default class ContentItem extends React.Component{
    render(){
        return(
            <div>
                123
                <Route path="/" component={Index}></Route>
                <Route path="/" component={Index}></Route>
                <Route path="/" component={Index}></Route>
            </div>
        )
    }
}

