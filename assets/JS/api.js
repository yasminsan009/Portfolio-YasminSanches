
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/yasminsan009/Portf-lio/refs/heads/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}