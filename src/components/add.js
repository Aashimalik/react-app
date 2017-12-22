import React,{ Component } from 'react';
import {Http} from '../lib/Http';


class CreateContact extends Component{
    constructor(props){
        super(props);
        this.formSubmit=this.formSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.state={name:"",phno:"",email:"",address:""};
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }
        
     formSubmit(event){
         const {name,phno,email,address}=this.state; 
                return new Promise((resolve, reject) => {
                    Http.post('https://zenways-contact.herokuapp.com/api/contact',{name,phno,email,address},'ZENWAYS01AYESHA01')
                    .then(({data}) => {
                    console.log(data);
                    })
                    .catch((err)=>{console.log(err)})
                    });
     }    
    render(){
        const {name,phno,email,address}=this.state; 
        return (
            <div className="container">
                <div className="col-md-5">
                    <div className="form-area">  
                        <form >
                            <h3 >Contact Form</h3>
                            <div className="form-group">
                                <input type="text" value={name} onChange={this.handleChange} className="form-control" id="name" name="name" placeholder="Name" required />
                            </div>
                            <div className="form-group">
                                <input type="text" value={phno} onChange={this.handleChange} className="form-control" id="phno" name="phno" placeholder="Phone" required />
                            </div>
                            <div className="form-group">
                                <input type="text"value={email}  onChange={this.handleChange} className="form-control" id="email" name="email" placeholder="email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" value={address} onChange={this.handleChange} className="form-control" id="address" name="address" placeholder="Address" required />
                            </div>
                            
                            
                        <button type="button" onClick={this.formSubmit} id="submit" name="submit" className="btn btn-primary pull-right">Submit Form</button>
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default CreateContact