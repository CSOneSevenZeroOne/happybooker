import React, { Component } from 'react';
import $ from 'jquery';
import './author.css';
class Zbqt extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ly-fl book-img">
                <div className="book-cover">
                    <img src="https://novel-cdn.kuangxiangit.com/uploads/allimg/c180318/18-03-18103810-11140-100062649.jpg" alt="我，临时工，不想成为英雄" />
                </div>
                <ul className="book-operating">
                    <li><a className="read" href="http://www.hbooker.com/chapter-list/100062649/book_detail">点击阅读</a></li>
                    <li> <a className="J_ShouCang" href="javascript:">收藏</a> </li>
                    <li><a href="javascript:" className="J_TuiJian">投推荐票</a></li>
                    <li><a href="javascript:" id="J_YuePiao">投月票</a></li>
                    <li><a href="javascript:">免费书籍</a></li>
                </ul>
            </div>
        );
    }
}
export default Zbqt;
