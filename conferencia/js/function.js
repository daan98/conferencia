// FROMULARIO RESERVACIÓN
let dayTicket = document.getElementById("day_ticket");
let fullTicket = document.getElementById("full_ticket");
let twoDayTicket = document.getElementById("two_day_ticket");
let tag = document.getElementById("tag");
let shirt = document.getElementById("shirt");
let gift = document.getElementById("gift");
let friday = document.getElementById("friday");
let saturday = document.getElementById("saturday");
let sunday = document.getElementById("sunday");

// MOSTRANDO MAPA
let map = L.map('map').setView([17.994576, -92.952742], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([17.994576, -92.952742]).addTo(map)
    .bindPopup('VhsWebCamp')
    .openPopup();

// FUNCIÓN CUENTA REGRESIVA ***JAVASCRIPT***
let countDown = new Date("Oct 15, 2022 00:00:00").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDown - now;

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;
}, 1000)

// FUNCIONES DEL MENÚ RESPONSIVO
//// ABRIR MENÚ
function openMenu() {
    document.getElementById('link').setAttribute('style', 'display: grid;');
    document.getElementById('quit').setAttribute('style', 'display: block;');
    document.getElementsByClassName('bars')[0].style.display = "none";
}

//// CERRAR MENÚ
function closeMenu() {
    document.getElementsByClassName('bars')[0].style.display = "block";
    document.getElementById('link').setAttribute('style', 'display: none;');
    document.getElementById('quit').setAttribute('style', 'display: none;');
}

// JQUERY
$(function() {

    // SCROLL
    let windowHeight = $(window).height();
    let barra = $('.menu-container').innerHeight();
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();

        if(scroll > windowHeight){
            $('.menu-container').addClass('fixed');
            $('body').css({'margin-top': barra + 'px'});
        } else{
            $('.menu-container').removeClass('fixed');
            $('body').css({'margin-top': '0px'});
        }
    })

    $('.program-info-container #talleres').show();

    $('.program-menu-container a').on('click', function(event){
        event.preventDefault();
        $('.hide').hide();
        $('.program-menu-container a').removeClass("active");
        $(this).addClass("active");
        let link = $(this).attr('href');
        $(link).fadeIn(500);
        return false;
    });

    // ANIMANDO NÚMEROS
    $('.general-information .information:nth-child(1) h1').animateNumber({number: 6}, 2000);
    $('.general-information .information:nth-child(2) h1').animateNumber({number: 15}, 2000);
    $('.general-information .information:nth-child(3) h1').animateNumber({number: 3}, 2000);
    $('.general-information .information:nth-child(4) h1').animateNumber({number: 9}, 2000);

    // CUENTA REGRESIVA
    $('#day').countdown("2021/02/07", function(event){
        $(this).text(event.strftime("%D"));
    })
    $('#hour').countdown("2021/02/07", function(event){
        $(this).text(event.strftime("%H"));
    })
    $('#minute').countdown("2021/02/07", function(event){
        $(this).text(event.strftime("%M"));
    })
    $('#seconds').countdown("2021/02/07", function(event){
        $(this).text(event.strftime("%S"));
    })
})

//// FUNCIÓN CALCULANDO COSTOS
function calculatingCosts() {

    if (gift.value == "") {
        alert("Escoja un regalo para poder estimar el costo de su compra");
    } else {
        let precio = (dayTicket.value * 30) + (twoDayTicket.value * 45) + (fullTicket.value * 50) + (tag.value * 2) + (shirt.value * .95);
        document.getElementById("total").innerHTML = "$ " + precio.toFixed(2);
    }

    //ESCRIBIENDO RESUMEN
    let resumen = document.getElementById("summary");
    let listaResumen = [];

    if (dayTicket.value > 0) {
        listaResumen.push("Boleto por día: " + dayTicket.value);
    }
    if (twoDayTicket.value > 0) {
        listaResumen.push("Boletos para 2 días: " + twoDayTicket.value);
    }
    if (fullTicket.value > 0) {
        listaResumen.push("Boletos para 3 días: " + fullTicket.value);
    }
    if (tag.value > 0) {
        listaResumen.push("Paquetes de etiquetas: " + tag.value);
    }
    if (shirt.value > 0) {
        listaResumen.push("Camisas: " + shirt.value);
    }
    listaResumen.push("Regalo: " + gift.value);

    resumen.innerHTML = "";
    for (i = 0; i < listaResumen.length; i++) {
        resumen.innerHTML += "<p>" + listaResumen[i] + "</p>" + "<br/>";
    }
}

//FUNCIÓN PARA MOSTRAR LOS DÍAS DE CONFERENCIA
function showDays() {
    console.log('show days');
    let chosenDay = [];
    let notChosenDay = [];

    if (dayTicket.value > 0) {
        chosenDay.push("friday");
    } else if (dayTicket.value <= 0 && twoDayTicket.value <= 0 && fullTicket.value <= 0) {
        document.getElementById("friday").setAttribute("style", "display: none;");
    }

    if (twoDayTicket.value > 0) {
        chosenDay.push("friday", "saturday");
    } else if (two_day_ticket.value <= 0 && fullTicket.value <= 0) {
        document.getElementById("saturday").setAttribute("style", "display: none;");
    }

    if (fullTicket.value > 0) {
        chosenDay.push("friday", "saturday", "sunday");
    } else if (full_ticket.value <= 0) {
        document.getElementById("sunday").setAttribute("style", "display: none;");
    }

    for (i = 0; i < chosenDay.length; i++) {
        document.getElementById(chosenDay[i]).setAttribute("style", "display: block;");
    }
}