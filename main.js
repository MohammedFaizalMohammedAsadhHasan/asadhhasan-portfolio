import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Data ---
const skillCategories = [
    {
        title: 'Technical Development',
        skills: [
            { name: 'HTML', icon: 'html' },
            { name: 'CSS', icon: 'css' },
            { name: 'JavaScript', icon: 'js' },
            { name: 'TypeScript', icon: 'ts' },
            { name: 'React', icon: 'react' },
            { name: 'Java', icon: 'java' },
            { name: 'Spring Boot', icon: 'spring' },
            { name: 'MySQL', icon: 'mysql' },
            { name: 'MongoDB', icon: 'mongodb' },
            { name: 'Vite', icon: 'vite' },
            { name: 'GitHub', icon: 'github' }
        ]
    },
    {
        title: 'Special Creative Skills',
        skills: [
            { name: 'Canva', icon: 'canva' },
            { name: 'CapCut', icon: 'capcut' },
            { name: 'Video Editing', icon: 'video' },
            { name: 'Poster Design', icon: 'canva' },
            { name: 'Banner Design', icon: 'canva' }
        ]
    },
    {
        title: 'Office & Productivity',
        skills: [
            { name: 'MS Word', icon: 'word' },
            { name: 'MS Excel', icon: 'excel' },
            { name: 'MS PowerPoint', icon: 'pp' },
            { name: 'MS Access', icon: 'mysql' }
        ]
    }
];

const projects = [
    {
        title: 'Voice Assist Home Automation System With IoT Module',
        desc: 'A smart home automation system developed using IoT technology and voice assistant integration to control household devices efficiently. The system allows users to manage lights, fans, doors, and electronic appliances through voice commands and mobile connectivity. Designed with modern automation concepts, real-time monitoring, and secure device communication to improve convenience, energy efficiency, and smart living experiences.',
        tech: ['C++', 'IoT', 'Arduino'],
        image: 'assets/smarthome.png',
        github: '#',
        live: '#'
    },
    {
        title: 'Kid-Toys E-commerce',
        desc: 'A comprehensive online store for toys with interactive product catalogs and shopping cart.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://images.unsplash.com/photo-1532330393533-443990a51d10?auto=format&fit=crop&q=80&w=800',
        github: 'https://github.com/MohammedFaizalMohammedAsadhHasan/Kid-Toys',
        live: '#'
    },
    {
        title: 'Event Ticket Booking System',
        desc: 'Real-time event ticket booking platform with interactive seating maps and automated ticketing.',
        tech: ['Java', 'Spring Boot', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=800',
        github: '#',
        live: '#'
    },
    {
        title: 'Blood Bank Management System',
        desc: 'A modern Blood Bank Management System designed to streamline donor registration, blood inventory management, blood request processing, and hospital coordination. The system improves efficiency, accuracy, and data security by digitizing blood bank operations with a user-friendly interface and centralized database management. Developed to support fast emergency response and effective healthcare service management.',
        tech: ['TypeScript', 'Node.js', 'PostgreSQL'],
        image: 'assets/qurban.png',
        github: 'https://github.com/MohammedFaizalMohammedAsadhHasan/Blood-Bank',
        live: '#'
    },
    {
        title: 'Online Book Management System',
        desc: 'A digital library platform for managing book collections, lending, and user accounts.',
        tech: ['Java', 'MySQL', 'Swing'],
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800',
        github: '#',
        live: '#'
    },
    {
        title: 'Indoor Plant Disease Detection',
        desc: 'An AI-powered system for detecting diseases in indoor plants through image recognition.',
        tech: ['Python', 'TensorFlow', 'OpenCV'],
        image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&q=80&w=800',
        github: '#',
        live: '#'
    },
    {
        title: 'IT Service Management System',
        desc: 'A major university project focusing on streamlining ticketing and IT support workflows.',
        tech: ['MERN Stack', 'Redux', 'Git'],
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        github: 'https://github.com/MohammedFaizalMohammedAsadhHasan/Project-Finalized-',
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
    } catch (err) {
        console.error('Initialization error:', err);
    }
};

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    init();
} else {
    window.addEventListener('DOMContentLoaded', init);
}

function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('loader-hidden');
        }, 500);
    }
}

function initIcons() {
    lucide.createIcons({
        icons: lucide.icons
    });
}

function initCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
        gsap.to(follower, { x: e.clientX - 10, y: e.clientY - 10, duration: 0.15 });
    });

    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.style.transform += ' scale(2)';
            follower.style.borderColor = 'var(--neon-blue)';
        });
        el.addEventListener('mouseleave', () => {
            follower.style.transform = follower.style.transform.replace(' scale(2)', '');
            follower.style.borderColor = 'var(--neon-purple)';
        });
    });
}

function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = skillCategories.map(cat => `
        <div class="skill-category">
            <h3 class="category-title">${cat.title}</h3>
            <div class="skills-grid">
                ${cat.skills.map(skill => `
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
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = projects.map(proj => `
        <div class="project-card glass-card">
            <div class="project-img">
                <img src="${proj.image}" alt="${proj.title}">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${proj.github}" target="_blank" class="btn-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        </a>
                        <a href="${proj.live}" target="_blank" class="btn-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-info">
                <h3>${proj.title}</h3>
                <p>${proj.desc}</p>
                <div class="project-tech">
                    ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons({
        icons: lucide.icons
    });
}

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = timeline.map(item => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content glass-card">
                <span class="timeline-year gradient-text">${item.year}</span>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        </div>
    `).join('');
}

function initAnimations() {
    gsap.from('.reveal-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    gsap.utils.toArray('.glass-card, .reveal-up').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            y: 60,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        });
    });
}

function initParticles() {
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = Math.random() > 0.5 ? '#00f2ff22' : '#7000ff22';
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
}

function initMagneticButtons() {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });
}

function initScrollProgress() {
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('scroll-progress').style.width = scrolled + '%';
    });
}

function initThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    btn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        btn.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    });
}
