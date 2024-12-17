// Función para abrir el modal
function abrirModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "flex";
}

// Función para cerrar el modal
function cerrarModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
