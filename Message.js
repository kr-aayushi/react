import React, { Component } from 'react';
import Welcome from './welcome';

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome"
        }
    }
    changeMessage(){
        this.setState({
            message:"thanks for subscibe"
        })
    }
    render() {
        return (

            <div>
                <h2>
                    {this.state.message}
                    <br></br>
                    <button onClick={()=>this.changeMessage()}>Subscribe</button>
                </h2>
            </div>
        )
    }
}

export default Message
