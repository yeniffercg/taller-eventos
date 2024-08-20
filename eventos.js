document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('miBoton').addEventListener('click', (event) => {
        alert('Hola!');
        event.stopPropagation();
    });

    document.getElementById('div1').addEventListener('click', (event) => {
        event.stopPropagation();
        alert('Hola! Soy el div');
    });
});