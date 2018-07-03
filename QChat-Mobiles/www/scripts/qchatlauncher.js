﻿(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // 处理 Cordova 暂停并恢复事件
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova 已加载。在此处执行任何需要 Cordova 的初始化。
        init();

        setInterval(fit);
    };

    function onPause() {
        // TODO: 此应用程序已挂起。在此处保存应用程序状态。
        dtor();
    };

    function onResume() {
        // TODO: 此应用程序已重新激活。在此处还原应用程序状态。
    };
})();

function fit() {
    $("table").height(window.innerHeight * 0.85);
    $(".chatlist").height(window.innerHeight * 0.8);
}