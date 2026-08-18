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

const cartButton = document.getElementById("cart-button");
const cart = document.getElementById("cart");
const cartOverlay = document.getElementById("cart-overlay");
const closeCart = document.getElementById("close-cart");

const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");

const whatsappButton = document.getElementById("whatsapp-button");


/* =====================================================
   MENU MOBILE
===================================================== */

mobileBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

});


/* FECHAR MENU */

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
   CARRINHO
===================================================== */

let carrinho = [];


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

                <button
                    class="btn btn-primary"
                    onclick="adicionarAoCarrinho(${produto.id})">

                    Adicionar ao pedido

                    <i class="fa-solid fa-plus"></i>

                </button>

            </div>

        `;

        productsGrid.appendChild(card);

    });

}


/* =====================================================
   ADICIONAR AO CARRINHO
===================================================== */

function adicionarAoCarrinho(id) {

    const produto = produtos.find(produto => produto.id === id);

    if (!produto) {
        return;
    }


    const itemExistente = carrinho.find(item => item.id === id);


    if (itemExistente) {

        itemExistente.quantidade++;

    } else {

        carrinho.push({

            id: produto.id,

            nome: produto.nome,

            imagem: produto.imagem,

            quantidade: 1

        });

    }


    atualizarCarrinho();

    abrirCarrinho();

}


/* =====================================================
   ATUALIZAR CARRINHO
===================================================== */

function atualizarCarrinho() {

    cartItems.innerHTML = "";


    if (carrinho.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-cart-shopping"></i>

                <h3>Seu carrinho está vazio</h3>

                <p>
                    Escolha um lanche para começar seu pedido.
                </p>

            </div>

        `;

        cartCount.textContent = "0";

        whatsappButton.disabled = true;

        return;

    }


    let quantidadeTotal = 0;


    carrinho.forEach(item => {

        quantidadeTotal += item.quantidade;


        const elemento = document.createElement("div");

        elemento.classList.add("cart-item");


        elemento.innerHTML = `

            <img
                src="${item.imagem}"
                alt="${item.nome}"
                class="cart-item-image"
            >

            <div class="cart-item-info">

                <h3>${item.nome}</h3>

                <span>
                    Item selecionado
                </span>

                <div class="quantity">

                    <button
                        onclick="diminuirQuantidade(${item.id})">

                        <i class="fa-solid fa-minus"></i>

                    </button>


                    <strong>
                        ${item.quantidade}
                    </strong>


                    <button
                        onclick="aumentarQuantidade(${item.id})">

                        <i class="fa-solid fa-plus"></i>

                    </button>

                </div>

            </div>


            <button
                class="remove-item"
                onclick="removerDoCarrinho(${item.id})">

                <i class="fa-solid fa-trash"></i>

            </button>

        `;


        cartItems.appendChild(elemento);

    });


    cartCount.textContent = quantidadeTotal;

    whatsappButton.disabled = false;

}


/* =====================================================
   AUMENTAR
===================================================== */

function aumentarQuantidade(id) {

    const item = carrinho.find(item => item.id === id);

    if (!item) {
        return;
    }

    item.quantidade++;

    atualizarCarrinho();

}


/* =====================================================
   DIMINUIR
===================================================== */

function diminuirQuantidade(id) {

    const item = carrinho.find(item => item.id === id);

    if (!item) {
        return;
    }


    item.quantidade--;


    if (item.quantidade <= 0) {

        carrinho = carrinho.filter(item => item.id !== id);

    }


    atualizarCarrinho();

}


/* =====================================================
   REMOVER
===================================================== */

function removerDoCarrinho(id) {

    carrinho = carrinho.filter(item => item.id !== id);

    atualizarCarrinho();

}


/* =====================================================
   ABRIR CARRINHO
===================================================== */

function abrirCarrinho() {

    cart.classList.add("active");

    cartOverlay.classList.add("active");

}


/* =====================================================
   FECHAR CARRINHO
===================================================== */

function fecharCarrinho() {

    cart.classList.remove("active");

    cartOverlay.classList.remove("active");

}


cartButton.addEventListener("click", abrirCarrinho);

closeCart.addEventListener("click", fecharCarrinho);

cartOverlay.addEventListener("click", fecharCarrinho);


/* =====================================================
   WHATSAPP
===================================================== */

whatsappButton.addEventListener("click", () => {

    if (carrinho.length === 0) {
        return;
    }


    let mensagem = "Olá! Gostaria de fazer um pedido na Garagem do Hambúrguer.\n\n";

    mensagem += "🍔 *MEU PEDIDO:*\n\n";


    carrinho.forEach(item => {

        mensagem += `• ${item.quantidade}x ${item.nome}\n`;

    });


    mensagem += "\nGostaria de confirmar meu pedido!";


    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;


    window.open(url, "_blank");

});


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

carregarProdutos();

atualizarCarrinho();