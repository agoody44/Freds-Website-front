import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div className='container'>
                <form>
                    <div className="singleItem">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' className="name" placeholder="your name..."/>
                    </div>

                    <div className="singleItem">
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" name='lastname' className="lastname" placeholder="your lastname..."/>
                    </div>

                    <div className="singleItem">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' className="name" placeholder="your email..."/>
                    </div>

                    <div className="textarea singleItem">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="" cols="30" rows="5" placeholder='your message...'>
                        </textarea>
                    </div>

                    <div className="msg">Message has been sent</div>

                    <div className="btn">
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
