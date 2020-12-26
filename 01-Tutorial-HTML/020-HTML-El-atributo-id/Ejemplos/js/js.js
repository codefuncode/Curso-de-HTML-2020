// 
// =================================================
var myHeader = document.getElementById('myHeader');
var myHeader1 = document.getElementById('myHeader1');
var city = document.getElementsByClassName('city');
// =================================================

// =========================================
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
// =========================================

btn1.onclick = function(event) {

    myHeader.setAttribute(
        "style",
        "background-color:red;" +
        "border: 1px solid blue;" +
        "padding:20px;"

    );

    myHeader1.setAttribute(
        "style",
        "background-color:red;" +
        "border: 1px solid blue;" +
        "padding:20px;" +
        "text-align: center;"

    );
};

btn2.onclick = function(event) {

    for (var i = 0; i < city.length; i++) {

        city[i].setAttribute(
            "style",
            "background-color:red;" +
            "border: 1px solid blue;" +
            "padding:20px;"

        );
    }

};