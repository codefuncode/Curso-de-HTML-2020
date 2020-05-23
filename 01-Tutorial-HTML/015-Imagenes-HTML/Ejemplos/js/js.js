    var div = document.getElementById('cordenadas');
    div.onclick = function(argument) {
        showCoords(argument);
    }

    function showCoords(evt) {
        alert(
            "clientX value: " + evt.clientX + "\n" +
            "clientY value: " + evt.clientY + "\n"
        );
    }