import React from 'react'

export default class Moive extends React.Component{
    componentDidMount(){
        this.props.getstateAsync()
    }
    render(){
        return(
            <div>
                <ul>
                    {this.props.films && this.props.films.map((item,index)=>{
                        return(
                            <li key={index}>
                                <h3>{item.name}</h3>
                                <img width='150'  src={item.img}/>
                            </li>
                        )
                    })}
                </ul>
                <button></button>
            </div>
        )
    }
}