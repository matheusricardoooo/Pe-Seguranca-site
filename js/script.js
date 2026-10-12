const carousel = document.querySelector(".solutions-carousel");

if (carousel) {
    const track = carousel.querySelector(".solutions-track");
    const slides = Array.from(carousel.querySelector(".solutions-track").children);
    const indicators = Array.from(carousel.querySelectorAll(".carousel-indicator"));
    const status = carousel.querySelector(".carousel-status");
    const previousButton = carousel.querySelector("[data-carousel-previous]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
    const autoplayDelay = 5000;
    let currentIndex = 0;
    let autoplayTimer;

    const showSlide = (index) => {
        currentIndex = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        slides.forEach((slide, slideIndex) => {
            const isActive = slideIndex === currentIndex;
            slide.setAttribute("aria-hidden", String(!isActive));
            slide.inert = !isActive;
        });

        indicators.forEach((indicator, indicatorIndex) => {
            indicator.setAttribute("aria-current", String(indicatorIndex === currentIndex));
        });

        status.textContent = `Solução ${currentIndex + 1} de ${slides.length}: ${slides[currentIndex].querySelector(".title-solution").textContent
            }`;
    };

    const stopAutoplay = () => {
        window.clearInterval(autoplayTimer);
        autoplayTimer = undefined;
    };

    const startAutoplay = () => {
        stopAutoplay();

        if (
            document.hidden ||
            carousel.matches(":hover") ||
            carousel.contains(document.activeElement) ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            return;
        }

        autoplayTimer = window.setInterval(() => showSlide(currentIndex + 1), autoplayDelay);
    };

    previousButton.addEventListener("click", () => showSlide(currentIndex - 1));
    nextButton.addEventListener("click", () => showSlide(currentIndex + 1));

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => showSlide(index));
    });

    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
    carousel.addEventListener("focusin", stopAutoplay);
    carousel.addEventListener("focusout", (event) => {
        if (!carousel.contains(event.relatedTarget)) {
            startAutoplay();
        }
    });
    document.addEventListener("visibilitychange", startAutoplay);

    startAutoplay();
}

const productsSection = document.querySelector("#products-section");

