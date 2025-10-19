function toggleMobileNavbar() {
    var list = document.getElementById('mobileLinks');
    if (list.style.display === 'block') {
        list.style.display = 'none';
    } else {
        list.style.display = 'block';
    }
};