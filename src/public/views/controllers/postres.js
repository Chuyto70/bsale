let info
let card = document.querySelector("#card")
async function obtener() {
    info = await fetch('https://bsale-jesus.herokuapp.com/Postres').then((data) => {
            return data.json()
        }).catch((err) => {
            console.log(err);
        })
        //console.log(comidas)
}

obtener().then(data => {
    let postres = info.data;
    for (let postre of postres) {
        let element = `
        <div class="col zoom">
            
                    <div class="card shadow-sm">
                        <img class="img-fluid" src=${postre.url_image} alt="" style="display: flex;">

                        <div class="card-body">
                            <p class="card-text text-center fs-5">${postre.name}</p>
                            <small>$${postre.price}</small>
                            <small style="color:red;">-${postre.discount}%</small>
                        </div>
                    </div>
        
            </div>
        `
        card.innerHTML += element
        console.log(postre)
    }

})