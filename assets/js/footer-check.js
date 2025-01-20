window.addEventListener('DOMContentLoaded', () => {
    FooterCheck();
});

function FooterCheck() {
    if (document.getElementById('main_footer') !== null) {
        let footerHeight = document.getElementById('main_footer').getBoundingClientRect().height;
        let renderedHeight = document.getElementsByTagName('html')[0].getBoundingClientRect().height;
        let windowHeight = window.innerHeight;

        if (document.getElementById('main_footer').classList.value.split(" ").includes('pin_to_bottom')) {
            if ((renderedHeight + footerHeight) > footerHeight) {
                toggleClassName(document.getElementById('main_footer'), 'pin_to_bottom', 'r');
            }
        } else {
            if (renderedHeight < windowHeight) {
                toggleClassName(document.getElementById('main_footer'), 'pin_to_bottom', 'a');
            } else {
                toggleClassName(document.getElementById('main_footer'), 'pin_to_bottom', 'r');
            }
        }
    }
}

function toggleClassName(element,class_name,action) {
    var classes = element.classList.value;
    var classes_list = classes.split(" ");
    if (action == 'r') {
        classes_list.pop(class_name)
        element.classList = classes_list.join(" ")
    } else if (action == 'a') {
        classes_list.push(class_name)
        element.classList = classes_list.join(" ")
    }
}