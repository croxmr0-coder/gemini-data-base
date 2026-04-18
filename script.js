const users = {
    "1453": "Bay Crox",
    "wirsung96": "Bay Bıyık"
};

let currentUser = "";

// Saat Güncelleme
setInterval(() => {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
}, 1000);

// Giriş Kontrolü
function checkAccess() {
    const pass = document.getElementById('pass-input').value;
    const error = document.getElementById('error-msg');
    
    if (users[pass]) {
        currentUser = users[pass];
        document.getElementById('login-screen').style.transform = "translateY(-100%)";
        document.getElementById('login-screen').style.transition = "1s ease-in-out";
        
        setTimeout(() => {
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('main-panel').style.display = 'grid';
            document.getElementById('welcome-text').innerText = `ERİŞİM ONAYLANDI: ${currentUser.toUpperCase()}`;
            loadData('photos');
        }, 1000);
    } else {
        error.innerText = "!! YANLIŞ ŞİFRE: ERİŞİM ENGELLENDİ !!";
        // Yanlış şifrede ekran sallanması efekti
        document.querySelector('.terminal-box').style.animation = "shake 0.5s";
        setTimeout(() => { document.querySelector('.terminal-box').style.animation = ""; }, 500);
    }
}

// Sekme Değiştirme
function switchTab(type) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    loadData(type);
}

// Örnek Veri Yükleme (Burası normalde veri tabanından gelecek)
function loadData(type) {
    const area = document.getElementById('display-area');
    area.innerHTML = `<p style="grid-column: 1/-1">Yükleniyor... [${type.toUpperCase()}]</p>`;
    
    // Buraya normalde Supabase/Firebase listeleme kodu gelecek.
    // Örnek görsel:
    setTimeout(() => {
        area.innerHTML = `
            <div class="data-card">
                <div class="card-header">S_DOSYA_001.JPG</div>
                <div style="height:150px; background:#222; margin:10px 0;"></div>
                <div class="card-footer">
                    <small>Yükleyen: Bay Crox</small><br>
                    <small>Tarih: 18.03.2026 23:45</small>
                </div>
            </div>
        `;
    }, 800);
}

function openUpload() {
    alert("Dosya Yükleme Sistemi Aktif Değil.\nLütfen Firebase veya Supabase entegrasyonu yapın.");
}
