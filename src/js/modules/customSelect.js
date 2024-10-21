export const customSelect  = () => {
    const select = document.querySelectorAll('.custom-select');


    select.forEach((item) => {
        const selectItems = item?.querySelector('.select-items');
        const selectSelected = item?.querySelector('.select-selected span');

        item?.addEventListener('click', function () {
            item.classList.toggle('show');
        });

        selectItems?.querySelectorAll('div').forEach((option) => {
            option.addEventListener('click', function () {
                selectSelected.textContent = option.textContent;
                selectItems.classList.remove('show');
            });
        });
    })




}
