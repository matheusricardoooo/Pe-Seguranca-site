const selectionGroups = [
    {
        selector: '.card-form-solicitar > .protecao',
        buttonSelector: '.card-form-button',
        multiple: false
    },
    {
        selector: '.protection .protecao',
        buttonSelector: '.btn-protecao',
        multiple: true
    },
    {
        selector: '.upgrade',
        buttonSelector: '.btn-melhora',
        multiple: true
    }
];

document.querySelectorAll('.card-form-solicitar').forEach((card) => {
    card.addEventListener('click', (event) => {
        if (!(event.target instanceof Element)) {
            return;
        }

        const button = event.target.closest('button');
        if (!button || !card.contains(button)) {
            return;
        }

        const group = selectionGroups
            .map((config) => ({
                ...config,
                element: button.closest(config.selector)
            }))
            .find((config) => config.element && config.element.contains(button));

        if (!group || !button.matches(group.buttonSelector)) {
            return;
        }

        const isSelected = button.getAttribute('aria-pressed') === 'true';
        const nextState = !isSelected;

        if (!group.multiple && nextState) {
            group.element.querySelectorAll(group.buttonSelector).forEach((option) => {
                option.classList.remove('is-selected');
                option.setAttribute('aria-pressed', 'false');
            });
        }

        button.classList.toggle('is-selected', nextState);
        button.setAttribute('aria-pressed', String(nextState));
    });
});
