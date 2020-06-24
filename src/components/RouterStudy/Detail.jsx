import React from 'react';
export default class Detail extends React.Component{
    render(){
        return(
            <div>
                Detail
               <h3>{this.props.match.params.id}</h3> 
            </div>
        )
    }
}