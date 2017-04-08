/*global document, window*/
document.getElementById("toggle").addEventListener("click", function (event) {
    "use strict";
    event.preventDefault();
    document.getElementById("nav-header").classList.toggle("open");
    document.getElementById('body').classList.toggle("overflow-hidden");
});

var lastScrollTop = 0;

window.addEventListener("scroll", function () {
    "use strict";
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        document.getElementById('nav-background').style.display = "none";
        document.getElementById("nav-header").classList.remove("header-in");
        document.getElementById("nav-header").style.opacity = 0;
    } else {
        document.getElementById('nav-background').style.display = "table";
        document.getElementById("nav-background").classList.add("header-in");
        document.getElementById("nav-header").classList.add("solid");
        document.getElementById("nav-header").style.opacity = 1;
        if (currentScroll <= 3) {
            document.getElementById("nav-header").classList.remove("header-in");
        }
    }
    lastScrollTop = currentScroll;
}, false);

var students = [{
    name: "Fiorella Quispe",
    path: "assets/images/students/1.png"
}, {
    name: "María Lourdes Vilchez",
    path: "assets/images/students/2.png"
}, {
    name: "Rosmery Maldonado",
    path: "assets/images/students/3.png"
}, {
    name: "Yesenia Huamán",
    path: "assets/images/students/4.png"
}, {
    name: "Miriam Hernández",
    path: "assets/images/students/5.png"
}, {
    name: "Elizabeth Condori",
    prom: "6° Promoción | Lima - Perú",
    path: "assets/images/students/6.png"
}, {
    name: "Arantza Burga",
    path: "assets/images/students/7.png"
}, {
    name: "Grecia Rayme",
    path: "assets/images/students/8.png"
}, {
    name: "Janine Vega",
    path: "assets/images/students/9.png"
}, {
    name: "Rosario Félix",
    path: "assets/images/students/10.png"
}, {
    name: "Dagiana Revoredo",
    path: "assets/images/students/11.png"
}, {
    name: "Mishel Velásquez",
    path: "assets/images/students/12.png"
}, {
    name: "Nadia Cuadros",
    path: "assets/images/students/13.png"
}, {
    name: "Michelle More",
    path: "assets/images/students/14.png"
}, {
    name: "Marilú Llamocca",
    path: "assets/images/students/15.png"
}, {
    name: "Mariel",
    path: "assets/images/students/16.png"
}, {
    name: "Fiorella Cisneros",
    path: "assets/images/students/17.png"
}, {
    name: "Geraldine",
    path: "assets/images/students/18.png"
}, {
    name: "Yelitza Choque",
    path: "assets/images/students/19.png"
}, {
    name: "Stephanie Hiyagon",
    path: "assets/images/students/20.png"
}, {
    name: "Emma Tapia",
    path: "assets/images/students/21.png"
}, {
    name: "Dana Franco",
    path: "assets/images/students/22.png"
}, {
    name: "Flor Retamozo",
    path: "assets/images/students/23.png"
}, {
    name: "Nathaly Pacheco",
    path: "assets/images/students/24.png"
}, {
    name: "Erika Vidal",
    path: "assets/images/students/25.png"
}, {
    name: "Katherine Ortega",
    path: "assets/images/students/26.png"
}, {
    name: "Bridgitte",
    path: "assets/images/students/27.png"
}, {
    name: "Flor Tello",
    path: "assets/images/students/28.png"
}, {
    name: "Leslie",
    path: "assets/images/students/29.png"
}, {
    name: "Cindy Mendoza",
    path: "assets/images/students/30.png"
}, {
    name: "Annia J. Flores",
    path: "assets/images/students/31.png"
}, {
    name: "Betsi Loayza",
    path: "assets/images/students/32.png"
}, {
    name: "Ayda Sulca",
    path: "assets/images/students/33.png"
}, {
    name: "Milagros Gutierrez",
    path: "assets/images/students/34.png"
}, {
    name: "Nakarid Jave",
    path: "assets/images/students/35.png"
}, {
    name: "Angie Cóndor",
    path: "assets/images/students/36.png"
}, {
    name: "María Rojas",
    path: "assets/images/students/37.png"
}, {
    name: "Ariana Cabana",
    path: "assets/images/students/38.png"
}, {
    name: "Flor Cisneros",
    path: "assets/images/students/39.png"
}, {
    name: "Mitchell Rodríguez",
    path: "assets/images/students/40.png"
}, {
    name: "Naomi Villanueva",
    path: "assets/images/students/41.png"
}, {
    name: "Mary Castillo",
    path: "assets/images/students/42.png"
}, {
    name: "Miriam Peralta",
    path: "assets/images/students/43.png"
}, {
    name: "Karin Alejo",
    path: "assets/images/students/44.png"
}, {
    name: "Maribel Sevilla",
    path: "assets/images/students/45.png"
}, {
    name: "Ruth Salvador",
    path: "assets/images/students/46.png"
}, {
    name: "Liliana Peña",
    path: "assets/images/students/47.png"
}, {
    name: "Wendy Reyes",
    path: "assets/images/students/48.png"
}, {
    name: "Cinthia Quispe",
    path: "assets/images/students/49.png"
}, {
    name: "Maria Grecia Cutipa",
    path: "assets/images/students/50.png"
}, {
    name: "Ana Durán",
    path: "assets/images/students/51.png"
}, {
    name: "Glisse Jorge",
    path: "assets/images/students/52.png"
}, {
    name: "Neiza Nuñez",
    path: "assets/images/students/53.png"
}, {
    name: "Sandra Solórzano",
    path: "assets/images/students/54.png"
}];

function allImagesDisplay(path, name, i) {
    'use strict';
    var display = document.getElementById('student-list'),
        figure = document.createElement("figure"),
        figcaption = document.createElement("figcaption"),
        img = document.createElement("img"),
        nameNode = document.createTextNode(name),
        nameTitle = document.createElement("span");

    img.setAttribute("src", path);
    img.setAttribute("alt", name);
    img.setAttribute("id", 'img0' + i);
    figure.classList.add("gallery-item");
    nameTitle.appendChild(nameNode);
    figcaption.appendChild(nameTitle);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    display.appendChild(figure);
}

var allPhotos = students.map(function (e) {
    'use strict';
    return e.path;
});

var allNames = students.map(function (e) {
    'use strict';
    return e.name;
});

var i;

for (i = 0; i < allPhotos.length; i += 1) {
    allImagesDisplay(allPhotos[i], allNames[i], i);
}