import React from 'react';
export default class Footer extends React.Component{
    render(){
        return(
            <footer className="footer">
            <span className="todo-count"><strong></strong> items left</span> 
            <ul className="filters">
                <li><a href="javascript:;" 
                className="all" >all</a></li>
                <li><a href="javascript:;"  
                >active</a></li>
                <li><a href="javascript:;"   
                >completed</a></li>
            </ul> 
        </footer>
        )
    }
}
