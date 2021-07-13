let toSearch = document.querySelector('#value')
let carta = document.querySelector('#card')
let informacion;

async function obtener() {
    informacion = await fetch(`http://localhost:3000/search/${toSearch.value}`).then((data) => {
        return data.json()
    }).catch((err) => {
        console.log(err);
    })

}
let buscar = () => {
    obtener().then((result) => {
        carta.innerHTML = `
        <div class="">
                        <h3>Resultados de ${toSearch.value}</h3>
                    </div>
        `
        for (let i = 0; i < informacion.result.length; i++) {
            console.log(informacion.result[i]);
            carta.innerHTML += `
            <div class="col zoom">
                        <a href="/postres.html" style="text-decoration: none; color: black;">
                            <div class="card shadow-sm">
                                <img src="${informacion.result[i].url_image}" alt="" srcset="" width="100%">
    
                                <div class="card-body">
                                    <p class="card-text text-center fs-5">${informacion.result[i].name}</p>
                                    <small>$${informacion.result[i].price}</small>
                                    <small style="color:red;">-${informacion.result[i].discount}%</small>
                                </div>
                            </div>
                        </a>
                    </div>
            `
        }

    }).catch((err) => {

    });

}