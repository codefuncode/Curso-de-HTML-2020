function ini() {
    document.createElement('corazon'); //creamos el elemento corazon
    var corazon = document.getElementsByTagName('corazon'); //llamamos todos los elemento corazon del documento
    var i;
    for (i = 0; i < corazon.length; i++) { //ejecuta acciones para esos elementos
        //creamos estilos para nuetras etiquetas
        corazon[i].style.backgroundImage = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACaElEQVR4nO2by7WCMBCGKYECyJgSLIESLCEnwT0l0IElWIIlWIIlsAxhkxLuXZh45YrKI+QF/zmznvn+TAYYj0myadOmTSMkMUl5VuQN0JIDrVooTmLHLhxoxRElPCtyjgk2nZdjgnlW5BxRcs/Lzi2wMwdaNUBLnhW56ZzdArIib4GdBTApgP0MiBtHlMzJKTFJBWIHAew2MOdPC+wsEDsYwlbgiF2HFtBfVHEaC95CcRphdu8BtPi4nwz+VMRk8H9RDymoxcf9mBMf0hGT4MWOXQzCP6IBWr7L2wAtZ576226QmKSD4DkmWACrl4D/dCocaLVkTgFMfh3OEpN07n0fHE+DiiNKrOQEVn80QE15G4XcOwEf9+rOL9H2/TkRu/bCq8eNNXgVUhgceEPj5fEsMUldFOIwZMcANX1dF2W3C4BWf3ff1uDzK+5doIaQ62LcdAEmeJXtr6MBWiZLvfEFETt2Wev911EnYuHXXs9DJsLiW5iPsfYOqNc+A27WP4B8ihaxa2J46xNUtFCc9IeQ82JcxGOTLNY5CG9Pi5D1XYPO16C6BmvqAvmyJLW4l3MendPvrMXWsRV6vyJXVyHmV2P59ccZ9btAjCZ8h388FeLbEsnRP5hGZMJ4+IhMmA4fgQnz4QM2wRx8gCaYhw/IhOXgAzBheXiPTbAH76EJ9uE9MsEdvAcmuIfXcmCCP/BaFk3wD17Lggn+wmstaIL/8FoLmBAOvJZBE8KD1zJgQrjwWjNMCB9ea4IJ8cBrjTAhPnitASbEC6/1wYT44bV6TFgPvBbHBHOgFQdazfpz06ZNmzbN0C97EM/d8hW+4gAAAABJRU5ErkJggg==')";
        corazon[i].style.position = "relative";
        corazon[i].style.display = "block";
        corazon[i].style.width = "64px";
        corazon[i].style.height = "64px";
    }
}
window.addEventListener('load', ini, false);
//ejecuta la funcion ini al cargar el documento

function CreaElemento() {
    document.createElement('mielemento');
    //creamos el elemento corazon
    var elementonuevo = document.getElementsByTagName('mielemento');
    //llamamos todos los elemento corazon del documento
    var i;
    for (i = 0; i < elementonuevo.length; i++) {
        //ejecuta acciones para esos elementos
        //creamos estilos para nuetras etiquetas
        elementonuevo[i].style.backgroundColor = 'blue';
        elementonuevo[i].style.position = "relative";
        elementonuevo[i].style.display = "block";
        elementonuevo[i].style.width = "64px";
        elementonuevo[i].style.height = "64px";
    }
}
window.addEventListener('load', CreaElemento, false);
//ejecuta la funcion ini al cargar el documento