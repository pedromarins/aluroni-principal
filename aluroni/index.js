document.querySelector(".botao").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        document.querySelector(".botao").innerHTML = "Modo Escuro";
    } else {
        document.querySelector(".botao").innerHTML = "Modo Claro";
    }
});

const botaoMenu = document.querySelector('.botao-menu-hamburguer')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
});


