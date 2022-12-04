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

alert('Strona w trakcie tworzenia (wersja alpha)');

//--------------------------------------------------------------------

const harmonogramButton = document.querySelector('.harmonogram-button');
const planButton = document.querySelector('.plan-button');

const harmonogramPlanContainer = document.querySelector('#harmonogram-plan-container');
const harmonogram = document.querySelector('#harmonogram-container');

const harmonogramContent = `
    <div id="harmonogram-container">
        <h1>Harmonogram</h1>
        <div class="harmonogram-inner-container harmonogram-inner-container-left">
            <div class="harmonogram-left-item-container">
                <div class="harmonogram-item">
                    <h2>Spotkanie 1 &nbsp;&nbsp;&nbsp;[Data]</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maiores quis quam. Possimus
                        quis voluptatem laudantium et, voluptatibus sint earum quidem, nemo incidunt numquam
                        similique dolore soluta est! Architecto, dolorum.</p>
                </div>
            </div>
        </div>
        <div class="harmonogram-inner-container harmonogram-inner-container-right">
            <div class="harmonogram-right-item-container">
                <div class="harmonogram-item">
                    <h2>Spotkanie 2 &nbsp;&nbsp;&nbsp;[Data]</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem qui maiores atque quas ducimus
                        animi sit deleniti pariatur, magnam veniam dolorum. Voluptates, necessitatibus provident?
                        Cum doloribus iure nostrum beatae dolorem.</p>
                </div>
            </div>
        </div>
        <div class="harmonogram-inner-container harmonogram-inner-container-left">
            <div class="harmonogram-left-item-container">
                <div class="harmonogram-item">
                    <h2>Spotkanie 3 &nbsp;&nbsp;&nbsp;[Data]</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sed quae. Natus quasi omnis
                        exercitationem sint officiis adipisci, nobis a dolorum beatae vitae voluptas autem numquam
                        aut eveniet, delectus nihil.</p>
                </div>
            </div>
        </div>
        <div class="harmonogram-inner-container harmonogram-inner-container-right">
            <div class="harmonogram-right-item-container">
                <div class="harmonogram-item">
                    <h2>Spotkanie 4 &nbsp;&nbsp;&nbsp;[Data]</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quaerat praesentium dolore
                        dignissimos possimus veritatis doloribus, assumenda facere molestiae harum, aperiam unde
                        cumque repellendus ad itaque perferendis quae! Fugit, eius!</p>
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
                    <h2>Plan 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maiores quis quam. Possimus
                        quis voluptatem laudantium et, voluptatibus sint earum quidem, nemo incidunt numquam
                        similique dolore soluta est! Architecto, dolorum.</p>
                </div>
                <div class="plan-item">
                    <h2>Plan 2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maiores quis quam. Possimus
                        quis voluptatem laudantium et, voluptatibus sint earum quidem, nemo incidunt numquam
                        similique dolore soluta est! Architecto, dolorum.</p>
                </div>
                <div class="plan-item">
                    <h2>Plan 3</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maiores quis quam. Possimus
                        quis voluptatem laudantium et</p>
                </div>
                <div class="plan-item">
                    <h2>Plan 4</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maiores quis quam. Possimus
                        quis voluptatem laudantium et, voluptatibus sint earum quidem, nemo incidunt numquam
                        similique dolore soluta est! Architecto, dolorum.</p>
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