﻿// 在此放置代码!
$(function () {
    if (!window.localStorage && !Windows.Storage) {
        alert("你的浏览器不支持本地存储，这意味着你做出的所有选择和游戏进度都不会被保存");
    }
    var buttons = $(".button");
    buttons.click(function () {
        switch (buttons.index(this)) {
            case 0:
                window.location.href = "ep1/qchat.html";
                break;
            case 1:
                window.localStorage.clear();
                Windows.Storage.ApplicationData.current.localSettings.values.clear();
                break;
            default:
                throw RangeError("Unbind button clicked");
                break;
        }
    });
});