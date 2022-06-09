function lockedProfile() {
    const divs = document.querySelectorAll('div.profile');
    for (const div of divs) {
        div.addEventListener('click', (e) => {
            const buttonShowHideElement = e.currentTarget.querySelector('button');
            const lock = e.currentTarget.querySelector('input[value=lock]').checked;
            if (buttonShowHideElement !== e.target || lock) {
                return;
            }

            buttonShowHideElement.textContent = buttonShowHideElement.textContent === 'Show more'
                ? 'Hide it'
                : 'Show more';

            const infoDivElement = e.currentTarget.querySelector('div');
            infoDivElement.style.display = infoDivElement.style.display === 'inline-block' ? 'none' : 'inline-block';
        });
    }
}