let async = require('async');
let request = require('request');
let cheerio = require('cheerio');
let charset = require('superagent-charset'); //解决乱码问题:
let superagent = require('superagent'); //发起请求
var createConnection = require("../createConnection.js");
charset(superagent);

request.post({
    url: 'http://localhost:9000/getdata/booklist',
}, function optionalCallback(err, httpResponse, body) {
    var arr = JSON.parse(body);
    //console.log(body);
    for (var i = 0; i < arr.length; i++) {
        try {
            var section = JSON.parse(arr[i].section_list)
            for (var j = 0; j < section.length; j++) {

                try {
                    var html = section[j].chapter_link.split("chapter/")[1];
                    //console.log(section[j].chapter_link)
                    request.get({
                        url: section[j].chapter_link
                    }, function optionalCallback(err, httpResponse, body) {
                        //console.log(body)
                        try {
                            if (httpResponse) {
                                if (body) {
                                    let $ = cheerio.load(body);
                                    if ($("#J_BookCnt").html()) {
                                         var chapter_id = httpResponse.request.uri.path.split("chapter/")[1];
                                        var book_id_curr = $(".breakcrumb").find("a").eq(3).attr("href").split("book/")[1];
                                        var html = new String($("#J_BookCnt").html());
                                        // res.send(httpResponse.request.uri)
                                        //console.log(html)
                                        if(html){
                                            createConnection(`insert into chapter set chapter_id='${chapter_id}',book_id_curr='${book_id_curr}',chapter_content='${html}'`,function(results){
                                                console.log(111)
                                            })
                                        }
                                    }

                                }
                            }
                        } catch (error) {
                            //console.log(error)
                        }
                    })
                } catch (error) {
                    //console.log(error)
                }
                // superagent
                //     .get(section[i].chapter_link)
                //     .charset('utf-8') //取决于网页的编码方式
                //     .end(function (err, res) {
                //         console.log(res);
                //         //chapter_id: 101643744,
                //     });
            }
        } catch (error) {
            //console.log(error)
        }
        //console.log(section);


    }
})