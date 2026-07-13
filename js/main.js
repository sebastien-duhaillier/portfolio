// Navigation mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = 70; // Hauteur de la navbar
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Animation lors du scroll - DÉSACTIVÉE pour éviter le masquage du texte
// const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -50px 0px'
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.opacity = '1';
//             entry.target.style.transform = 'translateY(0)';
//         }
//     });
// }, observerOptions);

// Observer tous les éléments avec la classe 'animate' - DÉSACTIVÉ
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    // Les animations au scroll sont désactivées pour éviter le masquage du texte
    // Tous les éléments restent visibles normalement
});

// Fonction pour afficher des messages
function showMessage(message, type = 'info') {
    // Créer l'élément de message
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    
    // Styles pour le message
    Object.assign(messageDiv.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 2rem',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease-out'
    });
    
    // Couleurs selon le type
    const colors = {
        success: '#4CAF50',
        error: '#f44336',
        warning: '#ff9800',
        info: '#2196F3'
    };
    
    messageDiv.style.background = colors[type] || colors.info;
    
    // Ajouter au DOM
    document.body.appendChild(messageDiv);
    
    // Animation d'entrée
    setTimeout(() => {
        messageDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // Animation de sortie et suppression
    setTimeout(() => {
        messageDiv.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 300);
    }, 4000);
}

// Effet de typing pour le titre principal (optionnel)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Animation de compteur pour les statistiques (si vous en ajoutez)
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Initialisation des animations au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Active les liens de navigation
    updateActiveNavLink();
    
    // Ajoute des gestionnaires d'événements pour les boutons de projet
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') === '#') {
                e.preventDefault();
                showMessage('Lien vers le projet bientôt disponible !', 'info');
            }
        });
    });
});

// Met à jour le lien actif dans la navigation
function updateActiveNavLink() {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// Effet parallax léger pour la section hero - DÉSACTIVÉ pour un défilement normal
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
    
//     if (hero) {
//         hero.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// Préloader simple (optionnel)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Gestion du thème sombre/clair (fonction future)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Restaurer le thème préféré au chargement
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

// Lazy loading pour les images (amélioration des performances)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Fonction pour le message humoristique de chantier
function showConstructionMessage() {
    const messages = [
        "🚧 Portfolio en cours de perfectionnement ! 🚧\n\nComme Rome, un bon portfolio ne se construit pas en un jour ! 😄",
        "👷‍♂️ Attention travaux ! 👷‍♀️\n\nJe peaufine encore quelques détails pour vous offrir la meilleure expérience ! ⚡",
        "🔨 Chantier en cours ! 🔧\n\nPatience, les plus beaux projets prennent du temps à construire ! 🏗️",
        "🚧 Site en construction ! 🚧\n\nComme un bon vin, ce portfolio se bonifie avec le temps ! 🍷",
        "👨‍💻 Développeur au travail ! 👩‍💻\n\nJe code, je débogue, je peaufine... Bientôt la version finale ! 🚀"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}

// Animation de l'émoji du badge de chantier
function animateConstructionIcon() {
    const badge = document.querySelector('.construction-badge .icon');
    const icons = ['🚧', '⚠️', '🔨', '🛠️', '👷‍♂️', '🏗️', '🔧'];
    let currentIndex = 0;
    
    if (badge) {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % icons.length;
            badge.textContent = icons[currentIndex];
        }, 3000); // Change d'icône toutes les 3 secondes
    }
}

// Lancement de l'animation au chargement
document.addEventListener('DOMContentLoaded', () => {
    // ...existing code...
    animateConstructionIcon();
});
