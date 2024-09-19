document.addEventListener('DOMContentLoaded', () => {
    // Beispiel für eine einfache Funktion, die beim Laden der Seite ausgeführt wird
    console.log('Website geladen und bereit!');

    // Slider Initialisierung
    let currentIndex = 0;
    const items = document.querySelectorAll('.coin-item');
    const totalItems = items.length;

    document.querySelector('.next').addEventListener('click', () => {
        moveToNextSlide();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        moveToPrevSlide();
    });

    function updateSliderPosition() {
        const slider = document.querySelector('.slider');
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateSliderPosition();
    }

    function moveToPrevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateSliderPosition();
    }

    // Filterfunktion
    function filterCoins(category) {
        items.forEach(item => {
            if (item.textContent.includes(category) || category === 'All') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Event-Listener für den Filter (Dropdown-Menü oder Buttons)
    const filterDropdown = document.querySelector('#filter');
    if (filterDropdown) {
        filterDropdown.addEventListener('change', (event) => {
            filterCoins(event.target.value);
        });
    }
});
