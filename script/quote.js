/** 
Actually also whole navbar it is what it is (or not really idk XD)
**/
const quotes = [
    'I just want the world to know I was here, that I mattered.',
    'Lecz jak mi powiesz, że wciąż gówno o tym wiem, przyznam Ci rację, bo nie dźwigałem Twych łez...',
    'BEEP BEEP MOTHERFUCKER!',
    'Każdy popełnia błędy, ale Igor, ile możesz, goddamn',
];

const quoteElement = document.getElementById('navbarQuote');
quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];

// Wait for fonts to load properly
document.fonts.ready.then(() => fitText(quoteElement));

function fitText(el) {
  const maxWidth = el.clientWidth;
  const maxFont = 60;
  const minFont = 10;
  let fontSize = parseFloat(window.getComputedStyle(el).fontSize);

  el.style.whiteSpace = 'nowrap';

  while (el.scrollWidth > maxWidth && fontSize > minFont) {
    fontSize -= 1;
    el.style.fontSize = fontSize + 'px';
  }

  while (el.scrollWidth < maxWidth && fontSize < maxFont) {
    fontSize += 1;
    el.style.fontSize = fontSize + 'px';
    if (el.scrollWidth > maxWidth) {
      fontSize -= 1;
      el.style.fontSize = fontSize + 'px';
      break;
    }
  }
}