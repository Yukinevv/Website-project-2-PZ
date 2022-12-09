import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnIntegration: false,
    },
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

//--------------------------------------------------------------------

//alert('Strona w trakcie tworzenia (wersja alpha)');

//--------------------------------------------------------------------

const harmonogramButton = document.querySelector('.harmonogram-button');
const planButton = document.querySelector('.plan-button');

const harmonogramPlanContainer = document.querySelector('#harmonogram-plan-container');
const harmonogram = document.querySelector('#harmonogram-container');

const harmonogramContent = `
    <div id="harmonogram-container">
        <h1>Harmonogram spotkań</h1>
        <div class="harmonogram-inner-container harmonogram-inner-container-left">
            <div class="harmonogram-left-item-container">
                <div class="harmonogram-item">
                    <h2>Spotkanie stacjonarne (I)</h2>
                    <h4>Czwartek, 10 listopada 12:00–1:00pm</h4>
                    <p>Spotkanie stacjonarne z opiekunem zespołu. Podczas spotkania:
                        Zapoznanie się z opiekunem zespołu. Pierwsza integracja.</p>
                </div>
            </div>
        </div>
        <div class="harmonogram-inner-container harmonogram-inner-container-right">
            <div class="harmonogram-right-item-container">
                <div class="harmonogram-item">
                    <h2>Spotkanie Online (III)</h2>
                    <h4>Czwartek, 17 listopada 8:00–9:30am</h4>
                    <p>Spotkanie online z opiekunem zespołu. Podczas spotkania: Przedstawienie pomysłów
                        opiekunowi. Dyskusja na ich temat – proponowanie zmian w pomysłach.
                        Przedstawianie zalet i wad pomysłów.</p>
                </div>
            </div>
        </div>
        <div class="harmonogram-inner-container harmonogram-inner-container-left">
            <div class="harmonogram-left-item-container">
                <div class="harmonogram-item">
                    <h2>Spotkanie Online (V)</h2>
                    <h4>Środa, 23 listopada 8:30–9:30am</h4>
                    <p>Spotkanie online z opiekunem zespołu. Podczas spotkania: Przedstawienie opiekunowi
                        wybranego pomysłu oraz innych rozwiązań już dostępnych na rynku, które dotyczą projektu.
                        Krytyczne spojrzenie na pomysł z perspektywy opłacalności projektu.</p>
                </div>
            </div>
        </div>
        <div class="harmonogram-inner-container harmonogram-inner-container-right">
            <div class="harmonogram-right-item-container">
                <div class="harmonogram-item">
                    <h2>Spotkanie online (VII)</h2>
                    <h4>Środa, 30 listopada 1:00–2:30pm</h4>
                    <p>Spotkanie online z opiekunem zespołu. Podczas spotkania: Rozmowy nad zrealizowanym
                        Impact Mapping, krytyczne spojrzenie nad obraną taktyką realizacji zadań. Dogłębna analiza
                        pomysłów i rozwijanie ich na bieżąco.</p>
                </div>
            </div>
        </div>
        <div class="harmonogram-inner-container harmonogram-inner-container-left">
            <div class="harmonogram-left-item-container">
                <div class="harmonogram-item">
                    <h2>Spotkanie stacjonarne (X)</h2>
                    <h4>Środa, 7 grudnia 12:45–2:15pm</h4>
                    <p>Spotkanie stacjonarne z opiekunem zespołu. Podczas spotkania: Dalsze rozważania
                        na temat wybranego projektu. Wyznaczenie technologii potrzebnej podczas tworzenia
                        projektu oraz do dalszego doczytania.</p>
                </div>
            </div>
        </div>
    </div>`;

harmonogram.innerHTML = harmonogramContent; // przy starcie strony

harmonogramButton.addEventListener('click', e => {
    e.preventDefault();

    harmonogram.innerHTML = harmonogramContent;

    harmonogramPlanContainer.appendChild(harmonogram);

    harmonogramButton.style.cursor = "default";
    planButton.style.cursor = "pointer";

    harmonogramAnimation();
});

planButton.addEventListener('click', e => {
    e.preventDefault();

    harmonogram.innerHTML = `
        <div id="plan-container">
            <h1>Plan pracy</h1>

            <div id="plan-inner-container">
                <div class="plan-item plan-item-no-margin-top">
                    <h2>15 grudnia 2022</h2>
                    <p>Ostateczny wybór tematu.</p>
                </div>
                <div class="plan-item">
                    <h2>16 grudnia 2022 – 8 stycznia 2023</h2>
                    <p>Nauka technologii potrzebnych do wykonania projektu.</p>
                </div>
                <div class="plan-item">
                    <h2>8 stycznia – 8 lutego 2023</h2>
                    <p>Stworzenie bazy danych i szkieletu aplikacji</p>
                </div>
                <div class="plan-item">
                    <h2>6 lutego 2023</h2>
                    <p>Udostępnienie raportów semestralnych poszczególnych członków zespołu.</p>
                </div>
                <div class="plan-item">
                    <h2>9 lutego – 15 marca 2023</h2>
                    <p>Dalsza praca nad backendem aplikacji.</p>
                </div>
                <div class="plan-item">
                    <h2>16 marca – 15 kwietnia 2023</h2>
                    <p>Dalsza praca nad frontendem aplikacji.</p>
                </div>
                <div class="plan-item">
                    <h2>15 kwietnia – 19 maja 2023</h2>
                    <p>Testowanie aplikacji.</p>
                </div>
                <div class="plan-item">
                    <h2>20 – 25 maja 2023</h2>
                    <p>Zakończenie pracy nad projektem i umieszczenie pełnej dokumentacji projektu
                        na stronie www zespołu.</p>
                </div>
                <div class="plan-item">
                    <h2>1 czerwca 2023</h2>
                    <p>Publiczna prezentacja projektów.</p>
                </div>
            </div>
        </div>`;

    harmonogramPlanContainer.appendChild(harmonogram);

    planButton.style.cursor = "default";
    harmonogramButton.style.cursor = "pointer";

    planAnimation();
});

function harmonogramAnimation() {
    const harmonogramItems = document.querySelectorAll('.harmonogram-item');

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('show', entry.isIntersecting);
                //if (entry.isIntersecting) observer.unobserve(entry.target)
            });
        },
        {
            threshold: 0.4,
            rootMargin: '-50px',
        }
    );

    harmonogramItems.forEach(item => {
        observer.observe(item);
    });
}

function planAnimation() {
    const planItems = document.querySelectorAll('.plan-item');

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('show', entry.isIntersecting);
                //if (entry.isIntersecting) observer.unobserve(entry.target)
            });
        },
        {
            threshold: 0.4,
            rootMargin: '-50px',
        }
    );

    planItems.forEach(item => {
        observer.observe(item);
    });
}

harmonogramAnimation();
planAnimation();

//--------------------------------------------------------------------

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 2200) toTop.classList.add('active');
    else toTop.classList.remove('active');
});

//--------------------------------------------------------------------

const hamburger = document.querySelector('.hamburger');
const menuOption = document.querySelector('.menu-option');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuOption.classList.toggle('active');
});

document.querySelectorAll('.menu-item').forEach(n => {
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menuOption.classList.remove('active');
    });
});