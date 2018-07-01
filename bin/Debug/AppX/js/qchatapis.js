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

var choices = [];

var repeats = 0;

var t;