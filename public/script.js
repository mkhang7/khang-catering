document.addEventListener('DOMContentLoaded', () => {
    // --- PHẦN 1: LOGIC CHỌN MÓN ---
    let count = 0;
    const orderBtn = document.querySelector('.btn-order');
    const selectButtons = document.querySelectorAll('.btn-select');

    selectButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            count++;
            if (orderBtn) {
                orderBtn.innerText = `Đặt Suất Ăn (${count})`;
                orderBtn.classList.add('bump-effect');
                setTimeout(() => {
                    orderBtn.classList.remove('bump-effect');
                }, 300);
            }
            button.innerText = "Đã chọn ✓";
            button.style.backgroundColor = "#10b981";
        });
    });

    // --- PHẦN 2: LOGIC GỬI FORM ---
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Ngăn trang web load lại
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            
            // Hiển thị thông báo cho khách
            alert(`Cảm ơn ${name}! Khang Catering đã nhận được yêu cầu từ số ${phone}. Chúng mình sẽ gọi lại ngay nhé!`);
            
            contactForm.reset(); // Xóa trắng form sau khi gửi thành công
        });
    }

    // --- LOGIC CHO MENU MOBILE (HASECA STYLE) ---
const hamburger = document.getElementById('hamburger-icon'); // Lấy nút ☰
const navLinks = document.querySelector('.nav-links'); // Lấy danh sách link

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        // Khi bấm vào ☰, thêm/gỡ class 'active' cho .nav-links
        navLinks.classList.toggle('active'); 
        
        // Đổi biểu tượng ☰ thành ✕ để đóng
        if (navLinks.classList.contains('active')) {
            hamburger.innerText = '✕';
        } else {
            hamburger.innerText = '☰';
        }
    });

    // Tự đóng Menu khi khách nhấn vào một Link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerText = '☰'; // Đổi lại ☰
        });
    });
}
});