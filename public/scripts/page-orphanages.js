const map = L.map('mapid').setView([-18.24134,-43.6198405], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//criando icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]

})

function addMarker({ id, name, lat, lng } =  orphanages) {

    const popup = L.popup({
        closeButton: false,
        className: "map-popup",
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="orphanage?id=${id}" class="choose-orphanage"> <img src="/images/arrow-white.svg" alt="logo"> </a>`)


    L.marker([lat, lng], { icon: icon })
        .addTo(map)
        .bindPopup(popup)

}

const spanOrphanages = document.querySelectorAll(".orphanages span")
// console.log(spanOrphanages.dataset.)
spanOrphanages.forEach(span => {

    // console.log(span)
    const orphanages = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(orphanages)
})


