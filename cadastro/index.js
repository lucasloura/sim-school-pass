$(document).ready(function () {
    var cpf = localStorage.getItem('cpf') ? JSON.parse(localStorage.getItem('cpf')) : '';
    localStorage.removeItem('cpf');
    alert(cpf);
});