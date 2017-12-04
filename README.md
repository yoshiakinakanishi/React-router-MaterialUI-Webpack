# [WIP] Segment-Front-App-v2


## # 使用技術

| カテゴリ 　 |使用技術　　　　|      
|:----------|:----------|
| 言語       |ES2015/JSX/Babel   |     
| Viewライブラリ |React |             
| UIライブラリ |Material-UI |          
| バンドルツール |Webpack    
| ルーティング    |react-router     |
| アーキテクチャ | --- |  
| API通信 | --- |  

## # スクリーンショット
左ナビメニューをクリックすると画面遷移、それぞれの描画を切替わり
<img width="1000" src="https://user-images.githubusercontent.com/28942665/33542382-3042fca8-d916-11e7-88d7-6b2f2dbc6d72.png">

## # ファイル構成

```
top
│  .babelrc
│  .eslintrc.js
│  .gitignore
│  package-lock.json
│  package.json
│  webpack.config.js
│  
├─dist
│      bundle.js
│              
├─public
│      index.html
│      
└─src
    │  App.js
    │  index.js
    │  
    ├─component
    │      main1.js
    │      main2.js
    │      main3.js
    │      main4.js
    │      
    └─style
            App.css
            index.css
```

## # ローカルサーバー
下記のコマンドでlocalhost:3000が起動　＊オートリロード設定済み

```
yarn start
```


