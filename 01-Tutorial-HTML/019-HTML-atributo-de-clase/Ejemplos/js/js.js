var city = document.getElementsByClassName('city');

for (var i = 0; i < city.length; i++) {

    city[i].onclick = function() {

        this.hidden = true;
    };

}

// for (var i = 0; i < city.length; i++) {

//     city[i].addEventListener("click", function() {

//         this.hidden = true;

//     }, true);

// }

console.log(city.length);