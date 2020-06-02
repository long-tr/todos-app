import React, { Component } from 'react'
import Tick from '../img/tick.png'
import Tick2 from '../img/tick2.png'
import Del from '../img/close.png'
export default class TodoItem extends Component {
    render() {
        let isCompleted = {
            color: '#999',
            textDecoration: 'line-through'
        }
        let checked = this.props.isCompleted ? <img src={ Tick2 } alt=""></img> : <img src={ Tick } alt=""></img>
        return (
            <div>
                <div className='check' onClick={ this.props.clicked }>{ checked }</div>
                <div className='item' style={ this.props.isCompleted ? isCompleted : null }>{ this.props.name }</div>
                <div className='del' onClick={ this.props.delete }>{ <img src={ Del } width={30} alt=""></img> }</div>
            </div>
        )
    }
}
