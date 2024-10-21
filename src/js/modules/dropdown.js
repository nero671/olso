export const dropdown = () => {
    document.body.addEventListener('click', (e) => {
        if(e.target.closest('.js-dropdown')) {
            e.target.classList.toggle('active');
        }
    });
}

