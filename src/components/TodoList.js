import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            tasks: [
                { name: 'Ăn sáng', isCompleted: true },
                { name: 'Đi làm', isCompleted: false },
                { name: 'Ăn trưa', isCompleted: false },
                { name: 'Ăn trưa', isCompleted: false }
            ],
            status: null
        }
    }
    onCompleteHandler = (taskIndex) =>{
        let { tasks } = this.state
        this.setState({
            tasks: [
            ...tasks.slice(0, taskIndex),
            { 
                name: tasks[taskIndex].name, isCompleted: !tasks[taskIndex].isCompleted
            },
            ...tasks.slice(taskIndex + 1)
            ]}
        )
    }
    onDeleteHandler = (taskIndex) =>{
        let { tasks } = this.state
        let newTasks = [...tasks]
        newTasks.splice(taskIndex, 1)
        this.setState({
            tasks: newTasks
        })
    }
    onAddHandler = event => {
        let { tasks } = this.state
        if(event.key === 'Enter'){
            if(event.target.value){
                this.setState({
                    tasks: [
                        ...tasks,
                        {
                            name: event.target.value,
                            isCompleted: false
                        }
                    ]
                })
                event.target.value = ''
            }
            else{
                return
            }
        }
    }
    filterByStatus = status =>{
        this.setState({
            status: status
        })
    }
    render() {
        const { tasks, status } = this.state
        let tasksList = []
        // const TodoItem = 
        if(status == null){
            tasksList = [...tasks]
        }
        else{
            if (status == 'active') {
                tasksList = [...tasks.filter(item => item.isCompleted == false)]
            }
            else{
                tasksList = [...tasks.filter(item => item.isCompleted == true)]
            }
        }
        const BtnActive = {
            background: '#25ae88',
            color: '#fff'
        }
        return (
            <div>
                <input name='name' placeholder='New item' onKeyDown={ this.onAddHandler }></input>
                <div className='List'>
                    { tasksList.map((task, index) => 
                        <TodoItem 
                            key={ index } 
                            name={ task.name } 
                            isCompleted={ task.isCompleted } clicked={ () => this.onCompleteHandler(index)  } 
                            delete = { () => this.onDeleteHandler(index) }
                        />) 
                    }
                </div>
                <div className='Footer'>
                    <p> { tasksList.length > 1 ? tasksList.length + ' items left' : tasksList.length + ' item left'} </p>
                    <a className='status' href='#' style={ this.state.status == null ? BtnActive : null } onClick={ () => this.filterByStatus(null) }> All </a>
                    <a className='status' href='#' style={ this.state.status == 'active' ? BtnActive : null } onClick={ () => this.filterByStatus('active') }> Active </a>
                    <a className='status' href='#' style={ this.state.status == 'completed' ? BtnActive : null } onClick={ () => this.filterByStatus('completed') }> Completed </a>
                </div>
            </div>
        )
    }
}
