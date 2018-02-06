import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';

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
      }

    render(){
        const {username,password}=this.state
      
        return(
            <div className="modal-container" style={{ height: 200 }}>
           
    
            <Modal
              show={this.state.show}
              onHide={this.handleHide}
              container={this}
              aria-labelledby="contained-modal-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">
                 Signup
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <form >
                   
              <div className="form-group">
              <input type="text" name="username" value={username} className="form-control" onChange={this.handleChange} id="name"  placeholder="Name" required />
          </div>
          <div className="form-group">
              <input type="password" name="password" value={password} className="form-control" onChange={this.handleChange} id="phno" placeholder="Password" required />
          </div>
              </form>
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