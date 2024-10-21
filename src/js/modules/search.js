export const search = () => {
    const headerSearch = document.querySelector('.header-search__desk');

    headerSearch?.addEventListener('click', (e) => {
        if (!e.target.matches('.header-search__clear') && e.target.closest('.header-search__desk')) {
            headerSearch.classList.toggle('active')
        } if (e.target.closest('.header-search__clear')) {
            const input = headerSearch.querySelector('input');
            input.value = ''
        }

    });
}
