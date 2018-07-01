$(function () {
    for (var i = 0; i < characters.length; i++) {
        var item = $("<li></li>");
        item.html("<h5>" + characters[i].name + "</h5><h6>" + characters[i].latest + "</h6>").addClass("unselected");
        $("#sidelist").append(item)
        $(".chats").append($("<ul/>").attr("id", i.toString()).hide());
    }
    fit();
    $("#sidelist li").click(function () {
        $("#sidelist li").removeClass("selected").addClass("unselected");
        $(this).removeClass("unselected").addClass("selected");
        $(".chats ul").hide();
        $("#" + $("#sidelist li").index(this)).show();
        clearInterval(t);
        $(".chatbox div").empty();
        characters[$("#sidelist li").index(this)].actions[characters[$("#sidelist li").index(this)].index]();
    })
    $(window).resize(function () {
        fit();
    });
});

function fit() {
    $("table").height(window.innerHeight - 10);
}