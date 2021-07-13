let info
let card = document.querySelector("#card")
async function obtener() {
    info = await fetch('https://bsale-jesus.herokuapp.com/Comida').then((data) => {
            return data.json()
        }).catch((err) => {
            console.log(err);
        })
        //console.log(comidas)
}

obtener().then(data => {
    let comidas = info.data;
    for (let comida of comidas) {
        let element = `
        <div class="col zoom">
            
                    <div class="card shadow-sm">
                        <img class="img-fluid" src=${comida.url_image} alt="" style="display: flex;">

                        <div class="card-body">
                            <p class="card-text text-center fs-5">${comida.name}</p>
                            <small>$${comida.price}</small>
                            <small style="color:red;">-${comida.discount}%</small>
                        </div>
                    </div>
        
            </div>
        `
        card.innerHTML += element
        console.log(comida)
    }

})