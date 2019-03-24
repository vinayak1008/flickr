import React, { Component } from 'react';
import "./Homepage/Homepage.scss"
import Header from './Homepage/header';
import Coverpage from './Homepage/coverpage';
import Footer from './Homepage/footer';

class Homepage extends Component {
    render() { 
        return ( 
            <div className="homePage">
                <Header />
                <Coverpage />
                <Footer />
            </div>
         );
    }
}
 
export default Homepage;