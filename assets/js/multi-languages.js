
function changeLanguage() {
    const select = document.getElementById('language-select');
    const flagSpan = document.getElementById('selected-flag');
    const flagImg = flagSpan.querySelector('img');
    const selectedOption = select.options[select.selectedIndex];
    const lang = selectedOption.value;
    const flag = selectedOption.getAttribute('data-flag');
  
    // Cập nhật flag
    flagImg.src = flag;

    switchLanguage(lang);
}

// Khi load trang lần đầu, hiển thị đúng VN và load Tiếng Việt
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage();
});

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
}
