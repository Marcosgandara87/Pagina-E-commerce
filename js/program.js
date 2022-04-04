const inicioSesion = document.getElementById("submitform")

inicioSesion.addEventListener("submit", (event)=>{
    event.preventDefault();
    window.location.href= "../screens/todosProductos.html"

})