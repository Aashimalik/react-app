import React,{ Component } from 'react';
import {Http} from '../lib/Http';


class CreateContact extends Component{
    constructor(props){
        super(props);
        this.formSubmit=this.formSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.resetForm=this.resetForm.bind(this);
        this.handleupdateclick=this.handleupdateclick.bind(this);
        this.state={name:"",phno:"",email:"",address:""};
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});
    }
    resetForm(){
        this.setState({name:"",phno:"",email:"",address:""});
    }
  
    handleupdateclick() {
        const {match}=this.props;
         let id=match.params.id;
        Http.get(`/contact/${id}`)
        .then((data) => {
           const {name,phno,email,address}=data.contact;
           this.setState({
            name,phno,email,address
           })
        })
        .catch((err)=>{console.log(err)})
    }  
     
    formSubmit(event){
        const {name,phno,email,address}=this.state; 
         const {history}=this.props;
         const {match}=this.props;
         let id=match.params.id;
         if(id){
            Http.put(`/contact/update/${id}`,{name,phno,email,address})
            .then((data) => {
            const {name,phno,email,address}=data.contact;
            this.setState({
                name,phno,email,address
            });
            this.resetForm();
            
             history.push('/show')
            })
            .catch((err)=>{
             console.log(err)})
         }
         else{
        Http.post(`/contact`,{name,phno,email,address})
        .then((data) => {
             this.setState({
                name,phno,email,address
               });
            this.resetForm();
            history.push('/show')
        })
        .catch((err)=>{console.log(err)})
         }
            
    }   
    componentDidMount(){
        const {match}=this.props;
        if(match){
            let id=match.params.id;
        if(id){  this.handleupdateclick();}
        }
    }



    render(){
    

        const {name,phno,email,address}=this.state; 
        const isEnabled = name.length > 0 &&  email.length > 0 && phno.length>0 && address.length>0;
         
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
                            
                            
                        <button type="button" disabled={!isEnabled} onClick={this.formSubmit} id="submit" name="submit" className="btn btn-primary pull-right">Submit Form</button>
                        </form>
                    </div>
                </div>

            </div>
            
        )
    }
}

export default CreateContact