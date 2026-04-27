function toggleMobileNavbar() {
    var list = document.getElementById('mobileLinks');
    if (list.style.display === 'block') {
        list.style.display = 'none';
    } else {
        list.style.display = 'block';
    }
};

document.querySelectorAll('.whiteButton').forEach(button => {
    button.style.setProperty('--maxLength', button.offsetWidth/1.5 + 'px');
});