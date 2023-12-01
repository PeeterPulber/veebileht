const pildielement = document.getElementById("muutuv");
        
function muuda_pilti() {
    const suvanumber = Math.floor(Math.random() * 31) + 1
    const pilt = "pildid/grupipilt/" + suvanumber + ".JPG";
    pildielement.src = pilt;
};

window.onload = function() {
    setInterval(muuda_pilti, 50);
};