import React from 'react'

export default class Show extends React.Component{
    render(){
        return(
            <button onClick={()=>this.props.subnum()}>-</button>

        )
    }
}