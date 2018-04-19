import React, { Component } from 'react';
import $ from 'jquery';
import './bookinfo.css';
class Zbqt extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="book-detail">
                <div className="ly-fl book-info">
                    <div className="book-title">
                        <h1>我，临时工，不想成为英雄</h1>
                        <p><span>小说作者：</span><a href="http://www.hbooker.com/reader/468451" target="_blank" className="">西厢风月</a></p>
                    </div>
                    <div className="book-bd act-tab">
                        <div>
                            <span className="time-update ly-fr">更新时间：2018-04-19 03:19:35</span>
                            <ul className="act-tab-titles clearfix">
                                <li className="selected"><a href="javascript:">作品简介</a></li>
                                <li><a href="javascript:">作品信息</a></li>
                                <li><a href="javascript:">作者信息</a></li>
                            </ul>
                        </div>
                        <div className="book-cnt">
                            <div className="act-tab-content">
                                <div className="book-intro">
                                    <div className="book-intro-cnt">
                                        <div className="book-count clearfix">
                                            <ul className="ly-fl">
                                                <li>
                                                    <i className="icon-diamond">◆</i> 总点击：1.2万                                                    </li>
                                                <li>
                                                    <i className="icon-diamond">◆</i> 总收藏：<b className="J_Stock_Favor_total">57</b>
                                                </li>
                                                <li>
                                                    <i className="icon-diamond">◆</i> 总字数：98279                                                    </li>
                                            </ul>
                                            <span className="ly-fl book-hbooker"><i className="icon-diamond">◆</i> 本站首发</span>
                                        </div>
                                        <div className="book-desc J_mCustomScrollbar" style={{overflow: 'hidden',outline: 'none'}} >
                                            善与恶，罪与罚，正义与否，正确与否。在这冲突之下，周望是信念崩坏还是坚守本心，请看周望平常的世界里不平常的奇幻物语。                                            </div>
                                    </div>
                                    <div className="book-tip">
                                        （本站郑重提醒: 本故事纯属虚构，如有雷同，纯属巧合，切勿模仿。)
                                        </div>
                                    <div className="book-author-label">
                                        <i className="icon-diamond">◆</i> 作者自定义标签：
                                                                                                                                                <span className="book-label">慢热</span>
                                        <span className="book-label">技术流</span>
                                        <span className="book-label">推理</span>
                                        <span className="book-label">治愈</span>
                                        <span className="book-label">腹黑</span>
                                    </div>
                                </div>
                            </div>
                            <div className="act-tab-content" style={{display:"none"}}>
                                <div className="book-intro">
                                    <div className="book-intro-cnt">
                                        <div className="book-property clearfix">
                                            <span><i className="icon-diamond">◆</i> 小说性质：免费书籍</span>
                                            <span><i className="icon-diamond">◆</i> 总点击: 1.2万</span>
                                            <span><i className="icon-diamond">◆</i> 月点击：0.9万</span>
                                            <span><i className="icon-diamond">◆</i> 周点击：0.3万</span>
                                            <span><i className="icon-diamond">◆</i> 小说类别：推理灵异</span>
                                            <span><i className="icon-diamond">◆</i> 总推荐：<b className="J_Recommend_Rec_total">62</b></span>
                                            <span><i className="icon-diamond">◆</i> 月推荐：<b className="J_Recommend_Rec_month">24</b></span>
                                            <span><i className="icon-diamond">◆</i> 周推荐：<b className="J_Recommend_Rec_week">0</b></span>
                                            <span><i className="icon-diamond">◆</i> 总月票：3</span>
                                            <span><i className="icon-diamond">◆</i> 当月月票：2</span>
                                            <span><i className="icon-diamond">◆</i> 总刀片：0</span>
                                            <span><i className="icon-diamond">◆</i> 月刀片：0</span>
                                            <span><i className="icon-diamond">◆</i> 完成字数：98279</span>
                                            <span><i className="icon-diamond">◆</i> 写作状态：连载中</span>
                                            <span className="book-hbooker"><i className="icon-diamond">◆</i> 本站首发</span>
                                        </div>
                                    </div>
                                    <div className="book-tip">
                                        （本站郑重提醒: 本故事纯属虚构，如有雷同，纯属巧合，切勿模仿。)
                                        </div>
                                    <div className="book-author-label">
                                        <i className="icon-diamond">◆</i> 作者自定义标签：
                                                                                                                                                <span className="book-label">慢热</span>
                                        <span className="book-label">技术流</span>
                                        <span className="book-label">推理</span>
                                        <span className="book-label">治愈</span>
                                        <span className="book-label">腹黑</span>
                                    </div>
                                </div>
                            </div>
                            <div className="act-tab-content" style={{display:"none"}}>
                                <div className="book-intro">
                                    <div className="book-intro-cnt">
                                        <div className="book-author-info">
                                            <div><i className="icon-diamond">◆</i> 作者的其它作品：</div>
                                            <ul className="clearfix">
                                                暂无其他作品
                                                </ul>
                                        </div>
                                    </div>
                                    <div className="book-tip">
                                        （本站郑重提醒: 本故事纯属虚构，如有雷同，纯属巧合，切勿模仿。)
                                        </div>
                                    <div className="book-author-label">
                                        <i className="icon-diamond">◆</i> 作者自定义标签：
                                                                                                                                                <span className="book-label">慢热</span>
                                        <span className="book-label">技术流</span>
                                        <span className="book-label">推理</span>
                                        <span className="book-label">治愈</span>
                                        <span className="book-label">腹黑</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}
export default Zbqt;
