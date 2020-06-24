 import React from 'react'

 export default class AddList extends React.Component{
     static PropTyps = {
         
     }
     handleKeyUp=(e)=>{
         let content = e.target.value.trim();
         if(!content) return;
         if(e.keyCode === 13){
             this.props.addTodo(content)
             e.target.value= ""
         }
     }
    // handleKeyUp=(e)=>{
    //     console.log(e.target.value)
    // }
     render(){
         return(
             <div>
                 <header className="header">
                <h1>todos</h1>
                <input 
                type="text" 
                placeholder="what need to be done?" 
                className="new-todo"
                onKeyUp={this.handleKeyUp}
                />
            </header>
             </div>
         )
     }
 }