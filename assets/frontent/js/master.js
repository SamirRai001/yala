document.addEventListener('DOMContentLoaded', () => {
    const dropdownItems = document.querySelectorAll('.dropdown-item.language');
    const webLanguageDropdown = document.getElementById('webLanguageDropdown');
    function setLanguage(lang, flag) {
        localStorage.setItem('web-language', lang);
        webLanguageDropdown.innerHTML = `<span class="flag-icon flag-icon-${flag} flag-icon-squared"></span> ${lang === 'english' ? 'English' : 'नेपाली'}`;
        const englishLogos = document.querySelectorAll('.english-text-logo');
        const nepaliLogos = document.querySelectorAll('.nepali-text-logo');
        if (lang === 'english') {
            englishLogos.forEach(logo => logo.classList.remove('d-none'));
            nepaliLogos.forEach(logo => logo.classList.add('d-none'));
        } else {
            nepaliLogos.forEach(logo => logo.classList.remove('d-none'));
            englishLogos.forEach(logo => logo.classList.add('d-none'));
        }

        const elements = document.querySelectorAll('[data-en]');
        elements.forEach(el => {
            el.innerText = el.getAttribute(`data-${lang === 'english' ? 'en' : 'ne'}`);
            if (lang === 'english') {
                el.classList.add('eng');
                el.classList.remove('nep');
            } else {
                el.classList.add('nep');
                el.classList.remove('eng');
            }
        });
    }

    const savedLanguage = localStorage.getItem('web-language') || 'english';
    const defaultFlag = savedLanguage === 'english' ? 'us' : 'np';
    setLanguage(savedLanguage, defaultFlag);
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = item.getAttribute('data-lang');
            const flag = item.getAttribute('data-flag');
            setLanguage(lang, flag);
        });
    });
});

// --------------- function that runs when scroll ---------------
$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 160) {
        $('.navbar').addClass('navbar-toggle');
        $('.main-container').addClass('main-container-toggle');
    } else {
        $('.navbar').removeClass('navbar-toggle');
        $('.main-container').removeClass('main-container-toggle');
    }
});