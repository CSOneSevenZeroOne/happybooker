import React, { Component } from 'react';
import $ from 'jquery';
import Classfiy from './classfiy/classfiy.jsx';
import Aside from './aside/aside.jsx';
import Author from './author/author.jsx';
import Bookinfo from './bookinfo/bookinfo.jsx';
import Mainaside from '../index/panel_aside/panel_aside.jsx';
import List from './list/list.jsx';
import Footer from '../public/footer.jsx';
import { connect } from 'react-redux'

class Book extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(window.location.href);
        if(window.location.href.indexOf("?bookid=")>-1){
            //this.props.changeBookStatus();
            var str=window.location.href.split("?bookid=")[1];
            $.ajax({
                url: "http://localhost:9000/getdata/getbookinfo",
                type: "post",
                data: {
                    actionid: str
                },
                dataType: "JSON"
            }).then((res) => {
                console.log(res);
            })
        }
    }
    render() {
        return (
            <div className="panel">
                <div className="main clearfix">
                    <Classfiy />
                    <div className="panel_main" style={{"marginTop":"30px"}}>
                        <div className="clearfix">
                        <Author />
                        <Bookinfo />
                        </div>
                        <List />
                    </div>
                    
                    <div className="panel_aside" style={{"marginTop":"30px"}}>
                        <Aside />
                        <Mainaside />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default connect((state) => {
    console.log(state)
	return {
		state
	}
}, (dispatch) => {
	return {
		changeBookStatus(){
			dispatch({
				type:"noce",
				bookstatus:true
			})
		}
	}
})(Book);