import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      name:'',
      email:'',
       password:'', 
       phone:'',
       id:0
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/users").then((result) => {
      this.setState({
        users: result.data,
      });
    });
  }


  nameChange =(e)=>{
    this.setState({
      name:e.target.value
    });
  }

  emailChange=(e)=>{
    this.setState({
      email:e.target.value
    });
  }

  passwordChange=(e)=>{
    this.setState({
      password:e.target.value
    })
  }

  addRec=(e,id)=>{
  if(id===0){
         
    axios.post('http://localhost:5000/users',{name:this.state.name,email:this.state.email,password:this.state.password})
    .then(()=>{
      this.componentDidMount();
    })

  }else{

    axios.put(`http://localhost:5000/users/`+(id),{name:this.state.name,email:this.state.email,password:this.state.password})
    .then(()=>{
      this.componentDidMount();
    })

  }
  }

  delRec=(e,id)=>{
    axios.delete(`http://localhost:5000/users/`+(id))
    .then(()=>{
      this.componentDidMount();
    })
  }

  editRec=(e,id)=>{
    axios.get(`http://localhost:5000/users/`+(id))
    .then((result)=>{
         this.setState({
          name:result.data.name,
          email:result.data.email,
          password:result.data.password,
          id:result.data.id
         })
    })
   
  }

  render() {
    const { users } = this.state;

    return (
      <div className="container">
        <form autoComplete="off" onSubmit={(e)=>this.addRec(e,this.state.id)}>
          <div className="form-group">
            <label><b>User Name</b></label>
            <input type="text" className="form-control"placeholder="User Name" name="name" value={this.state.name}
            onChange={(e)=>this.nameChange(e)}/>
          </div>

          <div className="form-group">
            <label><b>User email</b></label>
            <input type="email" className="form-control"placeholder="User email" name="email" value={this.state.email}
            onChange={(e)=>this.emailChange(e)}/>
          </div>

          <div className="form-group">
            <label><b>User password</b></label>
            <input type="password" className="form-control"placeholder="User password" name="password" value={this.state.password}
            onChange={(e)=>this.passwordChange(e)}/>
          </div>

          <input type="submit" className={this.state.id===0?"btn btn-primary":"btn btn-success"} value={this.state.id===0?"Add":"update"}/>
        </form>

        <table className="table table-border table-borderd text-center table-striped">
          <thead>
            <tr>
              <th>user id</th>
              <th>user name</th>
              <th>user email</th>
              <th>user password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button className="btn btn-danger" onClick={(e)=>this.delRec(e,user.id)}>Delete</button> |
                  <button className="btn btn-primary" onClick={(e)=>this.editRec(e,user.id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
