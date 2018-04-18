import React, { Component } from 'react';
import $ from 'jquery';
import './toplist.css';
class Zbqt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    componentDidMount() {
        $.ajax({
            url: "http://localhost:9000/getdata/indextop",
            type: "post",
            data: {
                type: "女生强推"
            },
            dataType: "JSON"
        }).then((res) => {
            this.setState({
                list: res
            });
        })
    }
    render() {
        return (
            <div className="aside_top">
                <div className="recomm-list">
                    <div className="tit">女生强推</div>
                    <div className="sub-tit"><i>TOP 10</i> 当红小书</div>
                    <ul>
                        {(() => {
                            var htmlarr=this.state.list.map(function (ele, index) {
                                if (ele.top == 1) {
                                    return (
                                        <li className="top1" key={index}>
                                            <a href={ele.link} target="_blank">
                                                <img className="img" src={ele.imgsrc} />
                                                <span className="num" dangerouslySetInnerHTML={{ __html: ele.num }}></span>
                                                <i className="icon-top icon-top1">{ele.top}</i><br />
                                                <p>{ele.title}</p>
                                                <p className="author">{ele.anthor}</p>
                                            </a>
                                        </li>
                                    )
                                } else if (ele.top == 2) {
                                    return (
                                        <li className="top2" key={index}>
                                            <a href={ele.link}>
                                                <span className="num" dangerouslySetInnerHTML={{ __html: ele.num }}></span><i className="icon-top icon-top2">{ele.top}</i>{ele.title}</a>
                                        </li>
                                    )
                                } else if (ele.top == 3) {
                                    return (
                                        <li className="top3" key={index}>
                                            <a href={ele.link}>
                                                <span className="num" dangerouslySetInnerHTML={{ __html: ele.num }}></span><i className="icon-top icon-top3">{ele.top}</i>{ele.title}</a>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={index}>
                                            <a href={ele.link} target="_blank">
                                                <span className="num" dangerouslySetInnerHTML={{ __html: ele.num }}></span><i className="icon-top">{ele.top}</i>{ele.title}</a>
                                        </li>
                                    )
                                }
                            })
                            return htmlarr;
                        })()}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Zbqt;
