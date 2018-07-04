// 有关“空白”模板的简介，请参阅以下文档:
// http://go.microsoft.com/fwlink/?LinkID=397704
// 若要在 cordova-simulate 或 Android 设备/仿真器上在页面加载时调试代码: 启动应用，设置断点，
// 然后在 JavaScript 控制台中运行 "window.location.reload()"。
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // 处理 Cordova 暂停并恢复事件
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova 已加载。在此处执行任何需要 Cordova 的初始化。
        $("body").height(window.innerHeight * 0.95);
        $(window).resize(function () {
            $("body").height(window.innerHeight * 0.95);
        })
        if (!window.localStorage) {
            alert("你的浏览器不支持本地存储，这意味着你做出的所有选择和游戏进度都不会被保存");
        }
        var buttons = $(".button");
        buttons.click(function () {
            switch (buttons.index(this)) {
                case 0:
                    window.location.href = "ep1/qchat.html";
                    break;
                case 1:
                    if (window.confirm("你确定要清空本地存档吗")) {
                        window.localStorage.clear();
                    }
                    break;
                default:
                    throw RangeError("Unbind button clicked");
                    break;
            }
        });
    };

    function onPause() {
        // TODO: 此应用程序已挂起。在此处保存应用程序状态。
    };

    function onResume() {
        // TODO: 此应用程序已重新激活。在此处还原应用程序状态。
    };
} )();