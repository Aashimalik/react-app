import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';
import {Http} from '../lib/Http';
import AlertNotification from './aletmodal' ;

class Signup extends Component{
    constructor(props) {
        super(props);
        
        this.handleChange=this.handleChange.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.Signup = this.Signup.bind(this);
        this.state = {
          show: false,
          username:'',
            password:'',
            message:'',
        };
      }
      handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

      componentDidMount(){
        
        this.setState({ show: true })
      }

    handleHide() {
        console.log(this.props)
        const {history}=this.props
        this.setState({ show: false });
        history.push('/login')
      }

      Signup(){
          console.log("signup",this.state)
         
          const {username,password}=this.state;
          Http.post(`adminapi/user/sign`,{username,password})
          .then((data) => { 
              this.setState({message:data.message})
            //   if(data.message=='User registered successfully'){
            //         history.push('/')
            //       }
              console.log(data)
              
          })
         
      }

    render(){
        const {username,password,message}=this.state
      
        return(
            <div className="modal-container" style={{ height: 200,width: 10}}>
           
    
            <Modal
              show={this.state.show}
              onHide={this.handleHide}
              container={this}
              aria-labelledby="contained-modal-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">
                <AlertNotification alertVisible={message} alertMsg={message} className={message!== 'User registered successfully' ? "danger" : "success"}/>
                 Signup
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              
                <div className="form-area">  
              <form >
              <div className="form-group">
              <input type="text" name="username" value={username} className="form-control" onChange={this.handleChange} id="name"  placeholder="Name" required />
             </div>
             <div className="form-group">
              <input type="password" name="password" value={password} className="form-control" onChange={this.handleChange} id="phno" placeholder="Password" required />
            </div>
              </form>
              </div>
            
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleHide}>Close</Button>
                <Button bsStyle="info" onClick={this.Signup} >Signup</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
    }

}

export default Signup;