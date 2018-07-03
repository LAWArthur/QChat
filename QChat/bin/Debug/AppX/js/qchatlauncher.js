$(init);

setInterval(fit);

function fit() {
    $("table").height(window.innerHeight - 100);
    $(".chatlist").height(window.innerHeight * 0.8);
}