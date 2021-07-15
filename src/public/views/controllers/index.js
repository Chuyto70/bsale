let toSearch = document.querySelector('#value')
let carta = document.querySelector('#card')
let informacion;
let objetos;

async function obtener() {

    informacion = await fetch(`https://bsale-jesus.herokuapp.com/search/${toSearch.value}`).then((data) => {
        return data.json()
    }).catch((err) => {
        console.log(err);
    })
}
async function obtenerData(cat) {

    objetos = await fetch(`https://bsale-jesus.herokuapp.com/cat/${cat}`).then((data) => {
        return data.json()
    }).catch((err) => {
        console.log(err);
    })
    card.innerHTML = ``;
    for (let objeto of objetos) {
        card.innerHTML += `
        <div class="col zoom">
            
        <div class="card shadow-sm">
            <img class="img-fluid" src=${objeto.url_image} alt="" style="display: flex;">
            <div class="card-body">
                <p class="card-text text-center fs-5">${objeto.name}</p>
                <small>$${objeto.price}</small>
                <small style="color:red;">-${objeto.discount}%</small>
            </div>
        </div>

</div>
        `
    }

}

let buscar = () => {



    obtener().then((result) => {
        carta.innerHTML = `
        <div class="">
                        <h3>Resultados de ${toSearch.value}</h3>
        </div>
        `
        for (let i = 0; i < informacion.length; i++) {
            console.log(informacion[i]);
            carta.innerHTML += `
            <div class="col zoom">
                        <a href="/postres.html" style="text-decoration: none; color: black;">
                            <div class="card shadow-sm">
                                <img src="${informacion[i].url_image}" alt="" srcset="" width="100%">
    
                                <div class="card-body">
                                    <p class="card-text text-center fs-5">${informacion[i].name}</p>
                                    <small>$${informacion[i].price}</small>
                                    <small style="color:red;">-${informacion[i].discount}%</small>
                                </div>
                            </div>
                        </a>
                    </div>
            `
        }
        console.log(informacion)
    }).catch((err) => {

    });

}