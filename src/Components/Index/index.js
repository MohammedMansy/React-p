import React, { Component } from 'react';
import Home from './../Home';
import Work from './../Work';
import Portfolio from './../Portfolio';
import Profile from './../Profile';
import About from './../About';
import SociaMedia from './../SocialMedia';
import Footer from './../Footer';


class  Index extends Component {
  render(){
    return (
      <div >
        <Home/>
        <Work/>
        <Portfolio />
        <Profile/>
        <About/>
        <SociaMedia/>
        <Footer/>
      </div>
    );
  }
}

export default Index;
