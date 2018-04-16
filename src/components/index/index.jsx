import React, { Component } from 'react';
import Header from '../public/header.jsx';
import Banner from '../public/banner.jsx';
class Index extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        <div className="index">
            <Header></Header>
            <Banner></Banner>
            
        </div>
    );
  }
}
export default Index;
