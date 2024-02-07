function cerrar(nombre_clase){
    card = document.getElementsByClassName(nombre_clase);
    console.log(card);
    console.log(card[0]);
    card[0].classList.add("d-none");
}