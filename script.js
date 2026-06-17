// ============================================================
// JAM REAL-TIME
// ============================================================
function updateClock() {
    const now = new Date();
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const dayName = days[now.getDay()];
    const date = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${dayName} ${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    const timeElement = document.getElementById('liveTime');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}
setInterval(updateClock, 1000);
updateClock();

// ============================================================
// PARTICLE.JS - BINTANG BERKILAU
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#f5c842' },
                shape: { type: 'circle' },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: { enable: true, speed: 2, size_min: 0.5, sync: false }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#f5c842',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' }
                }
            },
            retina_detect: true
        });
    }
});

// ============================================================
// ANIMASI ANGKA STATISTIK
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.hero-stat-number[data-target]');
    statNumbers.forEach(el => {
        const target = parseFloat(el.dataset.target);
        if (!target) return;
        const duration = 2000;
        const startTime = performance.now();
        function updateNumber(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;
            el.textContent = Math.floor(current).toLocaleString();
            if (progress < 1) requestAnimationFrame(updateNumber);
            else el.textContent = target.toLocaleString();
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(updateNumber);
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });
        observer.observe(el);
    });
});

// ============================================================
// PENGGUNA AKTIF TERUS BERTAMBAH
// ============================================================
(function() {
    let activeUsers = 12854;
    const userElement = document.querySelector('.hero-stat-number[data-target]');
    if (!userElement) return;

    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function addRandomUsers() {
        const increment = Math.floor(Math.random() * 3) + 1;
        activeUsers += increment;
        userElement.textContent = formatNumber(activeUsers);
        userElement.style.transition = 'transform 0.1s';
        userElement.style.transform = 'scale(1.15)';
        userElement.style.textShadow = '0 0 30px rgba(245, 200, 66, 0.5)';
        setTimeout(() => {
            userElement.style.transform = 'scale(1)';
            userElement.style.textShadow = 'none';
        }, 150);
    }

    function scheduleNextAdd() {
        const delay = Math.floor(Math.random() * 3000) + 2000;
        setTimeout(() => {
            addRandomUsers();
            scheduleNextAdd();
        }, delay);
    }
    scheduleNextAdd();
})();

// ============================================================
// JACKPOT BERTAMBAH OTOMATIS
// ============================================================
(function() {
    let jackpotValue = 30566800;
    const jackpotElement = document.getElementById('jackpotValue');
    if (!jackpotElement) return;

    function formatRupiah(num) {
        return 'IDR ' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function addJackpot() {
        const increment = Math.floor(Math.random() * 50000) + 10000;
        jackpotValue += increment;
        jackpotElement.textContent = formatRupiah(jackpotValue);
        
        jackpotElement.style.transition = 'transform 0.1s';
        jackpotElement.style.transform = 'scale(1.05)';
        jackpotElement.style.textShadow = '0 0 40px rgba(245, 200, 66, 0.5)';
        setTimeout(() => {
            jackpotElement.style.transform = 'scale(1)';
            jackpotElement.style.textShadow = 'none';
        }, 200);
    }

    function scheduleJackpot() {
        const delay = Math.floor(Math.random() * 8000) + 5000;
        setTimeout(() => {
            addJackpot();
            scheduleJackpot();
        }, delay);
    }
    scheduleJackpot();
})();

// ============================================================
// NOTIFIKASI USER BARU (Pop-up 3D)
// ============================================================
(function() {
    const names = ['Andi', 'Budi', 'Citra', 'Doni', 'Eka', 'Fani', 'Gilang', 'Hani', 'Indra', 'Joko', 'Kiki', 'Lina', 'Mega', 'Nina', 'Oki', 'Putri', 'Rina', 'Siti', 'Tono', 'Ucok', 'Vina', 'Wawan', 'Yanti', 'Zaki'];
    let notifContainer = document.querySelector('.user-notification');
    if (!notifContainer) {
        notifContainer = document.createElement('div');
        notifContainer.className = 'user-notification';
        notifContainer.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 30px;
            background: rgba(15, 26, 43, 0.95);
            border: 1px solid var(--primary);
            border-radius: 16px;
            padding: 14px 24px;
            font-size: 0.85rem;
            color: var(--text-light);
            z-index: 999;
            backdrop-filter: blur(20px);
            box-shadow: 0 8px 40px rgba(0,0,0,0.6), 0 0 30px rgba(245,200,66,0.1);
            transform: translateX(-120%);
            transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
            max-width: 320px;
            border-left: 3px solid var(--success);
        `;
        document.body.appendChild(notifContainer);
    }

    function showUserJoined() {
        const name = names[Math.floor(Math.random() * names.length)];
        const number = Math.floor(Math.random() * 1000) + 1;
        const time = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
        notifContainer.innerHTML = `
            <div style="display:flex;align-items:center;gap:12px;">
                <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--primary-dark));display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;">
                    👤
                </div>
                <div>
                    <strong style="color:var(--primary);font-size:1rem;">${name}</strong>
                    <span style="color:var(--text-dim);font-size:0.75rem;">#${number}</span>
                    <span style="color:var(--success);font-size:0.7rem;display:block;">🟢 Bergabung • ${time}</span>
                </div>
            </div>
        `;
        notifContainer.style.transform = 'translateX(0)';
        notifContainer.style.boxShadow = '0 8px 40px rgba(0,0,0,0.6), 0 0 50px rgba(245,200,66,0.2)';
        setTimeout(() => {
            notifContainer.style.transform = 'translateX(-120%)';
            notifContainer.style.boxShadow = '0 8px 40px rgba(0,0,0,0.6), 0 0 30px rgba(245,200,66,0.1)';
        }, 4500);
    }

    function scheduleNotification() {
        const delay = Math.floor(Math.random() * 7000) + 8000;
        setTimeout(() => {
            showUserJoined();
            scheduleNotification();
        }, delay);
    }
    setTimeout(scheduleNotification, 5000);
})();

// ============================================================
// PARALLAX EFFECT (3D mouse tracking)
// ============================================================
document.addEventListener('mousemove', function(e) {
    const cards = document.querySelectorAll('.glass-card-3d');
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 8;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 8;
    
    cards.forEach(card => {
        card.style.transform = `perspective(1000px) rotateX(${mouseY * 0.3}deg) rotateY(${mouseX * 0.3}deg) translateY(-4px)`;
    });
});

// ============================================================
// SMOOTH SCROLL
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', duration: 800 });
        }
    });
});