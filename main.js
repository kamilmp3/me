// Funkcja do dynamicznego ładowania plików CSS
function loadCSS() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';

  // Sprawdzamy szerokość ekranu
  if (window.innerWidth <= 768) {
    // Jeśli ekran jest mniejszy lub równy 768px, ładujemy mobile.css
    link.href = 'mobile.css';
  } else {
    // W przeciwnym razie ładujemy index.css (dla komputerów)
    link.href = 'index.css';
  }

  // Dodajemy link do head
  document.head.appendChild(link);
}

// Ładujemy odpowiedni plik CSS przy załadowaniu strony
window.addEventListener('load', loadCSS);

// Ładujemy odpowiedni plik CSS przy zmianie rozmiaru okna
window.addEventListener('resize', loadCSS);