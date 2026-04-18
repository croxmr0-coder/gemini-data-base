// script.js
const users = {
    "1453": "Bay Crox",
    "wirsung96": "Bay Bıyık"
};

function checkAccess() {
    const pass = document.getElementById('pass-input').value;
    const welcomeText = document.getElementById('welcome-text');
    
    if (users[pass]) {
        document.getElementById('login-screen').classList.add('fade-out');
        setTimeout(() => {
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('main-panel').style.display = 'block';
            welcomeText.innerText = `Hoşgeldiniz ${users[pass]}`;
        }, 1000);
    } else {
        document.getElementById('error-msg').innerText = "ERİŞİM REDDEDİLDİ: GEÇERSİZ KOD.";
    }
}
