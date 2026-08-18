/* =====================================================
   CONFIGURAÇÕES
===================================================== */

const WHATSAPP_NUMBER = "5512000000000";


/* =====================================================
   ELEMENTOS
===================================================== */

const mobileBtn = document.querySelector(".btn-mobile");
const navLinks = document.getElementById("nav-links");
const icon = document.querySelector(".btn-mobile i");

const productsGrid = document.getElementById("products-grid");


/* =====================================================
   MENU MOBILE
===================================================== */

mobileBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

});


/* =====================================================
   FECHAR MENU AO CLICAR
===================================================== */

const links = navLinks.querySelectorAll("a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   PRODUTOS
===================================================== */

const produtos = [

    {
        id: 1,
        nome: "EL TRI",
        descricao: "Um dos lanches especiais da Garagem.",
        imagem: "src/images/EL TRI.png"
    },

    {
        id: 2,
        nome: "Hexa Burger",
        descricao: "Um hambúrguer especial da Garagem.",
        imagem: "src/images/hexa burger.png"
    },

    {
        id: 3,
        nome: "Route 66",
        descricao: "Um clássico da Garagem.",
        imagem: "src/images/route 66.png"
    }

];


/* =====================================================
   MOSTRAR PRODUTOS
===================================================== */

function carregarProdutos() {

    productsGrid.innerHTML = "";

    produtos.forEach(produto => {

        const card = document.createElement("article");

        card.classList.add("product-card");

        card.innerHTML = `

            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
                class="product-image"
            >

            <div class="product-info">

                <h3>${produto.nome}</h3>

                <p>
                    ${produto.descricao}
                </p>

                <a
                    href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Olá! Gostaria de pedir o ${produto.nome}.`
                    )}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-primary">

                    Pedir pelo WhatsApp

                    <i class="fa-brands fa-whatsapp"></i>

                </a>

            </div>

        `;

        productsGrid.appendChild(card);

    });

}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

carregarProdutos();