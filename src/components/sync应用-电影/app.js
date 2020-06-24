import React from 'react'



import Contriers from './contraits/Contriers'


export default class App extends React.Component{
    render(){
        return(
            <div>
                <h3>Movie组件</h3>
                <Contriers></Contriers>
            </div>
        )
    }
}