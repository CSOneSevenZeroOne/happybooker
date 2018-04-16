var fs = require("fs");
var data = '';
var readerStream = fs.createReadStream('./html/index.html');
var cheerio = require('cheerio');
var createConnection = require("../createConnection.js")
readerStream.on('data', function(chunk) {
	data += chunk;
});
readerStream.on('end', function() {
    //console.log(data)
    var $=cheerio.load(data)
    // var li=$(".first-col").find("ul").eq(1).children("li");
    // for(var i=0; i<li.length;i++){
    //     var img=$(li[i]).children("a").children('img').attr("data-original");
    //     var str=$(li[i]).children("a").children('.info').html()
    //     var link=$(li[i]).children("a").attr("href");
    //     createConnection(`insert into index_banner set imgsrc='${img}',link='${link}',type='banner_right',html='${str}'`,function(res){
    //         console.log(res);
    //     })
    // }
    var li=$(".bossrx").find(".book-list").eq(0).children("li");
    for(var i=0; i<li.length;i++){
        var imgsrc=$(li[i]).children("a").children('img').attr("data-original");
        var headpic=$(li[i]).children("a").children('.info').find("img").attr("data-original");
        var title=$(li[i]).children("a").children('.info').children(".t").text();
        var link=$(li[i]).children("a").attr("href");
        var info=$(li[i]).children("a").children('.info').children(".n").text();
        var html=$(li[i]).children(".info").html();
        var bookname=$(li[i]).children(".title").children("a").html();
        var starnum=$(li[i]).children("a").children('.info').children(".num").text();
        console.log(starnum)
        //console.log(imgsrc)
        //console.log(headpic)
        //console.log(title)
        //console.log(link)
        //console.log(info)
        //console.log(html)
        // console.log(starnum)

        createConnection(`insert into index_booklist set imgsrc='${imgsrc}',bookname='${bookname}',type='BOSS任性推荐',html='${html}',info="${info}",link='${link}',headpic='${headpic}',title='${title}',starnum='${starnum}'`,function(res){
            console.log(res);
        })
    }

});