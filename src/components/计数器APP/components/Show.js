import React from 'react'

export default class Show extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.num}</h3>
            </div>
        )
        
    }
}