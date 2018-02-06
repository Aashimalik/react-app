import React,{ Component } from 'react';
import {Http} from '../lib/Http';

import AlertNotification from './aletmodal' ;

class login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            error:'',
            success:'',
            
        }
        this.handleChange=this.handleChange.bind(this);
        this.login=this.login.bind(this);

    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }
    login = () => {
        const {history}=this.props;
        const {username,password}=this.state;
        Http.post(`adminapi/user/login`,{username,password})
        .then((data) => {
            const {errors}=data
            if(errors){
                this.setState({error:errors.message})
            }
            if(data.token !=null){
                createCookie("token",data.token,1)
                history.push('/show')
            }

         
        })
        .catch((err)=>{console.log(err)})
        
      }
    

    render(){
        const {username,password,error,success}=this.state;
  
        return(
            <div className="container">
            <div className="col-md-5">
                <div className="form-area">  
                <AlertNotification alertVisible={error || success} alertMsg={error || success} className={error ? "danger" : "success"}/>
                    <form >
                    <h3 >Login</h3>
                        <div className="form-group">
                            <input type="text" name="username" value={username} className="form-control" onChange={this.handleChange} id="name"  placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" value={password} className="form-control" onChange={this.handleChange} id="phno" placeholder="Password" required />
                        </div>
                        <div className="form-group">
                                 
                                        <div  >
                                            Don't have an account!<a href='/signup' >signup</a>
                                        
                                        </div>
                                   
                                </div>   
                        
                    <button type="button" onClick={this.login} id="submit" name="submit" className="btn btn-primary pull-right">Login</button>
                    </form>
                </div>
            </div>

        </div> 
        
        )
    }
}


var createCookie = function(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}



export default login;