$(init);

setInterval(fit);

function fit() {
    $("table").height(window.innerHeight - 120);
    $(".chatlist").height(window.innerHeight * 0.8);
}