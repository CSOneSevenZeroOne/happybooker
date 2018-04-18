import React, { Component } from 'react';
import './panel_aside.css';
import Zbqt from '../aside_top/toplist_zbqt.jsx';
import Zwqt from '../aside_top/toplist_zwqt.jsx';
import Trqt from '../aside_top/toplist_trqt.jsx';
import Nsqt from '../aside_top/toplist_nsqt.jsx';
import Nvsqt from '../aside_top/toplist_nvsqt.jsx';
import Boss from '../aside_top/toplist_boss.jsx';
class Aside extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="panel_aside">
                <div className="big-event">
                    <div><a href="https://www.hbooker.com/activity/zhengwen_forth" target="_blank"><img src="http://www.hbooker.com/resources/imagesactivity/zhengwen_forth.jpg" /></a></div>
                    <div><a href="http://www.hbooker.com/index/fuli" target="_blank"><img src="https://avatar.kuangxiangit.com/novel/img_notice/20180109032303547.jpg" /></a></div>
                </div>
                <div className="recomm-tit">
                    <h4>精选荣誉榜单</h4>
                </div>
                <Zbqt />
                <Zwqt />
                <Trqt />
                <Nsqt />
                <Nvsqt />
                <Boss />
            </div>

        );
    }
}
export default Aside;