/**
 * author:SunShinewyf
 * date:2017-04-28
 * desc:define some initial data for pp android
 */
(function () {
    'use strict';

    var app = {
        isloading:true,
        ppData:[],
        appUl:document.querySelector('.ads-app-ul'),
        appUls:document.querySelector('.ads-app-uls')

    }
    var initialData = [{
        image:'16.png',
        name:'天猫',
        size:'36.01MB'
    },{
        image:'15.png',
        name:'千炮捕鱼',
        size:'30.73MB',
    },{
        image:'17.png',
        name:'飞猪',
        size:'392.99MB'
    },{
        image:'12.png',
        name:'映客直播',
        size:'188MB'
    },{
        image:'14.png',
        name:'菜鸟裹裹',
        size:'15.4MB'
    },{
        image:'11.png',
        name:'3D坦克',
        size:'543.5MB'
    },{
        image:'10.png',
        name:'九阳神功',
        size:'133.2MB'
    },{
        image:'13.png',
        name:'热血江湖',
        size:'43MB'
    }];
    //update the data
    app.updateDate = function(data){
        for(var i = 0,len = data.length; i<len;i++){
            //获取数据
            var img = data[i].image;
            var name = data[i].name;
            var size = data[i].size;

            //create the element
            var appContainer = app.appUl.querySelector('.ul-container');
            var appLi = document.createElement('li');
            var appA = document.createElement('a');
            var appImg = document.createElement('img');
            var appInfo = document.createElement('div')
            var appName = document.createElement('b');
            var appSize = document.createElement('span');

            if(i % 4 == 0){
                appLi.className = "ads-app-li first";
            }else{
                appLi.className = 'ads-app-li';
            }

            appImg.className = 'ads-app-img';
            appInfo.className = 'ads-app-info';
            appName.className = 'ads-app-name';
            appSize.className = 'ads-app-size';

            appName.textContent = name;
            appSize.textContent = size;
            appImg.src = 'images/'+img;

            appInfo.appendChild(appName);
            appInfo.appendChild(appSize);
            appA.appendChild(appImg);
            appA.appendChild(appInfo);
            appLi.appendChild(appA);
            appContainer.appendChild(appLi);
        }

    }
    //load initial data
    app.getInitialData = localStorage.ppData;
    if(app.ppData && app.ppData.length){
        app.ppData = JSON.parse(app.ppData);
    }else{
        app.updateDate(initialData);
    }

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('../../worker.js').then(function(registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }).catch(function(err) {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
})();
