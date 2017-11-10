# Ajax Pagination 表組スクレイピング

これはなに？

6ページのAjax更新される表組で、<br>
ファーストネームとラストネームを取得して<br>
フルネームとして結果を出力する。

対象URL：https://datatables.net/examples/data_sources/server_side.html

# SETUP
## Node.jsインストール
### バージョン管理するならNVMとか
https://github.com/creationix/nvm

### バージョン管理しないならこちらが楽
https://nodejs.org/ja/

### yarnインストール
https://yarnpkg.com/en/docs/install

## パッケージインストール
`yarn install`


# USAGE
`yarn run getdata`

## 出力結果
```
$ yarn run getdata
yarn run v0.27.5
$ casperjs index.js
start
[ { fullname: 'Airi Satou' },
  { fullname: 'Angelica Ramos' },
  { fullname: 'Ashton Cox' },
  { fullname: 'Bradley Greer' },
  { fullname: 'Brenden Wagner' },
  { fullname: 'Brielle Williamson' },
  { fullname: 'Bruno Nash' },
  { fullname: 'Caesar Vance' },
  { fullname: 'Cara Stevens' },
  { fullname: 'Cedric Kelly' },
  { fullname: 'Charde Marshall' },
  { fullname: 'Colleen Hurst' },
  { fullname: 'Dai Rios' },
  { fullname: 'Donna Snider' },
  { fullname: 'Doris Wilder' },
  { fullname: 'Finn Camacho' },
  { fullname: 'Fiona Green' },
  { fullname: 'Garrett Winters' },
  { fullname: 'Gavin Joyce' },
  { fullname: 'Gavin Cortez' },
  { fullname: 'Gloria Little' },
  { fullname: 'Haley Kennedy' },
  { fullname: 'Hermione Butler' },
  { fullname: 'Herrod Chandler' },
  { fullname: 'Hope Fuentes' },
  { fullname: 'Howard Hatfield' },
  { fullname: 'Jackson Bradshaw' },
  { fullname: 'Jena Gaines' },
  { fullname: 'Jenette Caldwell' },
  { fullname: 'Jennifer Chang' },
  { fullname: 'Jennifer Acosta' },
  { fullname: 'Jonas Alexander' },
  { fullname: 'Lael Greer' },
  { fullname: 'Martena Mccray' },
  { fullname: 'Michael Silva' },
  { fullname: 'Michael Bruce' },
  { fullname: 'Michelle House' },
  { fullname: 'Olivia Liang' },
  { fullname: 'Paul Byrd' },
  { fullname: 'Prescott Bartlett' },
  { fullname: 'Quinn Flynn' },
  { fullname: 'Rhona Davidson' },
  { fullname: 'Sakura Yamamoto' },
  { fullname: 'Serge Baldwin' },
  { fullname: 'Shad Decker' },
  { fullname: 'Shou Itou' },
  { fullname: 'Sonya Frost' },
  { fullname: 'Suki Burks' },
  { fullname: 'Tatyana Fitzpatrick' },
  { fullname: 'Thor Walton' },
  { fullname: 'Tiger Nixon' },
  { fullname: 'Timothy Mooney' },
  { fullname: 'Unity Butler' },
  { fullname: 'Vivian Harrell' },
  { fullname: 'Yuri Berry' },
  { fullname: 'Zenaida Frank' },
  { fullname: 'Zorita Serrano' } ]
end
Done in 28.50s.
```