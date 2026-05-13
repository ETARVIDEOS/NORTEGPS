/**
 * Norte GPS - Main JavaScript
 */
document.addEventListener('DOMContentLoaded', () => {

    // 1. WhatsApp
    const WS_NUMBER = '56938722325';

    // 2. Product Database
    const productDB = [
        {
            id: 1,
            title: "GPS PT60-L",
            category: "Magnetico",
            images: [
                "IMAGENES Y PRODUCTOS/El GPS PT60-L/PORTADA.jpg",
                "IMAGENES Y PRODUCTOS/El GPS PT60-L/GPSINALAMBRICO2.jpg",
                "IMAGENES Y PRODUCTOS/El GPS PT60-L/WhatsApp Image 2026-05-11 at 1.24.14 PM.jpeg"
            ],
            description: "El GPS PT60-L es un localizador inalámbrico 4G. Este dispositivo sirve para posicionamiento de vehículos, activos y aplicaciones desatendidas. Incorpora una antena GPS de alta sensibilidad y una antena de comunicación 4G para un posicionamiento rápido. Es recargable y cuenta con potentes imanes integrados para una fácil instalación. Este GPS inalámbrico incorpora una batería de iones de litio de alta capacidad de 7500 mAh que proporciona una duración 3 meses sin tener que recargar. Es inalámbrico y portátil se puede instalar fácilmente en camiones, remolques, contenedores, equipaje y personas.",
            specs: ["Inalámbrico 4G", "Batería 7500 mAh (3 meses)", "Imanes integrados"]
        },
        {
            id: 5,
            title: "VT200-L GPS",
            category: "GPS",
            images: [
                "IMAGENES Y PRODUCTOS/EL VT200-L GPS/PORTADA.jpeg",
                "IMAGENES Y PRODUCTOS/EL VT200-L GPS/imgi_10_VT200-L-4G-Tracker.jpg",
                "IMAGENES Y PRODUCTOS/EL VT200-L GPS/imgi_11_VT200-L-gps-tracker.jpg",
                "IMAGENES Y PRODUCTOS/EL VT200-L GPS/imgi_6_gps-tracking-device-4g.jpg",
                "IMAGENES Y PRODUCTOS/EL VT200-L GPS/imgi_7_4g-tracker-gps.jpg"
            ],
            description: "EL VT200-L cuenta con una memoria Flash integrada de 128 MB. Al entrar en zonas sin cobertura, guarda automáticamente los datos históricos de posicionamiento. Una vez restablecida la conexión a la red, reenvía automáticamente dichos datos a la plataforma. Este GPS dentro de sus configuraciones permite: lectura de SONDA de TEMPERATURA, CONECTAR IBUTTON con llave DALLAS y Rele para bloquear el vehiculo.",
            specs: ["Memoria Flash 128MB", "Sonda de Temperatura", "Soporte Llave DALLAS"]
        },
        {
            id: 3,
            title: "Cámara con IA-DC600 4G",
            category: "Camara",
            images: [
                "IMAGENES Y PRODUCTOS/Cámara con IA-DC600 4G/PORTADA.jpg",
                "IMAGENES Y PRODUCTOS/Cámara con IA-DC600 4G/imgi_10_high-quality-dashcam.jpg",
                "IMAGENES Y PRODUCTOS/Cámara con IA-DC600 4G/imgi_8_dash-camera-application.jpg",
                "IMAGENES Y PRODUCTOS/Cámara con IA-DC600 4G/imgi_9_dash-camera.jpg",
                "IMAGENES Y PRODUCTOS/Cámara con IA-DC600 4G/WhatsApp Image 2026-05-11 at 1.24.14 PMff.jpeg"
            ],
            description: "Cámara con IA-DC600 4G, esta cámara es una combinación de tercer ojo, sensor de somnolencia y un GPS de alta precisión. Esta usa una tarjeta TF para almacenar las grabaciones que luego se pueden reproducir en cualquier PC o Laptop. Tambien se le puede insertar una simcard de datos, lo que permite ver en tiempo real por las cámaras incorporadas el comportamiento del conductor y sus pasajeros además de observar la carretera.",
            specs: ["Sensor de somnolencia", "Grabación en tarjeta TF", "Transmisión en tiempo real"]
        },
        {
            id: 4,
            title: "VT100 GPS",
            category: "GPS",
            images: [
                "IMAGENES Y PRODUCTOS/EL VT100 GPS/PORTADA.jpg",
                "IMAGENES Y PRODUCTOS/EL VT100 GPS/imgi_10_GPS-Tracker-with-fuel-monitoring-1.jpg",
                "IMAGENES Y PRODUCTOS/EL VT100 GPS/imgi_11_small-gps-tracker-1.jpg",
                "IMAGENES Y PRODUCTOS/EL VT100 GPS/imgi_8_GPS-Tracker-with-free-app-1.jpg"
            ],
            description: "EL VT100, Es un GPS de excelente calidad con certificación IP66, esto significa que soporta humedad del ambiente. Funciona con voltajes desde 9 a 100 volts. Admite incorporar un Rele para bloquear el vehiculo en caso de robo o uso no autorizado.",
            specs: ["Certificación IP66", "Voltaje 9 a 100V", "Relé de bloqueo remoto"]
        },
        {
            id: 2,
            title: "Aplicación de Rastreo",
            category: "GPS",
            images: [
                "IMAGENES Y PRODUCTOS/Aplicacion de Rastreo/PORTADA.jpg"
            ],
            description: "La APLICACION de rastreo. WWW.ITRACKCARE.COM es muy amigable, de fácil uso, permite revisión de los dispositivos instalados en tiempo real. el usuario puede programar esta aplicación para que envie un informe semanal del comportamiento del conductor, informes como: exceso de velocidad, detenciones en ruta, kilómetros recorridos, encendido y apagado del vehiculo, además de enviar el comando de bloqueo y desbloqueo del vehiculo en caso de robo. Esta aplicación se puede usar en cualquier computador ANDROID o APPLE y en cualquier teléfono.",
            specs: ["Monitoreo en tiempo real", "Informes de comportamiento", "Bloqueo/desbloqueo remoto"]
        }
    ];

    // ── LIGHTBOX ──────────────────────────────────────────────────────────────
    function openLightbox(src) {
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);z-index:99999;display:flex;align-items:center;justify-content:center;cursor:zoom-out;';
        const img = document.createElement('img');
        img.src = src;
        img.style.cssText = 'max-width:90vw;max-height:90vh;object-fit:contain;border-radius:8px;box-shadow:0 0 80px rgba(0,0,0,0.8);';
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cssText = 'position:absolute;top:20px;right:30px;background:none;border:none;color:white;font-size:50px;cursor:pointer;line-height:1;z-index:1;';
        overlay.appendChild(img);
        overlay.appendChild(closeBtn);
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
        const close = () => { overlay.remove(); document.body.style.overflow = ''; };
        overlay.addEventListener('click', close);
        closeBtn.addEventListener('click', e => { e.stopPropagation(); close(); });
    }

    // ── RENDER PRODUCTS — Galería estilo Nike ─────────────────────────────────
    const carsGrid = document.getElementById('cars-grid');

    function renderProducts(category = 'todos') {
        carsGrid.innerHTML = '';
        const filtered = category === 'todos' ? productDB : productDB.filter(p => p.category === category);

        filtered.forEach((product, index) => {
            const thumbsHTML = product.images.map((img, i) =>
                `<button class="thumb-btn ${i === 0 ? 'active' : ''}" data-src="${img}" data-pid="${product.id}" type="button">
                    <img src="${img}" alt="" loading="lazy">
                </button>`
            ).join('');

            const wsText = encodeURIComponent(`Hola, quiero cotizar: ${product.title}`);

            carsGrid.insertAdjacentHTML('beforeend', `
                <div class="car-card anim-elem" style="animation-delay:${index * 0.1}s" data-animation="animate__fadeInUp">
                    <div class="gallery-main" id="gallery-${product.id}">
                        <span class="car-badge" style="z-index:10;">${product.category}</span>
                        <img src="${product.images[0]}" class="main-product-img" id="main-img-${product.id}" alt="${product.title}">
                        <div class="gallery-zoom-hint"><i class="fa-solid fa-magnifying-glass-plus"></i> Zoom</div>
                        ${product.images.length > 1 ? `
                        <button class="gallery-prev" data-pid="${product.id}" type="button" style="position:absolute;left:8px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0.55);border:none;color:white;width:32px;height:32px;border-radius:50%;cursor:pointer;font-size:0.9rem;z-index:11;display:flex;align-items:center;justify-content:center;">
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <button class="gallery-next" data-pid="${product.id}" type="button" style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0.55);border:none;color:white;width:32px;height:32px;border-radius:50%;cursor:pointer;font-size:0.9rem;z-index:11;display:flex;align-items:center;justify-content:center;">
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>` : ''}
                    </div>
                    <div class="thumb-strip">${thumbsHTML}</div>
                    <div class="car-content">
                        <h3 class="car-title">${product.title}</h3>
                        <ul class="car-features">
                            <li><i class="fa-solid fa-check-circle"></i> ${product.specs[0]}</li>
                            <li><i class="fa-solid fa-check-circle"></i> ${product.specs[1]}</li>
                        </ul>

                        <div style="display:flex;gap:8px;">
                            <button class="btn view-details-btn" data-id="${product.id}" style="flex:1;padding:11px 8px;font-size:0.88rem;border:1.5px solid var(--primary-color);color:var(--primary-color);background:transparent;border-radius:var(--radius-full);cursor:pointer;font-weight:600;">
                                <i class="fa-solid fa-expand"></i> Detalles
                            </button>
                            <a href="https://api.whatsapp.com/send?phone=${WS_NUMBER}&text=${wsText}" target="_blank" class="btn" style="flex:1;padding:11px 8px;font-size:0.88rem;background:#25d366;color:white;border-radius:var(--radius-full);text-align:center;font-weight:600;display:flex;align-items:center;justify-content:center;gap:6px;">
                                <i class="fa-brands fa-whatsapp"></i> Cotizar
                            </a>
                        </div>
                    </div>
                </div>`);
        });

        triggerAnimations();

        // Thumbnail click → cambia imagen principal
        carsGrid.querySelectorAll('.thumb-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const src = btn.getAttribute('data-src');
                const pid = btn.getAttribute('data-pid');
                const mainImg = document.getElementById(`main-img-${pid}`);
                if (mainImg) mainImg.src = src;
                btn.closest('.thumb-strip').querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Flechas de navegación en tarjetas
        carsGrid.querySelectorAll('.gallery-prev, .gallery-next').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const pid = parseInt(btn.getAttribute('data-pid'));
                const product = productDB.find(p => p.id === pid);
                if (!product) return;
                const mainImg = document.getElementById(`main-img-${pid}`);
                const thumbs = Array.from(document.querySelectorAll(`.thumb-btn[data-pid="${pid}"]`));
                let idx = thumbs.findIndex(t => t.classList.contains('active'));
                idx = btn.classList.contains('gallery-next')
                    ? (idx + 1) % product.images.length
                    : (idx - 1 + product.images.length) % product.images.length;
                mainImg.src = product.images[idx];
                thumbs.forEach(t => t.classList.remove('active'));
                thumbs[idx].classList.add('active');
            });
        });

        // Click imagen principal → lightbox (solo si no es flecha)
        carsGrid.querySelectorAll('.gallery-main').forEach(gallery => {
            gallery.addEventListener('click', (e) => {
                if (e.target.closest('.gallery-prev, .gallery-next')) return;
                openLightbox(gallery.querySelector('.main-product-img').src);
            });
        });

        // Ver Detalles
        carsGrid.querySelectorAll('.view-details-btn').forEach(btn => {
            btn.addEventListener('click', () => openModal(parseInt(btn.getAttribute('data-id'))));
        });

    }

    renderProducts();

    // Tab filtering
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.getAttribute('data-category'));
        });
    });

    // ── MODAL con Swiper + zoom ───────────────────────────────────────────────
    const modal = document.getElementById('car-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    function openModal(id) {
        const product = productDB.find(p => p.id === id);
        if (!product) return;

        document.getElementById('modal-title').textContent = product.title;
        document.getElementById('modal-category').textContent = product.category;
        document.getElementById('modal-desc').textContent = product.description;
        document.getElementById('modal-spec1').textContent = product.specs[0];
        document.getElementById('modal-spec2').textContent = product.specs[1];
        document.getElementById('modal-spec3').textContent = product.specs[2] || 'Soporte Técnico 24/7';

        // Construir slides con todas las imágenes del producto
        const wrapper = document.getElementById('modal-swiper-wrapper');
        wrapper.innerHTML = product.images.map(img =>
            `<div class="swiper-slide">
                <img src="${img}" class="modal-zoom-img">
             </div>`
        ).join('');

        // Destruir swiper previo si existe
        if (window._modalSwiper) { window._modalSwiper.destroy(true, true); window._modalSwiper = null; }

        window._modalSwiper = new Swiper('.modal-swiper', {
            loop: product.images.length > 1,
            pagination: { el: '.modal-swiper .swiper-pagination', clickable: true }
        });

        // Botones custom prev/next
        const prevBtn = document.querySelector('.modal-swiper-prev');
        const nextBtn = document.querySelector('.modal-swiper-next');
        if (prevBtn) prevBtn.onclick = () => window._modalSwiper.slidePrev();
        if (nextBtn) nextBtn.onclick = () => window._modalSwiper.slideNext();

        // Mostrar/ocultar flechas si hay solo 1 imagen
        const hasMultiple = product.images.length > 1;
        if (prevBtn) prevBtn.style.display = hasMultiple ? 'flex' : 'none';
        if (nextBtn) nextBtn.style.display = hasMultiple ? 'flex' : 'none';

        // Zoom click en imágenes del modal
        wrapper.querySelectorAll('.modal-zoom-img').forEach(img => {
            img.addEventListener('click', () => openLightbox(img.src));
        });

        const msg = encodeURIComponent(`Hola, quisiera cotizar: ${product.title}`);
        document.getElementById('modal-ws-btn').href = `https://api.whatsapp.com/send?phone=${WS_NUMBER}&text=${msg}`;

        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeModalBtn.addEventListener('click', () => { modal.classList.remove('show'); document.body.style.overflow = ''; });
    window.addEventListener('click', e => { if (e.target === modal) { modal.classList.remove('show'); document.body.style.overflow = ''; } });

    // ── HEADER SCROLL ─────────────────────────────────────────────────────────
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 50));

    // ── CONTACT FORM ──────────────────────────────────────────────────────────
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const tipo = document.getElementById('tipo').value;
            const mensaje = document.getElementById('mensaje').value;
            const wsMsg = `*Consulta Norte GPS*%0A%0A*Empresa:* ${nombre}%0A*Producto:* ${tipo}%0A*Detalle:* ${mensaje}`;
            window.open(`https://api.whatsapp.com/send?phone=${WS_NUMBER}&text=${wsMsg}`, '_blank');
        });
    }

    // ── INTERSECTION OBSERVER (animaciones) ───────────────────────────────────
    function triggerAnimations() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    el.style.opacity = '1';
                    el.style.visibility = 'visible';
                    el.classList.add('animate__animated', el.getAttribute('data-animation'));
                    // Remove anim-elem AFTER animation so CSS opacity:0 never conflicts
                    el.addEventListener('animationend', () => {
                        el.classList.remove('anim-elem');
                        el.style.opacity = '';
                        el.style.visibility = '';
                    }, { once: true });
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        document.querySelectorAll('.anim-elem').forEach(el => observer.observe(el));
    }
    triggerAnimations();



    // ── TYPED.JS ──────────────────────────────────────────────────────────────
    if (typeof Typed !== 'undefined' && document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ['la mejor tecnología GPS.', 'seguridad 24/7.', 'cámaras IA de precisión.', 'control total de tu flota.'],
            typeSpeed: 55,
            backSpeed: 30,
            backDelay: 2200,
            loop: true
        });
    }

    // ── TESTIMONIAL SWIPER ────────────────────────────────────────────────────
    if (document.querySelector('.testimonial-swiper')) {
        new Swiper('.testimonial-swiper', {
            loop: true,
            autoplay: { delay: 4500, disableOnInteraction: false },
            pagination: { el: '.testimonial-swiper .swiper-pagination', clickable: true },
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 }
            }
        });
    }

    // ── CONTADORES ANIMADOS ───────────────────────────────────────────────────
    function animateCounters() {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.counted) {
                    entry.target.dataset.counted = '1';
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    const suffix = entry.target.getAttribute('data-suffix') || '';
                    let start = 0;
                    const step = target / 80;
                    const timer = setInterval(() => {
                        start += step;
                        if (start >= target) { entry.target.textContent = target + suffix; clearInterval(timer); }
                        else entry.target.textContent = Math.floor(start) + suffix;
                    }, 20);
                }
            });
        }, { threshold: 0.5 });
        document.querySelectorAll('.counter-num').forEach(c => obs.observe(c));
    }
    animateCounters();

});