if (productsSection) {
    const slidesContainer = productsSection.querySelector(".products-slides");
    const categoryNavigation = productsSection.querySelector(".btns-navegation");
    const previousProductButton = productsSection.querySelector("[data-product-previous]");
    const nextProductButton = productsSection.querySelector("[data-product-next]");
    const productStatus = productsSection.querySelector(".product-slide-status");
    const productCategories = [
        {
            id: "cameras",
            name: "Câmeras de Segurança",
            image: "img/img-section-camera.png",
            imageAlt: "Câmera do botão de categoria de câmeras",
            products: [
                {
                    id: "vhd-1120-dome",
                    name: "VHD 1120 DOME",
                    description:
                        "A câmera VHD 1120 Dome oferece imagens nítidas e monitoramento confiável para ampliar a segurança do seu ambiente. Seu design discreto permite uma instalação harmoniosa em residências e estabelecimentos comerciais.",
                    image: "img/img2.jpeg",
                    imagePosition: "70% center",
                    imageAlt: "Câmera dome VHD 1120 em ambiente profissional",
                    actionUrl: "#about-section",
                    features: [
                        {
                            icon: "camera",
                            title: "Formato dome",
                            description: "Design discreto, conforme a apresentação deste modelo."
                        },
                        {
                            icon: "monitor",
                            title: "Uso em CFTV",
                            description: "Desenvolvida para integrar sistemas de monitoramento."
                        },
                        {
                            icon: "eye",
                            title: "Monitoramento visual",
                            description: "Auxilia no acompanhamento visual do ambiente."
                        },
                        {
                            icon: "info",
                            title: "Dados técnicos",
                            description: "Consulte a ficha do fabricante para confirmar os detalhes."
                        }
                    ]
                },
                {
                    id: "vhd-1120-dome-2",
                    name: "VIP 1230 BULLET",
                    description:
                        "A câmera VIP 1230 Bullet oferece monitoramento eficiente com imagens de alta qualidade para reforçar a segurança do ambiente. Seu formato cilíndrico é ideal para monitorar entradas, fachadas e áreas externas.",
                    image: "img/img3.jpeg",
                    imagePosition: "90% center",
                    imageAlt: "Modelo extra de câmera bullet para edição futura",
                    actionUrl: "#about-section",
                    features: [
                        {
                            icon: "camera",
                            title: "Formato bullet",
                            description: "Layout padrão para edição futura."
                        },
                        {
                            icon: "monitor",
                            title: "Uso em CFTV",
                            description: "Preparado para monitoramento interno e externo."
                        },
                        {
                            icon: "eye",
                            title: "Monitoramento visual",
                            description: "Estrutura base para apresentação do produto."
                        },
                        {
                            icon: "info",
                            title: "Dados técnicos",
                            description: "Preencher com a ficha real do produto."
                        }
                    ]
                },
                {
                    id: "vhd-1120-dome-3",
                    name: "DVR SERIE 1100",
                    description:
                        "O DVR Série 1100 permite gravar e gerenciar imagens de câmeras de segurança em um único equipamento. Sua compatibilidade com diferentes tecnologias de CFTV oferece flexibilidade na instalação do sistema..",
                    image: "img/img4.jpeg",
                    imagePosition: "80% center",
                    imageAlt: "Terceiro modelo extra da categoria de câmeras",
                    actionUrl: "#about-section",
                    features: [
                        {
                            icon: "camera",
                            title: "Formato dome",
                            description: "Layout base de referência para o catálogo."
                        },
                        {
                            icon: "monitor",
                            title: "Uso em CFTV",
                            description: "Possível integração à infraestrutura de vigilância."
                        },
                        {
                            icon: "eye",
                            title: "Monitoramento visual",
                            description: "Estrutura compacta para uso profissional."
                        },
                        {
                            icon: "info",
                            title: "Dados técnicos",
                            description: "Informações pendentes para edição futura."
                        }
                    ]
                }
            ]
        },
        {
            id: "alarm-systems",
            name: "Sistemas de Alarme",
            image: "img/img-section-alarme.png",
            imageAlt: "Central de alarme instalada em um ambiente",
            imagePosition: "78% center",
            products: [
                {
                    id: "alarm-system-placeholder",
                    name: "ANM 24 NET",
                    description:
                        "Conteúdo ilustrativo para a categoria. O modelo, a descrição e as especificações do equipamento ainda precisam ser definidos.",
                    image: "img/img.jpeg",
                    imageAlt: "Imagem ilustrativa de um sistema de alarme",
                    actionUrl: "#about-section",
                    provisional: true
                },

                { 
                    id: "alarm-system-placeholder",
                    name: "ANM 24 NET",
                    description:
                        "Conteúdo ilustrativo para a categoria. O modelo, a descrição e as especificações do equipamento ainda precisam ser definidos.",
                    image: "img/img.jpeg",
                    imageAlt: "Imagem ilustrativa de um sistema de alarme",
                    actionUrl: "#about-section",
                    provisional: true
                }
            ]
        },
        {
            id: "electric-fences",
            name: "Cercas Elétricas",
            image: "img/img-section-cerca.png",
            imageAlt: "Cerca elétrica instalada no perímetro de um imóvel",
            imagePosition: "78% center",
            products: [
                {
                    id: "electric-fence-placeholder",
                    name: "Cerca elétrica — exemplo provisório",
                    description:
                        "Conteúdo ilustrativo para a categoria. O modelo, a descrição e as especificações do equipamento ainda precisam ser definidos.",
                    image: "img/img-fundo-solutions2.png",
                    imageAlt: "Imagem ilustrativa de uma cerca elétrica",
                    actionUrl: "#about-section",
                    provisional: true
                }
            ]
        },
        {
            id: "access-control",
            name: "Controle de Acesso",
            image: "img/img-section-controle.png",
            imageAlt: "Terminal de controle de acesso",
            imagePosition: "78% center",
            products: [
                {
                    id: "access-control-placeholder",
                    name: "Controle de acesso — exemplo provisório",
                    description:
                        "Conteúdo ilustrativo para a categoria. O modelo, a descrição e as especificações do equipamento ainda precisam ser definidos.",
                    image: "img/img-fundo-solutions5.png",
                    imageAlt: "Imagem ilustrativa de um terminal de controle de acesso",
                    actionUrl: "#about-section",
                    provisional: true
                }
            ]
        },
        {
            id: "intercoms",
            name: "Interfonia",
            image: "img/img-section-interfone.png",
            imageAlt: "Terminal de interfonia instalado na entrada de um imóvel",
            imagePosition: "78% center",
            products: [
                {
                    id: "intercom-placeholder",
                    name: "Interfonia — exemplo provisório",
                    description:
                        "Conteúdo ilustrativo para a categoria. O modelo, a descrição e as especificações do equipamento ainda precisam ser definidos.",
                    image: "img/img-fundo-solutions4.png",
                    imageAlt: "Imagem ilustrativa de um sistema de interfonia",
                    actionUrl: "#about-section",
                    provisional: true
                }
            ]
        },
        {
            id: "electric-gates",
            name: "Portões Eletrônicos",
            image: "img/img-section-portao.png",
            imageAlt: "Portão eletrônico instalado em uma residência",
            imagePosition: "78% center",
            products: [
                {
                    id: "electric-gate-placeholder",
                    name: "Portão eletrônico — exemplo provisório",
                    description:
                        "Conteúdo ilustrativo para a categoria. O modelo, a descrição e as especificações do equipamento ainda precisam ser definidos.",
                    image: "img/img-fundo-solutions6.png",
                    imageAlt: "Imagem ilustrativa de um portão eletrônico",
                    actionUrl: "#about-section",
                    provisional: true
                }
            ]
        }
    ];

    const provisionalFeatures = [
        ["info", "Aplicação"],
        ["settings", "Recursos"],
        ["link", "Compatibilidade"],
        ["tool", "Instalação"]
    ];
    const iconPaths = {
        camera: '<path d="M4 7h3l1.5-2h7L17 7h3v12H4z"/><circle cx="12" cy="13" r="3"/>',
        monitor: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 22h8m-4-4v4"/>',
        eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="2.5"/>',
        info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>',
        settings: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.5.9l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.5-.9l-1.7.7-1.4-2.4 1.4-1.1a7 7 0 0 1 0-1.8l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.5-.9l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.5.9l1.7-.7 1.4 2.4-1.4 1.1a7 7 0 0 1 0 1.8z"/>',
        link: '<path d="M10 13a5 5 0 0 0 7.1 0l3-3A5 5 0 0 0 13 2.9l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.1 0l-3 3A5 5 0 0 0 11 21.1l1.7-1.7"/>',
        tool: '<path d="m14.7 6.3 3 3M4 20l7.6-7.6m-4.3-8A5 5 0 0 0 13.7 11l6.1 6.1a2 2 0 0 1-2.8 2.8L10.9 14A5 5 0 0 0 4 7.1l3 3 3-3z"/>'
    };
    let activeCategoryId = productCategories[0].id;
    let currentProductIndex = 0;

    if (
        slidesContainer &&
        categoryNavigation &&
        previousProductButton &&
        nextProductButton &&
        productStatus
    ) {
        const getActiveCategory = () =>
            productCategories.find((category) => category.id === activeCategoryId);

        const createFeatureCard = (feature) => {
            const card = document.createElement("div");
            card.className = "card-vantagem";

            const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            icon.setAttribute("viewBox", "0 0 24 24");
            icon.setAttribute("aria-hidden", "true");
            icon.innerHTML = iconPaths[feature.icon] || iconPaths.info;

            const text = document.createElement("span");
            text.className = "feature-copy";
            const title = document.createElement("strong");
            title.className = "title-vantagens";
            title.textContent = feature.title;
            const description = document.createElement("small");
            description.className = "paragraph-vantagens";
            description.textContent = feature.description;
            text.append(title, description);
            card.append(icon, text);

            return card;
        };

        const renderIndicators = (category) => {
            let pagination = productsSection.querySelector(".product-pagination");

            if (!pagination) {
                pagination = document.createElement("div");
                pagination.className = "product-pagination";
                pagination.setAttribute("role", "group");
                pagination.setAttribute("aria-label", "Escolher produto");
                productsSection.insertBefore(pagination, categoryNavigation);
            }

            let indicators = Array.from(pagination.querySelectorAll(".product-page"));
            if (indicators.length !== category.products.length) {
                pagination.replaceChildren();
                category.products.forEach((product, index) => {
                    const indicator = document.createElement("button");
                    indicator.className = "product-page";
                    indicator.type = "button";
                    indicator.addEventListener("click", () => showProduct(index));
                    pagination.append(indicator);
                });
                indicators = Array.from(pagination.querySelectorAll(".product-page"));
            }

            indicators.forEach((indicator, index) => {
                indicator.setAttribute(
                    "aria-label",
                    `Exibir ${category.products[index].name}`
                );
                indicator.setAttribute("aria-current", String(index === currentProductIndex));
            });
        };

        const renderCategories = () => {
            const existingButtons = new Map(
                Array.from(categoryNavigation.querySelectorAll("[data-product-category]")).map((button) => [
                    button.dataset.productCategory,
                    button
                ])
            );

            productCategories.forEach((category) => {
                let button = existingButtons.get(category.id);

                if (!button) {
                    button = document.createElement("button");
                    button.className = "btn-product-indicator";
                    button.type = "button";
                    button.dataset.productCategory = category.id;
                    button.setAttribute("aria-label", `Exibir categoria ${category.name}`);

                    const image = document.createElement("img");
                    image.src = category.image;
                    image.alt = "";
                    image.style.objectPosition = category.imagePosition;
                    image.loading = "lazy";
                    image.decoding = "async";

                    const name = document.createElement("span");
                    name.textContent = category.name;
                    button.append(image, name);
                    categoryNavigation.append(button);
                }

                if (!button.querySelector("img")) {
                    const image = document.createElement("img");
                    image.src = category.image;
                    image.alt = "";
                    image.style.objectPosition = category.imagePosition;
                    image.loading = "lazy";
                    image.decoding = "async";
                    button.prepend(image);
                }

                if (!button.querySelector("span")) {
                    const name = document.createElement("span");
                    name.textContent = category.name;
                    button.append(name);
                }

                const activeImage = button.querySelector("img");
                const activeText = button.querySelector("span");

                if (activeImage && category.image) {
                    activeImage.src = category.image;
                    activeImage.alt = category.imageAlt || "";
                    if (category.imagePosition) {
                        activeImage.style.objectPosition = category.imagePosition;
                    }
                }

                if (activeText) {
                    activeText.textContent = category.name;
                }

                const isActive = category.id === activeCategoryId;
                button.classList.toggle("is-active", isActive);
                button.setAttribute("aria-pressed", String(isActive));
                button.setAttribute("aria-label", `Exibir categoria ${category.name}`);
            });
        };

        const renderProduct = (product) => {
            const card = document.createElement("article");
            card.className = "card-product is-active";
            card.setAttribute("aria-label", product.name);

            const content = document.createElement("div");
            content.className = "content-card-product";

            const title = document.createElement("h3");
            title.className = "title-card-product";
            title.textContent = product.name;
            content.append(title);

            const description = document.createElement("p");
            description.className = "paragraph-card-product";
            description.textContent = product.description;
            content.append(description);

            if (product.provisional) {
                const note = document.createElement("p");
                note.className = "product-provisional-note";
                note.textContent = "Produto e conteúdo ilustrativos — informações a confirmar.";
                content.append(note);
            }

            const features = product.features || provisionalFeatures.map(([icon, title]) => ({
                icon,
                title,
                description: "Informação provisória; confirmar conforme o modelo escolhido."
            }));
            const featureList = document.createElement("div");
            featureList.className = "card-vantagens";
            featureList.setAttribute("aria-label", "Características do produto");
            features.forEach((feature) => featureList.append(createFeatureCard(feature)));
            content.append(featureList);

            const action = document.createElement("a");
            action.className = "btn-card-product";
            action.href = product.actionUrl;
            action.textContent = "Solicitar Solução";
            content.append(action);

            const image = document.createElement("img");
            image.className = "img-card-product";
            image.src = product.image;
            image.alt = product.imageAlt;
            image.style.objectPosition =
                product.imagePosition || getActiveCategory().imagePosition;
            image.loading = "eager";
            image.decoding = "async";

            card.append(content, image);
            slidesContainer.replaceChildren(card);
        };

        function showProduct(index) {
            const category = getActiveCategory();
            currentProductIndex = (index + category.products.length) % category.products.length;
            render();
        }

        function render() {
            const category = getActiveCategory();
            const product = category.products[currentProductIndex];
            renderProduct(product);
            renderIndicators(category);
            renderCategories();

            const hasMultipleProducts = category.products.length > 1;
            previousProductButton.disabled = !hasMultipleProducts;
            nextProductButton.disabled = !hasMultipleProducts;
            previousProductButton.setAttribute(
                "aria-label",
                `Exibir produto anterior em ${category.name}`
            );
            nextProductButton.setAttribute(
                "aria-label",
                `Exibir próximo produto em ${category.name}`
            );
            productStatus.textContent =
                `${category.name}: produto ${currentProductIndex + 1} de ` +
                `${category.products.length} — ${product.name}`;
        }

        previousProductButton.addEventListener("click", () => {
            showProduct(currentProductIndex - 1);
        });
        nextProductButton.addEventListener("click", () => {
            showProduct(currentProductIndex + 1);
        });

        categoryNavigation.addEventListener("click", (event) => {
            const button = event.target.closest("[data-product-category]");
            if (!button) {
                return;
            }

            const category = productCategories.find(
                (item) => item.id === button.dataset.productCategory
            );
            if (!category) {
                return;
            }

            activeCategoryId = category.id;
            currentProductIndex = 0;
            render();
        });

        productsSection.addEventListener("keydown", (event) => {
            if (event.altKey || event.ctrlKey || event.metaKey) {
                return;
            }

            if (event.key === "ArrowLeft" && !previousProductButton.disabled) {
                showProduct(currentProductIndex - 1);
            } else if (event.key === "ArrowRight" && !nextProductButton.disabled) {
                showProduct(currentProductIndex + 1);
            }
        });

        render();
    }
}