const logoText = document.getElementById("logoText");

const englishText = "SIRVI KISAN HOSTEL-PALI";
const hindiText   = "सिरवी किसान छात्रावास-पाली";

let showEnglish = true;

setInterval(() => {
    logoText.textContent = showEnglish ? hindiText : englishText;
    showEnglish = !showEnglish;
}, 2000); // 5 seconds

console.dir(logoText.textContent);

// --- 2. SLIDER ANIMATION (Photo Sliding) ---
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

function updateSlider() {
    // Ye line photos ko left-right move karti hai
    track.style.transform = `translateX(${-index * 100}%)`;
}

// Next Button Click
nextBtn.addEventListener('click', () => {
    index++;
    if (index >= slides.length) {
        index = 0; // Wapas pehli photo par
    }
    updateSlider();
});

// Previous Button Click
prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = slides.length - 1; // Akhiri photo par
    }
    updateSlider();
});

// Auto-play Slider: Har 5 second mein photo apne aap badlegi
setInterval(() => {
    index++;
    if (index >= slides.length) index = 0;
    updateSlider();
}, 5000);