/* =====================================================
   CONFIGURAÇÕES
===================================================== */


/*
    ====================================================
    WHATSAPP DA EMPRESA
    ====================================================

    COLOQUE AQUI O NÚMERO DA MONTEVILLE.

    Formato:

    5511999999999

    Sem:
    - +
    - espaços
    - parênteses
    - traços
*/

const WHATSAPP_NUMBER = "5512997586956";


/* =====================================================
   ELEMENTOS
===================================================== */

const cards = document.querySelectorAll(".card");

const modal = document.getElementById("productModal");

const modalOverlay = document.getElementById("modalOverlay");

const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const whatsappProduct =
    document.getElementById("whatsappProduct");


/* =====================================================
   ABRIR PRODUTO
===================================================== */

cards.forEach((card) => {

    card.addEventListener("click", () => {


        /* ---------------------------------------------
           PEGAR INFORMAÇÕES DO CARD
        --------------------------------------------- */

        const name =
            card.dataset.name;

        const description =
            card.dataset.description;

        const image =
            card.querySelector("img").src;

        const imageAlt =
            card.querySelector("img").alt;


        /* ---------------------------------------------
           PREENCHER MODAL
        --------------------------------------------- */

        modalImage.src = image;

        modalImage.alt = imageAlt;

        modalTitle.textContent = name;

        modalDescription.textContent =
            description;


        /* ---------------------------------------------
           MENSAGEM DO WHATSAPP
        --------------------------------------------- */

        const message =
            `Olá! Vi o produto "${name}" no site da Monteville e tenho interesse nele. Gostaria de saber o valor, disponibilidade e mais informações, por favor.`;


        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


        whatsappProduct.href =
            whatsappURL;


        /* ---------------------------------------------
           ABRIR MODAL
        --------------------------------------------- */

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* =====================================================
   FECHAR MODAL
===================================================== */

function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* BOTÃO X */

modalClose.addEventListener(
    "click",
    closeModal
);


/* CLICAR FORA */

modalOverlay.addEventListener(
    "click",
    closeModal
);


/* ESC */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeModal();

        }

    }
);


/* =====================================================
   MENU MOBILE
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


menuButton.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle("open");

        const icon =
            menuButton.querySelector("i");


        if (
            mobileMenu.classList.contains("open")
        ) {

            icon.classList.remove(
                "fa-bars"
            );

            icon.classList.add(
                "fa-xmark"
            );

        } else {

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

    }
);


/* =====================================================
   FECHAR MENU MOBILE AO CLICAR
===================================================== */

const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            mobileMenu.classList.remove(
                "open"
            );


            const icon =
                menuButton.querySelector("i");


            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }
    );

});


/* =====================================================
   NAVEGAÇÃO - ITEM ATIVO
===================================================== */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            navLinks.forEach((item) => {

                item.classList.remove(
                    "active"
                );

            });


            link.classList.add(
                "active"
            );

        }
    );

});


/* =====================================================
   ALTERAR NAVBAR AO ROLAR
===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 30) {

            navbar.style.background =
                "rgba(7, 9, 16, 0.92)";

        } else {

            navbar.style.background =
                "rgba(9, 11, 20, 0.72)";

        }

    }
);