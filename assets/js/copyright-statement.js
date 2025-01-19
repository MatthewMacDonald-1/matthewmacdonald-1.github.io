
const elements = document.getElementsByClassName('cpr_cy');
const year = new Date().getFullYear();
for (let i in elements) {
    elements.item(i).innerHTML = year;
}
