const images = [
    {path: 'photos/photomode_08102024_221041.png', name: 'Screenshot of Black Sapphire', game: 'Cyberpuk 2077'},
    {path: 'photos/20250625195639_1.jpg', name: 'Just flying to space', game: 'Satisfactory'},
    {path: 'photos/20241118220216_1.jpg', name: 'Transporting concrete blocks', game: 'SnowRunner'},
    {path: 'photos/20241108164101_1.jpg', name: 'Pure graffiti art', game: 'Cyberpunk 2077'},
    {path: 'photos/20241008211857_1.jpg', name: "Why didn't I take that photo without HUD", game: 'Cyberpunk 2077'},
    {path: 'photos/20240920001517_1.jpg', name: 'Luftwaffe joins the racing', game: 'The Crew 2'},
    {path: 'photos/Screenshot20240405-18211600000.png', name: 'What a beautiful guy', game: 'Satisfactory'},
    {path: 'photos/Screenshot20240914-16421200000.png', name: 'That game is so damn pretty', game: 'Satisfactory'},
    {path: 'photos/Photo_2025-09-26-223915789.png', name: 'Figa', game: 'Fallout 76'},
    {path: 'photos/Photo_2025-09-08-160534.png', name: "Some player I was raiding with (sry I don't remember your name)", game: 'Fallout 76'},
    {path: 'photos/Photo_2024-07-03-102044482.png', name: 'Bro got a bit wasted', game: 'Fallout 76'},
    {path: 'photos/screenshot_21453.png', name: 'Best friends forever!', game: 'The Witcher 3'},
    {path: 'https://prod-cdnugc-rockstargames.akamaized.net/ugc/gta5photo/Fjxjjtc6gka44PlGUtkLVw/0_0.jpg', name: 'On a car meet', game: 'Grand Theft Auto V'},
    {path: 'https://prod-cdnugc-rockstargames.akamaized.net/ugc/gta5photo/wYXfO9-al0aQLzKnq1VMnQ/0_0.jpg', name: 'Sultan RS', game: 'Grand Theft Auto V'},
    {path: 'https://prod-cdnugc-rockstargames.akamaized.net/ugc/gta5photo/8q0rDiaXd0iN1uSneotikA/0_0.jpg', name: 'My cosplay of Relraviediev Sheibenaschulangenistanov', game: 'Grand Theft Auto V Enhanced'},
    {path: 'https://prod-cdnugc-rockstargames.akamaized.net/ugc/rdr2photo/42yTWe4sT0i2GetF_lp_gQ/0_0.jpg', name: 'Beautiful view of Horseshoe Overlook', game: 'Red Dead Redemption 2'},
    {path: 'photos/Zrzut ekranu 2024-09-21 144507.png', name: 'My little portable miner army!', game: 'Satisfactory'},
    {path: 'photos/20240309175057_1.jpg', name: 'Kola Peninsula was such a nice region', game: 'SnowRunner'},
    {path: 'photos/20240411202908_1.jpg', name: 'Chivasowóz', game: 'Grand Theft Auto V'},
    {path: 'photos/20240702192349_1.jpg', name: 'My favorite parking spot', game: 'Far Cry 6'},
]

function loadGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    images.forEach(img => {
        const item = document.createElement('div');
        item.className = 'galleryItem';

        const image = document.createElement('img');
        image.src = img.path;
        image.alt = img.name;

        const info = document.createElement('div');
        info.className = 'galleryInfo';
        info.innerHTML = `
            <div class="galleryName">${img.name}</div>
            <div class="galleryGame">${img.game}</div>
        `;

        item.appendChild(image);
        item.appendChild(info);
        item.onclick = () => openLightbox(img.path);

        gallery.appendChild(item);
    });
}

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('active');
    document.getElementById('lightboxImg').src = src;
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

loadGallery();