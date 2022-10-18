window.onload = function () {
    var box=document.getElementsByClassName('row');
    var btn=document.getElementById('button');
    for (let i=4;i<box.length;i++) {
        box[i].style.display = "none";
    }

    var countD = 4;
    btn.addEventListener("click", function() {
        var box=document.getElementsByClassName('row');
        countD += 2;
        if (countD <= box.length){
            for(let i=0;i<countD;i++){
                box[i].style.display = "flex";
            }
        }

    })
}