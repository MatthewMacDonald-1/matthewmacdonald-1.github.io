
const navbarContainer = document.querySelector("#navbar");
const menuButton = document.querySelector("#navbar .banner .menu-button");

menuButton.addEventListener('click', () => {

    if (menuButton.classList.value.includes("open")) {
        // Close
        toggleClassName(menuButton, "open", "r");
        navbarContainer.removeAttribute("state");
    }
    else {
        toggleClassName(menuButton, "open", "a");
        navbarContainer.setAttribute("state", "open");
    }

});

// Expandable links


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

