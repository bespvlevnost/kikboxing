window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("hidingHeader").style.display = "none";
    } else {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById("hidingHeader").style.display = "flex";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}