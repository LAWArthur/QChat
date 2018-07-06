function msg(ref, ms) {
    return function () {
        t = setInterval(function () {
            $("#" + ref).append($("<li></li>").append($("<img/>").attr({ "src": "../images/" + ref + ".png", "height": "16", "width": "16" })).append(ms));
            clearInterval(t);
            $("#sidelist").children().eq(ref).children().eq(1).text(ms);
            characters[ref].actions[++characters[ref].index]();
        }, 250 * ms.length);
    };
}

function mymsg(ref, ms) {
    return function () {
        repeats = 0;
        var t = setInterval(function () {
            if (repeats == ms.length) {
                $(".chatbox span").empty();
                $("#" + ref).append($("<li></li>").append($("<div/>").css({ "width": "100%", "text-align": "right" }).append(ms).append($("<img/>").attr({ "src": "../images/me.png", "height": "16", "width": "16" }))));
                clearInterval(t);
                $("#sidelist").children().eq(ref).children().eq(1).text(ms);
                characters[ref].actions[++characters[ref].index]();
            } else {
                $(".chatbox span").append(ms[repeats]);
                repeats++;
            }
        }, 250);
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

function system(ref, txt) {
    return function () { $("#" + ref).append($("<li></li>").append($("<div/>").addClass("system").append(txt))); characters[ref].actions[++characters[ref].index](); }
}

function wait(ref, ms) {
    return function () { t = setInterval(function () { clearInterval(t); characters[ref].actions[++characters[ref].index]();},ms) }
}

function blank(ref) {
    return function () { characters[ref].actions[++characters[ref].index](); }
}

function opn(ref, tar) {
    return function () { characters[tar].index++; characters[ref].actions[++characters[ref].index](); };
}

function end(ref) {
    return function () {
        return;
    }
}

function clear(ref) {
    return function () { $("#" + ref).empty(); characters[ref].actions[++characters[ref].index](); }
}

function init() {
    $("#sidelist").empty();
    $(".chatlist").empty();
    for (var i = 0; i < characters.length; i++) {
        if (window.localStorage.getItem(characters[i].name) != null && !launched) {
            characters[i].index = parseInt(window.localStorage.getItem(characters[i].name));
        }

        if (!launched) {
            for (var index = 0; index < characters[i].actions.length;index++) {
                var str = characters[i].actions[index];
                characters[i].actions[index] = analyze(str, i);
            }
        }

        var item = $("<li></li>");
        item.html("<h5>" + characters[i].name + "</h5><h6></h6>").addClass("unselected");
        $("#sidelist").append(item)
        $(".chatlist").append($("<ul></ul>").attr("id", i.toString()).hide());
    }
    if (window.localStorage.getItem("choices") != null && !launched) {
        $.each(window.localStorage.getItem("choices").split(""), function (i, item) {
            choices.push(parseInt(item));
        });
    }
    $("#sidelist li").unbind("click");
    $("#sidelist li").click(function () {
        $("#sidelist li").removeClass("selected").addClass("unselected");
        $(this).removeClass("unselected").addClass("selected");
        $(".chats ul").hide();
        $("#" + $("#sidelist li").index(this)).show();
        clearInterval(t);
        $(".chatbox div").empty();
        characters[$("#sidelist li").index(this)].actions[characters[$("#sidelist li").index(this)].index]();
    })
    launched = true;
}

function dtor() {
    if (!window.localStorage) return;
    $.each(characters, function (i, item) {
        window.localStorage.setItem(item.name, item.index)
    });
    window.localStorage.setItem("choices", choices.join(""));
}

function analyze(str, i) {
    if (typeof (str) == "string") {
        switch (str[0]) {
            case ".":
                return msg(i, str.substring(1));
                break;
            case ":":
                return mymsg(i, str.substring(1));
                break;
            case "$":
                var list = str.substring(1).split("^");
                return choice(i, list[0], list[1], list[2] ? list[2] : null, list[3] ? list[3] : null);
                break;
            case "^":
                var list = str.substring(str.search(/[0-9]+/) + str.match(/[0-9]+/)[0].length).split("^");
                return choice_based(parseInt(str.substring(1), 10), analyze(list[0], i), analyze(list[1], i), list[2] ? analyze(list[2], i) : null, list[3] ? analyze(list[3], i) : null);
                break;
            case "@":
                return system(i, str.substring(1));
                break;
            case "/":
                return wait(i, parseInt(str.substring(1)));
                break;
            case "-":
                return blank(i);
                break;
            case "#":
                return opn(i, parseInt(str.substring(1)));
                break;
            case "!":
                return end(i);
                break;
            default:
                throw new SyntaxError("Invalid QuickMark syntax");
        }
    }
    return str;
}

var choices = [];

var repeats = 0;

var t;

var launched = false;