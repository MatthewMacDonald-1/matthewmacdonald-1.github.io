
const buttons = document.querySelectorAll(".portfolio-item .head .expand");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        if (buttons[i].children[0].getAttribute('data-mode') == 'active') {
            buttons[i].children[0].setAttribute('data-mode', 'inactive');

            buttons[i].parentElement.parentElement.setAttribute('content-mode', 'inactive');
        } else {
            buttons[i].children[0].setAttribute('data-mode', 'active');

            buttons[i].parentElement.parentElement.setAttribute('content-mode', 'active');
        }
        
    });
}
