const contenedor = document.getElementById("contenedor-tarjetas")
console.log(contenedor)

fetch('https://rickandmortyapi.com/api/character')
.then(respuesta => respuesta.json())
.then(data => {
    const dataApi = data.results
    console.log(dataApi)

    let api=""
    for(let i = 0;i<dataApi.length;i++){
        api =api +`
        
            <div class="card">
            <div class="contenedor-img">
            <img src=${dataApi[i].image} alt=${dataApi[i].name}>
            
            
            
            </div>
            <p>
                ${dataApi[i].name}
            </p>
            <p>
            <span>Origen:</span> ${dataApi[i].origin.name}
            </p>
            <p>
            <span>Especie:</span> ${dataApi[i].species}
            </p>
            </div>
            `   
        ;
    }
    contenedor.innerHTML =api
})