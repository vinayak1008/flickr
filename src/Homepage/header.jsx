import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return ( 
            <div className="header">
                <div className="main">
                    <div className="left">
                        <h2>flickr</h2>
                    </div>
                    <div className="middle">
                        <i class="fa fa-search" aria-hidden="true" />
                        <input 
                        type="text" 
                        placeholder="Photos, Group or People"
                        />
                    </div>
                    <div className="right">
                        <span className="log">Log In</span>
                        <span className="sign">Sign Up</span>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Header;