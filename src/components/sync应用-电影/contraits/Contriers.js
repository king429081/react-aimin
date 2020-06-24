import React from 'react'

import {connect } from 'react-redux'
import {gets,movie,getstateAsync} from '../actions/index'

import Movie from '../components/Movie'

class Contriers extends React.Component{
    
    render(){
        return(
            <div>
                <Movie getstateAsync={this.props.getstateAsync} films={this.props.films}></Movie>
            </div>
        )
    }
}
export default connect(state=>({films:state.films}),{gets,movie,getstateAsync})(Contriers)