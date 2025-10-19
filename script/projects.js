const projects = [
    { img: 'img/projects/mdl.png', name: 'MyDeathLink', desc: "A way to sync two games on two PCs so when you die, your friend also dies. ONLY ON WINDOWS!", href: 'https://www.youtube.com' },
    { img: 'img/projects/v.png', name: 'Victoria Sato - my V', desc: "Character sheet of my V, name Victoria Sato. Formerly 2nd most important figure in Arasaka Counterintelligence. Now...", href: 'https://www.youtube.com' },
    { img: 'img/projects/1z10.png', name: 'MISIADOWE 1z10: AE', desc: 'App letting you play 1z10 (something like Fifteen to One) with your friends by streaming your screen.', href: 'https://www.youtube.com' },
]

function loadProjects() {
    const container = document.getElementById('projectContainer')
    container.innerHTML = '';

    projects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'projectItem';

        const img = document.createElement('img');
        img.src = project.img;
        img.alt = project.name;

        const info = document.createElement('div');
        info.className = 'projectInfo';
        info.innerHTML = `
            <div class="projectName">${project.name}</div>
            <div class="projectDesc"><span>${project.desc}</span></div>
        `;

        item.appendChild(img);
        item.appendChild(info);
        item.onclick = () => open(project.href)

        container.appendChild(item);
    });
}

loadProjects();