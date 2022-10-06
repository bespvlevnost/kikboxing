window.addEventListener('scroll', function() {
    var headerUp = document.getElementsByClassName("headerUp")
    console.log(this.scrollY)
    if (this.scrollY >= 10)
        headerUp.style.display = "none";

});