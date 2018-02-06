import React,{Component} from 'react';
import { Button } from 'react-bootstrap';
class Forgot extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            confirm_password:'',
            password:''

        }
        this.reset=this.reset.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    reset(){
        console.log("vfdvg",this.state)
    }
    render(){
       const {username,password,confirm_password}=this.state
        return(
        <div className="container">
            <div   className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <div className="panel-title">Create New Password</div>
                    </div>                     
                    <div className="panel-body">
                        <form  className="form-horizontal" >
                            <div className="form-group">
                                <label htmlFor="username" className=" control-label col-sm-3">Registered email</label>
                                <div className="col-sm-9">
                                    <input type="text" onChange={this.handleChange} className="form-control" id="username" value={username} name="username" placeholder="Please input your Username register with us" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className=" control-label col-sm-3">New password</label>
                                <div className="col-sm-9">
                                    <input type="password" onChange={this.handleChange} className="form-control" id="password" value={password} name="password" placeholder="create your new password" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm_password" className=" control-label col-sm-3">Confirm password</label>
                                <div className="col-sm-9">
                                    <input type="password" onChange={this.handleChange} className="form-control" id="confirm_password" value={confirm_password} name="confirm_password" placeholder="confirm your new password"/>
                                </div>
                            </div>
                            <div className="form-group">
                                                                
                                <div className="  col-sm-offset-3 col-sm-9">
                                    <Button  onClick={this.reset} >Submit</Button>
                                </div>
                            </div>                             
                        </form>
                    </div>
                </div>
            </div>             
        </div>
        );
    }

}
export default Forgot;