// Hàm để đổi ngôn ngữ và thay đổi hình ảnh cờ
function toggleLanguage() {
    const checkbox = document.getElementById('language-switch');
    const thumbFlag = document.getElementById('thumb-flag');
    const thumb = document.querySelector('.thumb');
    const switchElement = document.querySelector('.switch');

    // Kiểm tra trạng thái của checkbox và thay đổi ngôn ngữ + cờ
    if (checkbox.checked) {
        switchLanguage('vi');
        thumbFlag.src = "images/flag/vn-flag.png";  // Cờ VN khi bật
        thumb.style.backgroundColor = '#4CAF50';  // Màu xanh của toggle
        switchElement.style.backgroundColor = '#4CAF50';  // Màu xanh của toggle
    } else {
        switchLanguage('en');
        thumbFlag.src = "images/flag/uk-flag.png";  // Cờ Anh khi tắt
        thumb.style.backgroundColor = '#FFFFFF';  // Màu đỏ của toggle
        switchElement.style.backgroundColor = '#FFFFFF';  // Màu đỏ của toggle
    }
}

// Khi load trang lần đầu, hiển thị đúng VN và load Tiếng Việt
document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('language-switch');
    checkbox.checked = true; // Bật toggle
    const thumbFlag = document.getElementById('thumb-flag');
    const thumb = document.querySelector('.thumb');
    const switchElement = document.querySelector('.switch');

    thumbFlag.src = "images/flag/vn-flag.png"; // Mặc định cờ VN
    thumb.style.backgroundColor = '#4CAF50';  // Màu xanh của toggle
    switchElement.style.backgroundColor = '#4CAF50';  // Màu xanh của toggle
    switchLanguage('vi'); // Load ngôn ngữ Tiếng Việt khi bắt đầu
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
