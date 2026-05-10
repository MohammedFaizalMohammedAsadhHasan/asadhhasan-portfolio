import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Data ---
const skills = [
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'JavaScript', icon: 'js' },
    { name: 'React', icon: 'react' },
    { name: 'Java', icon: 'java' },
    { name: 'Spring Boot', icon: 'spring' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'Canva', icon: 'canva' },
    { name: 'CapCut', icon: 'capcut' },
    { name: 'TypeScript', icon: 'ts' },
    { name: 'Vite', icon: 'vite' },
    { name: 'Video Editing', icon: 'video' },
    { name: 'Poster Design', icon: 'canva' },
    { name: 'Banner Design', icon: 'canva' },
    { name: 'GitHub', icon: 'github' },
    { name: 'MS Word', icon: 'word' },
    { name: 'MS Excel', icon: 'excel' },
    { name: 'MS PowerPoint', icon: 'pp' },
    { name: 'MS Access', icon: 'mysql' }
];

const projects = [
    {
        title: 'Voice Assist Home Automation System with IoT Module',
        desc: 'Smart home system using IoT and voice integration to control appliances through commands.',
        tech: ['IoT', 'Arduino', 'C++', 'Voice AI'],
        image: 'https://images.unsplash.com/photo-1558002038-1037906d9971?auto=format&fit=crop&q=80&w=800',
        github: '#',
        live: '#'
    },
    {
        title: 'AL-FARU Megamall Website',
        desc: 'Premium e-commerce platform for a luxury retail mall with interactive branding.',
        tech: ['React', 'Spring Boot', 'MySQL'],
        image: 'assets/megamall.png',
        github: '#',
        live: '#'
    },
    {
        title: 'Blood Bank Management System',
        desc: 'Digital system for tracking blood inventory and managing donor data with high security.',
        tech: ['TypeScript', 'Node.js', 'PostgreSQL'],
        image: 'https://images.unsplash.com/photo-1579154236594-e179ff303534?auto=format&fit=crop&q=80&w=800',
        github: 'https://github.com/MohammedFaizalMohammedAsadhHasan/Blood-Bank',
        live: '#'
    },
    {
        title: 'Event Ticket Booking System',
        desc: 'Real-time booking platform with interactive seating maps and automated ticketing.',
        tech: ['Java', 'Spring Boot', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=800',
        github: '#',
        live: '#'
    },
    {
        title: 'Online Book Management System',
        desc: 'Centralized digital library for managing collections, lending, and user accounts.',
        tech: ['Java', 'MySQL', 'Swing'],
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800',
        github: '#',
        live: '#'
    },
    {
        title: 'Indoor Plant Detect Diecesion',
        desc: 'AI-powered diagnostic tool for detecting diseases in indoor plants through image recognition.',
        tech: ['Python', 'TensorFlow', 'OpenCV'],
        image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&q=80&w=800',
        github: '#',
        live: '#'
    },
    {
        title: 'IT Service Management System',
        desc: 'Enterprise ticketing and service management system for streamlined IT support.',
        tech: ['MERN Stack', 'Redux', 'Git'],
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        github: 'https://github.com/MohammedFaizalMohammedAsadhHasan/Project-Finalized-',
        live: '#'
    },
    {
        title: 'Skills Craft Academy System',
        desc: 'LMS designed for skill development and academic management for modern institutions.',
        tech: ['React', 'Node.js', 'PostgreSQL'],
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
        github: '#',
        live: '#'
    },
    {
        title: 'Kids Toys Website',
        desc: 'Interactive and playful e-commerce store with vibrant product showcases.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://images.unsplash.com/photo-1532330393533-443990a51d10?auto=format&fit=crop&q=80&w=800',
        github: '#',
        live: '#'
    },
    {
        title: 'Qurban Smart System',
        desc: 'Digital platform for coordinating Qurban activities and distribution tracking.',
        tech: ['React', 'Firebase'],
        image: 'assets/qurban.png',
        github: '#',
        live: '#'
    }
];

const timeline = [
    { year: '2024', title: 'SLIIT IT Undergraduate', desc: 'Specializing in Information Technology and interactive systems. Maintaining high academic performance.' },
    { year: '2024', title: 'Full Stack Development', desc: 'Mastered React & Spring Boot. Built and deployed multiple complex web systems for local businesses.' },
    { year: '2025', title: 'UI/UX Design Specialization', desc: 'Focused on human-centered design, wireframing, and high-fidelity prototyping using Figma.' },
    { year: '2026', title: 'Advanced Digital Solutions', desc: 'Developing AI-driven platforms and smart management systems for real-world enterprise problems.' }
];

function initNavbarScroll() {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = skills.map(skill => `
                    <div class="skill-card glass-card">
                        <div class="skill-icon">
                            ${skill.icon === 'canva' ? `
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzAwQzRDQyIvPjx0ZXh0IHg9IjEyIiB5PSIxNSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCI+Q2FudmE8L3RleHQ+PC9zdmc+" alt="Canva" style="width: 40px; height: 40px;">
                            ` : skill.icon === 'capcut' ? `
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/CapCut_logo.svg/1024px-CapCut_logo.svg.png" alt="CapCut" style="width: 40px; height: 40px; object-fit: contain; filter: drop-shadow(0 0 5px rgba(0, 242, 255, 0.5));">
                            ` : skill.icon === 'word' ? `
                                <svg width="35" height="35" viewBox="0 0 24 24" fill="#2B579A" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                                    <text x="7" y="16" fill="white" font-family="Arial" font-size="10" font-weight="bold">W</text>
                                </svg>
                            ` : skill.icon === 'excel' ? `
                                <svg width="35" height="35" viewBox="0 0 24 24" fill="#217346" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                                    <text x="7" y="16" fill="white" font-family="Arial" font-size="10" font-weight="bold">X</text>
                                </svg>
                            ` : skill.icon === 'pp' ? `
                                <svg width="35" height="35" viewBox="0 0 24 24" fill="#D24726" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                                    <text x="7" y="16" fill="white" font-family="Arial" font-size="10" font-weight="bold">P</text>
                                </svg>
                            ` : `<img src="https://skillicons.dev/icons?i=${skill.icon}" alt="${skill.name}" style="width: 40px; height: 40px;">`}
                        </div>
                        <span>${skill.name}</span>
                    </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = projects.map(project => `
                    <div class="project-card glass-card reveal-up">
                        <div class="project-image">
                            <img src="${project.image}" alt="${project.title}">
                            <div class="project-overlay">
                                <div class="project-links">
                                    <a href="${project.github}" class="project-link magnetic" title="GitHub">
                                        <i data-lucide="github"></i>
                                    </a>
                                    <a href="${project.live}" class="project-link magnetic" title="Live Demo">
                                        <i data-lucide="external-link"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="project-content">
                            <h3>${project.title}</h3>
                            <p>${project.desc}</p>
                            <div class="project-tech">
                                ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                            </div>
                        </div>
                    </div>
    `).join('');
}

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = timeline.map(item => `
                    <div class="timeline-item reveal-up">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content glass-card">
                            <span class="timeline-year">${item.year}</span>
                            <h4>${item.title}</h4>
                            <p>${item.desc}</p>
                        </div>
                    </div>
    `).join('');
}

function initIcons() {
    lucide.createIcons();
}

function initCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorBlur = document.createElement('div');
    cursorBlur.className = 'custom-cursor-blur';
    document.body.appendChild(cursorBlur);

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });
        gsap.to(cursorBlur, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3
        });
    });

    document.querySelectorAll('.magnetic').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(btn, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.3
            });
        });
    });
}

function initAnimations() {
    // Reveal up animations
    gsap.utils.toArray('.reveal-up').forEach(elem => {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Hero content animation
    gsap.from('.hero-content > *', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });
}

function initThemeToggle() {
    // Theme toggle logic (already in HTML for performance)
}

function initParticles() {
    // Optional particle system logic
}

function initMagneticButtons() {
    // Already in initCursor
}

function initScrollProgress() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);

    window.addEventListener('scroll', () => {
        const h = document.documentElement, 
              b = document.body,
              st = 'scrollTop',
              sh = 'scrollHeight';
        const percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
        bar.style.width = percent + '%';
    });
}

function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        gsap.to(loader, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => loader.style.display = 'none'
        });
    }
}

// --- Initialization ---
const init = () => {
    hideLoader();
    try {
        initIcons();
        initCursor();
        renderSkills();
        renderProjects();
        renderTimeline();
        initAnimations();
        initParticles();
        initThemeToggle();
        initMagneticButtons();
        initScrollProgress();
        initNavbarScroll();
    } catch (error) {
        console.error('Initialization error:', error);
    }
};

window.addEventListener('load', init);
