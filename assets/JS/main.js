function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => 
        `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`
    ).join('');
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');
    console.log("Soft Skills Data:", profileData.skills.softSkills); // Verifique os dados
    softSkills.innerHTML = profileData.skills.softSkills
        .map(skill => `<li>${skill}</li>`)
        .join('');
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio');
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li id="neon">
                <a href="${project.url}" target="_blank" ${project.github ? 'class="github"' : ''}>
                    ${project.name}
                </a>
            </li>
        `;
    }).join('');
}

document.addEventListener("DOMContentLoaded", async () => {
    const profileData = await fetchProfileData();
    console.log("Profile Data:", profileData); // Ver
    updateProfileInfo(profileData);
    updateHardSkills(profileData);
    updateSoftSkills(profileData);
    updatePortfolio(profileData);
});