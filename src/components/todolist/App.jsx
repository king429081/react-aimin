import React from 'react';

import Counter from './counter/Counter'

import '../../styles/todo-mvc.css'

export default class App extends React.Component{
    render(){
        return(
            <div>
                <section className="todoapp">
                    <Counter></Counter>
                </section>
            </div>
        )
    }
}
