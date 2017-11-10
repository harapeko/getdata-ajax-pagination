var casper = require('casper').create();
var util = require('util');

var URL = 'https://datatables.net/examples/data_sources/server_side.html';
var MAX_PAGE = 6;

var page_count = 0;
var datas = [];


casper.start(URL, function() {
  // Ajax箇所にデータが追加されるまで待つ
  this.waitFor(function check() {
    return this.evaluate(function () {
      return document.querySelectorAll("#example_paginate .paginate_button").length > 0;
    })
  });

  // 開始
  this.echo('start');
});


while (page_count < MAX_PAGE) {
  page_count++;

  // 情報を取得する
  casper.then(function() {
    datas = datas.concat(
      this.evaluate(function() {
        var q = document.querySelectorAll('#example tbody tr');
        return Array.prototype.map.call(q, function(e){
          return {
            // 'td': e.innerHTML,
            'fullname': e.innerHTML.match(/<td class="sorting_1">(\S*?)<\/td><td>(\S*?)<\/td><td>/).splice(1, 2).join(" "),
          };
        });
      })
    );
  });

  // 最終ページに到達するまでクリックする
  if (page_count != MAX_PAGE) {
    casper.then(function() {
        this.click('.paginate_button.current+.paginate_button');
    }).wait(4000);
  }
}


casper.run(function () {
  this.echo( util.inspect(datas) );
  this.echo('end').exit();
});