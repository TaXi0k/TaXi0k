/**Toggle scrollbar**/
const toggleScroll = document.getElementById('toggleScroll');
toggleScroll.addEventListener('click', () => {
    document.body.classList.toggle('show-scrollbar');
});


/**Scrolldown after clicking on scroll down**/
const scrollDown = document.getElementById('scrollDown');
scrollDown.addEventListener('click', () => {
    scroll({
        left: 0,
        top: 900,
        behavior: 'smooth',
    });
});