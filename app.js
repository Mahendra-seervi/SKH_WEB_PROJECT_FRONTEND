const logoText = document.getElementById("logoText");

const englishText = "SIRVI KISAN HOSTEL-PALI";
const hindiText   = "सिरवी किसान छात्रावास-पाली";

let showEnglish = true;

setInterval(() => {
    logoText.textContent = showEnglish ? hindiText : englishText;
    showEnglish = !showEnglish;
}, 2000); // 5 seconds

console.dir(logoText.textContent);