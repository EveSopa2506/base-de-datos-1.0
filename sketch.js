/*function setup(){
    const database = firebase.database();
}*/
var nombre

function dataBase(){
    //console.log("si entro, creo , espero");
    const database = firebase.database();
    nombre = document.getElementById("name").value;
    console.log("nombre"+nombre)
    database.ref('/nombreDelJuego').set({
        nombreDelJuego:nombre
    })
}