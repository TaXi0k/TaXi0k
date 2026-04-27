document.querySelectorAll('.pinfo').forEach(button => {
    button.style.setProperty('--maxLength', button.offsetWidth/1.5 + 'px');
});
document.querySelectorAll('.skill').forEach(button => {
    button.style.setProperty('--maxLength', button.offsetWidth/1.5 + 'px');
});