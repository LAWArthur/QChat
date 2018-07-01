function msg(ref, ms) {
    return function () {
        t = setInterval(function () {
            $("#" + ref).append($("<li></li>").append($("<img/>").attr("src", "../images/" + characters[ref].name + ".png")).append(ms));
            clearInterval(t);
            characters[ref].actions[++characters[ref].index]();
        }, 500 * ms.length);
    };
}

function mymsg(ref, ms) {
    return function () {
        repeats = 0;
        var t = setInterval(function () {
            if (repeats == ms.length) {
                $(".chatbox span").empty();
                $("#" + ref).append($("<li></li>").append($("<div/>").css({ "width": "100%", "text-align": "right" }).append(ms).append($("<img/>").attr("src", "../images/me.png"))));
                clearInterval(t);
                characters[ref].actions[++characters[ref].index]();
            } else {
                $(".chatbox span").append(ms[repeats]);
                repeats++;
            }
        }, 500);
    };
}

function choice(ref, a, b, c = null, d = null) {
    return function () {
        $(".chatbox div").append($("<button/>").text(a).width(100).height(25).click(function () { $(".chatbox div").empty(); choices.push(0); mymsg(ref, a)(); })).append($("<button/>").text(b).width(100).height(25).click(function () { $(".chatbox div").empty(); choices.push(1); mymsg(ref, b)(); }));
        if (c != null) {
            $(".chatbox div").append($("<button/>").text(c).width(100).height(25).click(function () { $(".chatbox div").empty(); choices.push(2); mymsg(ref, c)(); }))
        }
        if (d != null) {
            $(".chatbox div").append($("<button/>").text(d).width(100).height(25).click(function () { $(".chatbox div").empty(); choices.push(3); mymsg(ref, d)(); }))
        }
    }
}

function choice_based(index, a, b, c = null, d = null) {
    return function () {
        switch (choices[index]) {
            case 0:
                a();
                break;
            case 1:
                b();
                break;
            case 2:
                c();
                break;
            case 3:
                d();
                break;
        }
    }
}

function opn(ref) {
    return function () { characters[ref].index++ };
}

function end(ref) {
    return function () {
        return;
    }
}

function clear(ref) {
    return function () {
        var table = $("table");
        table.hide();
        setTimeout(function () {
            characters[ref].index++;
            table.show();
            init();
        }, 1000)
    }
}

function init() {
    $("#sidelist").empty();
    $(".chats").empty();
    for (var i = 0; i < characters.length; i++) {
        var item = $("<li></li>");
        item.html("<h5>" + characters[i].name + "</h5><h6>" + characters[i].latest + "</h6>").addClass("unselected");
        $("#sidelist").append(item)
        $(".chats").append($("<ul/>").attr("id", i.toString()).hide());
    }
    $("#sidelist li").click(function () {
        $("#sidelist li").removeClass("selected").addClass("unselected");
        $(this).removeClass("unselected").addClass("selected");
        $(".chats ul").hide();
        $("#" + $("#sidelist li").index(this)).show();
        clearInterval(t);
        $(".chatbox div").empty();
        characters[$("#sidelist li").index(this)].actions[characters[$("#sidelist li").index(this)].index]();
    })
}



var choices = [];

var repeats = 0;

var t;