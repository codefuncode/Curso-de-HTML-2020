function busquedaInstantanea() {
    document.getElementById('display').innerHTML = "";
    //  Declaración  de variables 
    var input, filter, ul, li, a, i;
    //  Selección de la caja de texto de entrada  y 
    // este tiene el evento onkeyup definido en la etiqueta HTML
    input = document.getElementById("mySearch");
    // Pasamos a esta variable el valor del input a letras mayúsculas 
    filter = input.value.toUpperCase();
    // Seleccionamos la  etiqueta ul presente en el documento 
    ul = document.getElementById("myMenu");
    //  la variable li  tendrá el valor  de todos los li que están dentro de ul
    li = ul.getElementsByTagName("li");

    //  recorrer todos los elementos li
    for (i = 0; i < li.length; i++) {

        //  la variable a va ha ser igual a el; elemento a con indice
        a = li[i].getElementsByTagName("a")[0];

        // =========================================================
        // Si  lo que esta escrito dentro del elemento a pasado a mayúsculas  
        // contiene lo escrito en el input  y es mayor que  -1 entones se mostrara 
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {

            // SE mostrara el elemento  li con el indice correspondiente 
            li[i].style.display = "";

        } else {

            // no se mostrara  el elemento li con el indice correspondiente 
            li[i].style.display = "none";
        }

        // =========================================================
    }
    var titulo = document.getElementById('titulo');
    var elementos = 0;

    for (var i = 0; i < li.length; i++) {

        if (li[i].style.display) {

        } else {

            elementos++;
        }

        // if (elementos == 1) {
        //     alert("Un solo queda ");
        // }
        console.log(i);
        console.log(li[i].style.display);
    }

    if (elementos == 1) {

        for (var i = 0; i < li.length; i++) {

            if (li[i].style.display) {

            } else {
                a = li[i].getElementsByTagName("a")[0];
                document.getElementById('display').innerHTML = a.innerHTML;
            }
        }
        // alert("Un solo queda ");
    }
    console.log('====================');
    console.log(elementos);
    console.log('====================');
}

// var input, filter, ul, li, a, i;

// input = document.getElementById("mySearch");

// filter = input.value.toUpperCase();

// ul = document.getElementById("myMenu");

// li = ul.getElementsByTagName("li");

// console.log(input);
// console.log(ul);

// for (var i = 0; i < li.length; i++) {
//     console.log('Elemento numero ' + i);
//     console.log(li[i]);
//     console.log('=========');
// }

// var enlace = document.querySelectorAll("li a");
// var marco = document.getElementById('marco');

// for (var i = 0; i < enlace.length; i++) {
//     console.log(enlace[i]);
//     enlace[i].onmouseover = function(event) {

//         marco.setAttribute("src", "" + enlace[i].getAttribute("href") + "");
//     }

// }

// var array = [2, 9, 9];
// array.indexOf(2);     // 0
// array.indexOf(7);     // -1
// array.indexOf(9, 2);  // 2
// array.indexOf(2, -1); // -1
// array.indexOf(2, -3); // 0