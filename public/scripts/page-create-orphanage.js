const map = L.map("mapid").setView([-18.24134,-43.6198405], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//criando icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
});

// crate map

let marker;

map.on("click", (e) => {
    // pegar o meu ckick no mapa
    

    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;

    console.log(lat, lng)
    
    // remover icon
    marker && map.removeLayer(marker);

    marker = L.marker([lat, lng], { icon }).addTo(map);
});

//selecionar fotos

function addPhoto() {
    const container = document.querySelector("#images");

    const newsContainer = document.querySelectorAll(".new-upload");

    const newFieldClone = newsContainer[newsContainer.length - 1].cloneNode(true);

    const fildVazio = newFieldClone.children[0];

    if (fildVazio.value == "") {
        return;
    }

    fildVazio.value = "";

    container.appendChild(newFieldClone);
}

function deleteField(e) {
    const span = e.currentTarget;

    const newsContainer = document.querySelectorAll(".new-upload");

    if (newsContainer.length < 2) {
        span.parentNode.children[0].value = ""
        return;
    }
    span.parentNode.remove();
}

function toggleSelect(e) {

    // console.log()
    document.querySelectorAll(".button-select button")
        .forEach(function (btn) {
            btn.classList.remove("activo")
        })

    const button = e.currentTarget
    button.classList.add("activo")

    const input = document.querySelector("[name='weekends']")

    input.value = button.dataset.value
}





