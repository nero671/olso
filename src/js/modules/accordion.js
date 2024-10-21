export const useAccordion = (accordionWrapper) => {
    const accordion = accordionWrapper;

    const open = (button, dropdown) => {
        dropdown.style.height = "".concat(dropdown.scrollHeight + "px");
        button.classList.add('active');
        dropdown.classList.add('active');
    };

    const close = (button, dropdown) => {
        button.classList.remove('active');
        dropdown.classList.remove('active');
        dropdown.style.height = '';
    };

    if (accordion) {
        accordion.addEventListener('click', function (e) {
            const target = e.target;

            console.log(target)

            if (target.closest('[class*="__title"]')) {
                const parent = target.closest('[class$="__item"]');
                const button = target.closest('[class*="__title"]');
                const dropdown = parent.querySelector('[class*="__content"]');

                dropdown.classList.contains('active') ? close(button, dropdown) : open(button, dropdown);
            }
        });
    }
};
