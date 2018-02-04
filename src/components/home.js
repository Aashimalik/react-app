import React,{ Component } from 'react';
import {Http} from '../lib/Http';
import {Alert} from 'react-bootstrap';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})

    }
    login(event){
        // console.log("event",event);
        const {username,password}=this.state
        console.log("state",this.state);
        Http.post('adminapi/user/login',{username,password})
        .then(({data})=>{
            <Alert bsStyle="danger">
            <strong>Holy guacamole!</strong>
          </Alert>
            console.log({data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
      const  {username,password}=this.state;
        return(
            <div className="container">
                <div className="col-md-5">
                    <div className="form-area">  
                        <form >
                            <h3 >Login</h3>
                            <div className="form-group">
                                <input type="text" className="form-control" value={username} onChange={this.handleChange} id="name" name="username" placeholder="Name" required />
                            </div>
                            <div className="form-group">
                                <input type="text"  className="form-control" value={password}  onChange={this.handleChange} id="password" name="password" placeholder="Phone" required />
                            </div>
                           
                        <button type="button" id="submit" name="submit" onClick={this.login} className="btn btn-primary pull-right">Log in</button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}
export default Home;