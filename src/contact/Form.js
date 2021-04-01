import React, { Component } from 'react';
import axios from 'axios';

// import profilepic from '../imgs/profilepic.png';
import generic_license from '../imgs/generic_license.jpg';
// import Insta2 from '../imgs/Insta2.png';


export default class Form extends Component {


state={
    name:'',
    // lastname:'',
    email:'',
    message:'',
    sent:false,
    buttonText: 'Send Message',

}


// handle inputs 

handleName = (e)=>{
    this.setState({
        name:e.target.value
})
}

// handleLastname = (e)=>{
//     this.setState({
//         lastname:e.target.value
//     })
// }

handleEmail = (e)=>{
    this.setState({
        email:e.target.value
    })
}

handleMessage = (e)=>{
    this.setState({
        message:e.target.value
    })
}

// end of handle inputs





formSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state);
    console.log('submit clicked');



    let data = {
        name:this.state.name,
        // lastname:this.state.lastname,
        email:this.state.email,
        message:this.state.message
    }




axios.post('/send', data)
.then(res => {
    this.setState({
        sent:true,
    },this.resetForm())
})
.catch(()=>{
    console.log('message not send');
    
})


}

// for reseting the form data
resetForm=()=>{
    this.setState({
        name:'',
        // lastname:'',
        email:'',
        message:'',
    })

    setTimeout(()=>{
        this.setState({
            sent:false,
        })
    },2000)
}




    render() {
        return (
            <div className='form-footer'>
                <div className="container">
                    <h1>Contact Me</h1>
                        <form onSubmit={this.formSubmit}>

                                <div className='singleItem'>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" 
                                    name="name" 
                                    className="name" 
                                    value={this.state.name} 
                                    onChange={this.handleName} 
                                    placeholder="your name..." />
                                </div>

                            {/* <div className="row">
                                <label htmlFor="lastname">Lastname</label>
                                <input type="text" 
                                name="lastname" 
                                className="lastname" 
                                value={this.state.lastname} 
                                onChange={this.handleLastname} 
                                placeholder="your lastname..." />
                            </div> */}
                            
                                <div className='singleItem'>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" 
                                    name="email" 
                                    className="email" 
                                    value={this.state.email} 
                                    onChange={this.handleEmail} 
                                    placeholder="your email..." 
                                    required />
                                </div>
                            
                                <div className="textArea singleItem">
                                        <label htmlFor="message">Message me</label>
                                        <textarea name="message" 
                                        value={this.state.message} 
                                        id="" cols="25" rows="5" 
                                        placeholder="your message..." 
                                        onChange={this.handleMessage}></textarea>
                                </div>
                                <div className={this.state.sent ?'msg msgAppear':'msg'}>Message has been sent</div>
                                <div className="btn">
                                    <button type="submit">Submit</button>
                                </div>
                        </form>
                </div>

                <div className='Info'>
                    {/* <div className='profilepic'>
                            <img id='logo' src={profilepic} alt="Logo" width="200" height="200" />
                    </div> */}

                    <div className='certificate'>
                            <img id='logo' src={generic_license} alt="Logo" />
                    </div>

                    {/* <div className='Insta'>
                            <img id='logo' src={Insta2} alt="Logo" />
                    </div> */}

                </div>

            </div>    
        )
    }
}





