const options = {

    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false

}

const lat = document.querySelector("span[data-lat]").dataset.lat
const lng = document.querySelector("span[data-lng]").dataset.lng


const map = L.map('mapid', options).setView([lat, lng], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//criando icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]

})


L.marker([lat, lng], { icon: icon })
    .addTo(map)



// imagens em galaria


function selectImagen(event) {

    const btn = event.currentTarget

    const buttons = document.querySelectorAll(".imagens button")

    buttons.forEach((removeClass))

    function removeClass(btn) {

        btn.classList.remove("active")

    }




    const img = btn.children[0]

    const imgContainer = document.querySelector(".orphanage-details>img")

    imgContainer.src = img.src

    btn.classList.add('active')

}