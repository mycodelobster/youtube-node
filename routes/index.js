/*
 * GET home page.
 */
var youtube = require('youtube-feeds');
youtube.httpProtocol = 'https';

exports.index = function (req, res) {

    var keywords = 'demo';
    youtube.feeds.videos({
        q: keywords,
        'max-results': 50,
        orderby: 'published'
    }, function (err, data) {
        res.send(data.items);
        //console.log(data);
    });
};



exports.formsearch = function (req, res) {
    var keywords = req.body.keyword;

    if (keywords) {
        youtube.feeds.videos({
            q: keywords,
            'max-results': 50,
            orderby: 'published'
        }, function (err, data) {

            res.render('index', {
                videos: data.items,
                keyword: keywords
            });


            //res.send(data.items);
            //console.log(data);
        });
    }else{
          res.render('index', {
                msg: 'Youtube Search Engine Powered by Node JS'
            });
    }
};