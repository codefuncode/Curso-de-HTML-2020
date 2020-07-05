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
    // Seleccionamos la sección donde escribiremos el titulo 
    var titulo = document.getElementById('titulo');
    // Iniciamos la cantidad de elementos cero 
    var elementos = 0;

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
    // Recorremos  todos los elementos e incrementamos elementos cada 
    // vez que un elemento no este en display
    for (var i = 0; i < li.length; i++) {

        if (li[i].style.display) {

        } else {

            elementos++;
        }

    }
    //  Si elementos es igual a uno es que solo hay un elemento 
    if (elementos == 1) {

        //  recorremos los elementos  y que que no este en display  ya que 
        // sabemos que es uno  Mostramos el valor del que no esta en display
        for (var i = 0; i < li.length; i++) {

            if (li[i].style.display) {

            } else {
                //  seleccionamos el valor de indice correspondiente y lo 
                // mostramos en el elemento destinado a mostrar el resultado 
                a = li[i].getElementsByTagName("a")[0];
                document.getElementById('display').innerHTML = a.innerHTML;
            }
        }

    }

}