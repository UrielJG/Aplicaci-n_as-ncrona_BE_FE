let ip = document.getElementById('ip');
let continente = document.getElementById('continente');
let pais = document.getElementById('pais');
let estado = document.getElementById('estado');
let ciudad = document.getElementById('ciudad');

async function leeRegistros(){

    const respuesta = await fetch("https://escenariobackend.azurewebsites.net/API-IP/ip_ubicacion.php");
    const registros = await respuesta.json();    
        
    return registros;
}

async function muestraRegistros(){
    try {
        arrayRegistros = await leeRegistros();
    } catch(e){
        console.log("Error generado: " + e);
    }    
    ip.innerHTML = ip.innerHTML +         
        arrayRegistros['ip'] + "<br>"; 
    continente.innerHTML = continente.innerHTML +         
        arrayRegistros['continente'] + "<br>";  
    pais.innerHTML = pais.innerHTML +         
        arrayRegistros['pais'] + "<br>";
    estado.innerHTML = estado.innerHTML +         
        arrayRegistros['estado'] + "<br>";
    ciudad.innerHTML = ciudad.innerHTML +         
        arrayRegistros['ciudad'] + "<br>";        
}

muestraRegistros();