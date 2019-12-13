import React, { Component } from 'react';
import AllPost from './AllPost';
import Delete from './Delete';
import browserHistory from '../Utils/browserHistory'


class User extends Component {
   navigate=()=>{
    browserHistory.push('/')
   }
   next=()=>{
    browserHistory.push('/reg')
   }
    render() {
        return (
            <div>
                <Delete />
                <AllPost />
                <div><button onClick={this.navigate}>Log Out</button></div>
                <div><button onClick={this.next}>Register</button></div>
            </div>
        );
    }
}

export default User;