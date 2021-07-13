let info
let card = document.querySelector("#card")
async function obtener() {
    info = await fetch('https://bsale-jesus.herokuapp.com/Bebida').then((data) => {
            return data.json()
        }).catch((err) => {
            console.log(err);
        })
        //console.log(comidas)
}

obtener().then(data => {
    let bebidas = info.data;
    for (let bebida of bebidas) {
        let element = `
        <div class="col zoom">
            
                    <div class="card shadow-sm">
                        <img class="img-fluid" src=${bebida.url_image} alt="" style="display: flex;">

                        <div class="card-body">
                            <p class="card-text text-center fs-5">${bebida.name}</p>
                            <small>$${bebida.price}</small>
                            <small style="color:red;">-${bebida.discount}%</small>
                        </div>
                    </div>
        
            </div>
        `
        card.innerHTML += element
        console.log(bebida)
    }

})