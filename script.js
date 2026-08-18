/* =====================================================
   MONTEVILLE SERRALHERIA
   JAVASCRIPT
===================================================== */


/* =====================================================
   CONFIGURAÇÕES
===================================================== */

const WHATSAPP_NUMBER = "5512997586956";

const INSTAGRAM_URL =
    "https://www.instagram.com/serralheriamonteville";


/* =====================================================
   ELEMENTOS
===================================================== */

const cards = document.querySelectorAll(".card");

const modal = document.getElementById("productModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const whatsappProduct =
    document.getElementById("whatsappProduct");

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.querySelector(".nav-links");

const navItems =
    document.querySelectorAll(".nav-link");

const navbar =
    document.querySelector(".navbar");


/* =====================================================
   PRODUTOS
===================================================== */

cards.forEach((card) => {

    /* deixa claro que o card é clicável */
    card.setAttribute("role", "button");

    card.setAttribute("tabindex", "0");

    card.setAttribute(
        "aria-label",
        "Ver detalhes do produto"
    );


    function openProduct() {

        const imageElement =
            card.querySelector(".card-image");

        const titleElement =
            card.querySelector("h3");

        const descriptionElement =
            card.querySelector("p");


        /* segurança */
        if (
            !imageElement ||
            !titleElement ||
            !descriptionElement ||
            !modal
        ) {
            return;
        }


        const image =
            imageElement.src;

        const imageAlt =
            imageElement.alt;

        const name =
            titleElement.textContent.trim();

        const description =
            descriptionElement.textContent.trim();


        /* =================================================
           PREENCHER MODAL
        ================================================= */

        modalImage.src = image;

        modalImage.alt = imageAlt;

        modalTitle.textContent = name;

        modalDescription.textContent =
            description;


        /* =================================================
           WHATSAPP
        ================================================= */

        const message =
            `Olá! Vi o produto "${name}" no site da Monteville e tenho interesse nele. Gostaria de saber quanto custa, se está disponível e receber mais informações, por favor.`;

        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


        whatsappProduct.href =
            whatsappURL;


        /* =================================================
           ABRIR MODAL
        ================================================= */

        modal.classList.add("active");

        document.body.classList.add("modal-open");

    }


    /* clique normal */

    card.addEventListener(
        "click",
        openProduct
    );


    /* teclado */

    card.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openProduct();

            }

        }
    );

});


/* =====================================================
   FECHAR MODAL
===================================================== */

function closeModal() {

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


/* botão X */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


/* clicar no fundo */

if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeModal
    );

}


/* ESC */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            modal &&
            modal.classList.contains("active")
        ) {

            closeModal();

        }

    }
);


/* =====================================================
   MENU MOBILE
===================================================== */

if (menuButton && navLinks) {

    menuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                navLinks.classList.toggle("open");


            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );


            const icon =
                menuButton.querySelector("i");


            if (isOpen) {

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

}


/* =====================================================
   FECHAR MENU MOBILE AO CLICAR
===================================================== */

navItems.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            if (
                navLinks &&
                navLinks.classList.contains("open")
            ) {

                navLinks.classList.remove(
                    "open"
                );

            }


            if (menuButton) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon =
                    menuButton.querySelector("i");


                if (icon) {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            }

        }
    );

});


/* =====================================================
   ITEM ATIVO DA NAVBAR
===================================================== */

navItems.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            navItems.forEach((item) => {

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
   NAVBAR AO ROLAR
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 30) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =====================================================
   ANIMAÇÃO DOS CARDS AO ENTRAR NA TELA
===================================================== */

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.08
        }
    );


cards.forEach((card) => {

    observer.observe(card);

});