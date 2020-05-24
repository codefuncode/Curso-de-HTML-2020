    var div = document.getElementById('cordenadas');
    var display = document.getElementById('display');
    div.onclick = function(argument) {
        showCoords(argument);
    }

    function showCoords(evt) {
        display.innerHTML = "Eje Y value: " + evt.clientY + "<br/>" + "Eje X value: " + evt.clientX;

    }