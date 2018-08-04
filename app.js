import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component{
  constructor(){
    super()
    const todos=[

      ]
    this.state={
      todos:todos,
      count:todos.length+1,
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const todos = this.state.todos.slice()
    const count = this.state.count

    todos.push({
      id: count,
      title: title,
      desc: desc,
      done: false,
    });
    this.setState({ todos:todos })
    this.setState({ count: count + 1 })

    e.target.title.value = '';
    e.target.desc.value = '';

  }
  setTodoStatus(target){
    const todos = this.state.todos.slice();
    const todo = todos[target.id-1];
    todo.done=!todo.done;
    todos[target.id-1]=todo;
    this.setState({todos});
  }
  render () {
    return(
      <div className="Main">
        <h1>Todo App</h1>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList todos={this.state.todos} setTodoStatus={this.setTodoStatus.bind(this)}/>
      </div>
    );
  }
}

class TodoList extends React.Component{

  render () {
    const todos = this.props.todos.map(todo=>
          <Todo key={todo.id} {...todo} setTodoStatus={this.props.setTodoStatus}/>
    )
    return(
      <div className="todoList">
        {todos}
      </div>
    );
  }

}

class Todo extends React.Component{
  render(){
    const className =  this.props.done ? "done todo" :"undone todo"
    const link = this.props.done ? "完了済み":"未達成"
    return(
      <div className={className}>
        <span> {this.props.id}</span>
        <span> : {this.props.title} </span>
        <a href="" onClick={(e)=>{e.preventDefault(); this.props.setTodoStatus(this.props)}}>{link}</a>
        <p>{this.props.desc}</p>
      </div>
    );
  }

}

class Form extends React.Component{
  render(){
    return(
      <div className="form">
        <form　onSubmit={this.props.handleSubmit}>
          <input name="title" type="text"
            placeholder="タイトルを記入してください(必須)"/>
          <br/>
          <textarea name="desc" placeholder="説明記入欄"　/>
          <br/>
          <button type="submit">Todoを作成</button>
        </form>
      </div>
    );
  }
}


ReactDOM.render(< Main />, document.getElementById('react-container'));
