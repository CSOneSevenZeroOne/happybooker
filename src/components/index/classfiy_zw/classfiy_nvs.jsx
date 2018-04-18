import React, { Component } from 'react';
import './classfiy_zw.css';
import $ from 'jquery';
import '../../../css/swiper.min.css';
import Swiper from 'swiper';
class Trtj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            trtj:[]
        }
    }
    componentDidMount() {
        $.ajax({
            url: "http://localhost:9000/getdata/indexblist",
            type: "post",
            data: {
                type: "女生推荐"
            },
            dataType: "JSON"
        }).then((res) => {
            this.setState({
                list: res
            });
        })
        $.ajax({
            url: "http://localhost:9000/getdata/getbanner",
            type: "post",
            data: {
                type: "同人推荐"
            },
            dataType: "JSON"
        }).then((res) => {
            this.setState({
                trtj: res
            });
        })
        setTimeout(() => {
           var swiper3= new Swiper('.nvsheng', {
                spaceBetween: 30,
                centeredSlides: true,
                direction:"vertical",
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination3',
                    clickable: true,
                },
            });
        }, 500);
    }
    render() {
        return (
            <div className='classfiy'>
                <div className="mod-tit">
                    <h3>女生推荐</h3>
                    <i className="line"></i>
                    <span>万人在线抢先看</span>
                    <a href="https://www.hbooker.com/index/header_cate_list/tongren">查看全部 &gt;</a>
                </div>
                <div className="mod-body clearfix">
                    <ul>
                        {(()=>{
                           var htmlarr= this.state.list.map(function(ele,index){
                                return (<li key={index}>
                                    <a className="img" href={ele.link} target="_blank">
                                        <img className="lazyload" src={ele.imgsrc}  />
                                        <div className="mask"></div>
                                        <div className="info">
                                            <div className="t"><img src={(()=>{
                                                if(ele.headpic){
                                                    return ele.headpic;
                                                }else{
                                                    return 'https://www.hbooker.com/resources/images/avatar-default-m.png'
                                                }
                                            })()} />{ele.title}</div>
                                            <div className="n">{ele.info}</div>
                                            <div className="num">{ele.starnum}<i></i></div>
                                        </div>
                                    </a>
                                    <div className="title"><a href={ele.link} target="_blank" dangerouslySetInnerHTML={{__html: ele.bookname}}></a></div>
                                    <div className="info" target="_blank" dangerouslySetInnerHTML={{__html: ele.html}}></div>
                                </li>)
                            })
                            return htmlarr;
                        })()}
                    </ul>
                </div>
                <div className="autobanner">
                <div className="nvsheng leftauto">
                        <div className="swiper-wrapper item">
                            {(() => {
                               var htmlarr= this.state.trtj.map(function(ele,index){
                                    return (<div className="swiper-slide items" style={{
                                        backgroundImage: 'url(' + ele.link + ')'
                                    }} key={index}>
                                    <a href={ele.imgsrc} style={{width:'100%',height:'100%'}}></a>
                                    </div>)
                                })
                                return htmlarr
                            })()}
                        </div>
                        <div className="swiper-pagination3 dot"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Trtj;
