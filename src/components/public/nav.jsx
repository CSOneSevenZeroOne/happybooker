
import React, { Component } from 'react';
class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="nav">
                <div className="main menu-inner">
                    <ul className="menu ly-fl clearfix">
                        <li><a href="https://www.hbooker.com/" className="selected">首页</a></li>
                        <li><a href="https://www.hbooker.com/rank-index">排行</a></li>
                        <li><a href="https://www.hbooker.com/index-zhaiwen">宅文</a></li>
                        <li><a href="https://www.hbooker.com/index-tongren">同人</a></li>
                        <li><a href="https://www.hbooker.com/index-female">女生</a></li>
                        <li><a href="https://www.hbooker.com/index-comic">漫画</a></li>
                        <li><a href="https://www.hbooker.com/index-game">游戏</a></li>
                        <li><a href="https://www.hbooker.com/book_list">书库</a></li>
                        <li><a href="https://www.hbooker.com/bbs">社区</a></li>
                    </ul>
                    <div className="ly-fr">
                        <form action="" name="myform" id="" target="_blank" className="search-form">
                            <input name="keyword"  type="text"  data-type="1" placeholder="搜索更多作品或作者" />
                            <button type="submit"></button>
                        </form>
                    </div>
                </div>
                <b></b>
            </div>
        );
    }
}
export default Nav;


