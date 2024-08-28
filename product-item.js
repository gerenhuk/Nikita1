document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px)';
        item.style.backgroundColor = '#CFD8DC';
        item.style.boxShadow = '0px 5px 20px #90A4AE'
        item.style.cursor = 'pointer';

    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
        item.style.backgroundColor = 'white';
        item.style.boxShadow = 'none';
    });
});





document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Запобігає переходу за посиланням

        // Отримуємо цільовий блок по ID з href атрибута посилання
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Плавне прокручування до цільового блоку
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
