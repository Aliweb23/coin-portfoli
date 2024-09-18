// Hier kannst du interaktive Funktionen hinzufügen, wie z.B. Filter- und Suchfunktionen

document.addEventListener('DOMContentLoaded', () => {
    // Beispiel für eine einfache Funktion, die beim Laden der Seite ausgeführt wird
    console.log('Website geladen und bereit!');
});
// Beispiel für eine Filterfunktion
function filterCoins(category) {
    const items = document.querySelectorAll('.coin-item');
    items.forEach(item => {
        if (item.textContent.includes(category) || category === 'All') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Event-Listener für Filter (wenn du Dropdown-Menüs oder Buttons verwendest)
document.querySelector('#filter').addEventListener('change', (event) => {
    filterCoins(event.target.value);
});
