import React, { Component } from 'react';
import $ from 'jquery';
import Header from '../public/header.jsx';
import Banner from '../public/banner.jsx';
import Main from './panel_main/panel_main.jsx';
import Aside from './panel_aside/panel_aside.jsx';
import Footer from '../public/footer.jsx';
class Index extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $(".go-top").on("click",function(){
            $("html,body").animate({"scrollTop":0})
        })
    }
    render() {
        return (
            <div className="index">
                <Header></Header>
                <Banner></Banner>
                <div className="main clearfix">
                    <Main />
                    <Aside />
                </div>
                <Footer />
                <a href="javascript:void(0)" className="fixedright"></a>
                <div className="go-top">
                    <a href="javascript:;">返回顶部</a>
                </div>
            </div>
        );
    }
}
export default Index;
