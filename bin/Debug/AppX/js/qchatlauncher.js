$(init);

setInterval(fit);

function fit() {
    $("table").height(window.innerHeight - 10);
}