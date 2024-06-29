const menuToggle = document.getElementById('menu-toggle');
const drawer = document.querySelector('.drawer');

menuToggle.addEventListener('change', (event) => {
    if (event.target.checked) {
        drawer.classList.add('md:flex');
    } else {
        drawer.classList.remove('md:flex');
    }
});
function Uyar() {
    alert("Bu Sadece Bir Demo")
}