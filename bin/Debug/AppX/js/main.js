// 在此放置代码!
$(function () {
    var buttons = $(".button");
    buttons.click(function () {
        switch (buttons.index(this)) {
            case 0:
                window.location.href = "ep1/qchat.html";
                break;
            default:
                throw RangeError("Unbind button clicked");
                break;
        }
    });
});