// Function to switch between languages

function toggleLanguage() {
    const checkbox = document.getElementById('language-switch');
    const label = document.getElementById('lang-label');
    if (checkbox.checked) {
        switchLanguage('en');
        label.textContent = 'EN';
    } else {
        switchLanguage('vi');
        label.textContent = 'VI';
    }
}
function switchLanguage(language) {
    const elements = document.querySelectorAll('[data-en], [data-vi]');

    // Loop through each element and change the text based on the selected language
    elements.forEach(function(element) {
        if (language === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else if (language === 'vi') {
            element.textContent = element.getAttribute('data-vi');
        }
    });

    // Toggle the active state on the buttons
    const viBtn = document.getElementById('vi-btn');
    const enBtn = document.getElementById('en-btn');

    if (language === 'en') {
        viBtn.classList.remove('active');
        enBtn.classList.add('active');
    } else {
        viBtn.classList.add('active');
        enBtn.classList.remove('active');
    }
}

// Set default language to Vietnamese
switchLanguage('vi');
