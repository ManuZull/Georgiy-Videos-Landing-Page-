function changeLanguage() {
            const select = document.getElementById('language-select');
            const selectedLang = select.value;
            const elements = document.querySelectorAll('.lang-es, .lang-en, .lang-ru');

            elements.forEach(element => {
                element.classList.remove('active');
                if (element.classList.contains(`lang-${selectedLang}`)) {
                    element.classList.add('active');
                }
            });
        }

        // Set default language to Spanish
        document.addEventListener('DOMContentLoaded', () => {
            changeLanguage();
        });