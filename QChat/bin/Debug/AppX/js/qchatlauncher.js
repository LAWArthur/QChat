$(init);

setInterval(fit);

function fit() {
    $("table").height(window.innerHeight * 0.85);
    $(".chatlist").height(window.innerHeight * 0.8);
}

window.onunload = dtor;