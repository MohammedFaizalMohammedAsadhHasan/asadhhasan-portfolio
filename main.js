import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Data ---
const skills = [
    { name: 'HTML', icon: 'logos:html-5', category: 'frontend', desc: 'Expert in semantic markup, accessibility, and modern HTML5 features.' },
    { name: 'CSS', icon: 'logos:css-3', category: 'frontend', desc: 'Proficient in modern CSS, Flexbox, Grid, animations, and responsive design.' },
    { name: 'JavaScript', icon: 'logos:javascript', category: 'frontend', desc: 'Strong foundation in ES6+, DOM manipulation, and asynchronous programming.' },
    { name: 'React', icon: 'logos:react', category: 'frontend', desc: 'Building scalable, interactive UIs with functional components and hooks.' },
    { name: 'Java', icon: 'logos:java', category: 'backend', desc: 'Experienced in object-oriented programming and enterprise application development.' },
    { name: 'Python', icon: 'logos:python', category: 'backend', desc: 'Experienced in object-oriented programming and enterprise application development.' },
    { name: 'C', icon: 'logos:c', category: 'backend', desc: 'Experienced in object-oriented programming and enterprise application development.' },
    { name: 'Spring Boot', icon: 'logos:spring-icon', category: 'backend', desc: 'Developing robust REST APIs and microservices with Spring ecosystem.' },
    { name: 'MySQL', icon: 'logos:mysql', category: 'backend', desc: 'Database design, complex queries, and relational data modeling.' },
    { name: 'MongoDB', icon: 'logos:mongodb-icon', category: 'backend', desc: 'Working with NoSQL document databases for flexible data storage.' },
    { name: 'Figma', icon: 'logos:figma', category: 'design', desc: 'Advanced prototyping, wireframing, and design system creation.' },
    { name: 'Canva', icon: 'simple-icons:canva', color: '#00C4CC', category: 'design', desc: 'Quick graphics creation and social media asset design.' },
    { name: 'CapCut', icon: 'devicon:capcut', category: 'design', desc: 'Video editing, motion graphics, and engaging multimedia content creation.' },
    { name: 'GitHub', icon: 'logos:github-icon', category: 'tools', desc: 'Version control, collaborative development, and CI/CD pipelines.' },
    { name: 'Ubunthu', icon: 'logos:ubuntu', category: 'tools', desc: 'Version control, collaborative development, and CI/CD pipelines.' },
    { name: 'Notepad', icon: 'flat-color-icons:notebook', category: 'tools', desc: 'Ensuring seamless experiences across desktop, tablet, and mobile devices.' },
    { name: 'Notepad++', icon: 'logos:notepad-plus-plus', category: 'tools', desc: 'Professional document creation and formatting.' },
    { name: 'IntelliJ IDEA', icon: 'logos:intellij-idea', category: 'tools', desc: 'Professional document creation and formatting.' },
    { name: 'VS Code', icon: 'vscode-icons:file-type-word', category: 'tools', desc: 'Professional document creation and formatting.' },
    { name: 'Windsurf IDE', icon: 'logos:windsurf-', category: 'tools', desc: 'Professional document creation and formatting.' },
    { name: 'MS Word', icon: 'vscode-icons:file-type-word', category: 'tools', desc: 'Professional document creation and formatting.' },
    { name: 'MS Excel', icon: 'vscode-icons:file-type-excel', category: 'tools', desc: 'Data analysis, spreadsheets, and complex formulas.' },
    { name: 'MS PowerPoint', icon: 'vscode-icons:file-type-powerpoint', category: 'tools', desc: 'Creating impactful presentations and slide decks.' },
    { name: 'MS Access', icon: 'vscode-icons:file-type-access', category: 'tools', desc: 'Database management and desktop database application creation.' }
];

const projects = [
    {
        title: 'AL-FARU Megamall Website',
        desc: 'A premium, modern e-commerce platform for a large luxury retail mall.',
        tech: ['React', 'Spring Boot', 'MySQL'],
        image: 'assets/megamall.png',
        github: '#',
        live: '#'
    },
    {
        title: 'Event Ticket Booking System',
        desc: 'Real-time event ticket booking platform with interactive seating maps.',
        tech: ['Java', 'Spring Boot', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=800',
        github: '#',
        live: '#'
    },
    {
        title: 'Skills Craft Academy System',
        desc: 'Comprehensive learning management system for skill development and academy management.',
        tech: ['React', 'Node.js', 'PostgreSQL'],
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
        github: '#',
        live: '#'
    },
    {
        title: 'Kids Toys Online Store',
        desc: 'An interactive and playful e-commerce experience designed for an online toy store.',
        tech: ['HTML', 'CSS', 'JS'],
        image: 'https://images.unsplash.com/photo-1532330393533-443990a51d10?auto=format&fit=crop&q=80&w=800',
        github: '#',
        live: '#'
    },
    {
        title: 'Qurban Smart System',
        desc: 'Digital management platform for Qurban activities and distribution tracking.',
        tech: ['React', 'Firebase'],
        image: 'assets/qurban.png',
        github: '#',
        live: '#'
    },
    {
        title: 'IT Service Management System',
        desc: 'Streamlined ticketing and service management for IT teams.',
        tech: ['Spring Boot', 'React'],
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        github: '#',
        live: '#'
    },
    {
        title: 'Blood Donor Smart System',
        desc: 'Digital platform connecting blood donors with hospitals and urgent patient needs.',
        tech: ['React Native', 'Node.js'],
        image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=800',
        github: '#',
        live: '#'
    }
];

const timeline = [
    { year: '2023 - Present', title: 'SLIIT IT Undergraduate', desc: 'Specializing in software engineering and interactive systems. Maintaining high academic performance.' },
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
    // hideLoader(); // Removed as new loading screen handles this
    try {
        initIcons();
        initCursor();
        renderSkills();
        renderProjects();
        renderTimeline();
        initScrollAnimations();
        initParticles();
        initThemeToggle();
        initMagneticButtons();
        initScrollProgress();
        initNavbarScroll();
        initMobileMenu();
        initSkillFilters();
        initContactForm();
        initCVDownload();
        initSkillsModal();
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

    if (!cursor || !follower) return;

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
        gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.15 });
    });

    document.querySelectorAll('a, button, .skill-tag, .project-card, .magnetic, .filter-btn').forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.classList.add('cursor-grow');
            cursor.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            follower.classList.remove('cursor-grow');
            cursor.style.transform = 'scale(1)';
        });
    });
}

function renderSkills(filter = 'all') {
    const container = document.getElementById('skills-container');
    if (!container) return;

    const filteredSkills = filter === 'all' ? skills : skills.filter(s => s.category === filter);

    container.innerHTML = filteredSkills.map((skill, index) => `
                    <div class="skill-tag glass-card reveal-up cursor-pointer hover:scale-105" data-skill-index="${index}">
                        <iconify-icon icon="${skill.icon}" width="24" height="24" ${skill.color ? `style="color: ${skill.color}"` : ''}></iconify-icon>
                        <span>${skill.name}</span>
                    </div>
    `).join('');

    // Attach modal events
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const skillIndex = tag.getAttribute('data-skill-index');
            const skill = filteredSkills[skillIndex];
            openSkillModal(skill);
        });
    });

    if (typeof initScrollAnimations === 'function') {
        initScrollAnimations();
    }
}

function initSkillFilters() {
    const btns = document.querySelectorAll('.filter-btn');
    if (btns.length === 0) return;

    btns.forEach(btn => {
        btn.onclick = (e) => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter') || 'all';
            renderSkills(filterValue);
        };
    });
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

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

function initHeroAnimations() {
    // Split text animation for hero name
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle && !heroTitle.querySelector('.line-mask')) {
        heroTitle.innerHTML = heroTitle.innerHTML.split('<br>').map(line =>
            `<div class="line-mask"><div class="line-content">${line}</div></div>`
        ).join('');
    }

    const tl = gsap.timeline();

    tl.from('.line-content', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.2
    })
        .from('.reveal-text:not(.name)', {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out'
        }, '-=0.8')
        .from('.hero-btns .btn', {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)'
        }, '-=0.5')
        .from('.scroll-indicator', {
            opacity: 0,
            y: -20,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.2');
}

function initScrollAnimations() {
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
    const sunBtn = document.getElementById('theme-toggle-sun');
    const moonBtn = document.getElementById('theme-toggle-moon');

    if (!sunBtn || !moonBtn) return;

    const updateIcons = (theme) => {
        if (theme === 'dark') {
            sunBtn.style.display = 'flex';
            moonBtn.style.display = 'none';
        } else {
            sunBtn.style.display = 'none';
            moonBtn.style.display = 'flex';
        }
    };

    const handleToggle = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcons(newTheme);
    };

    sunBtn.addEventListener('click', handleToggle);
    moonBtn.addEventListener('click', handleToggle);

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateIcons(savedTheme);
}

// Skills Modal Logic
function openSkillModal(skill) {
    const modal = document.getElementById('skills-modal');
    const content = document.getElementById('skills-modal-content');
    const iconContainer = document.getElementById('modal-icon-container');
    const name = document.getElementById('modal-skill-name');
    const category = document.getElementById('modal-skill-category');
    const desc = document.getElementById('modal-skill-desc');

    iconContainer.innerHTML = `<iconify-icon icon="${skill.icon}" width="48" height="48" ${skill.color ? `style="color: ${skill.color}"` : ''}></iconify-icon>`;
    name.textContent = skill.name;
    category.textContent = skill.category;
    desc.textContent = skill.desc || `Proficient in ${skill.name} with hands-on experience in building modern applications.`;

    modal.classList.remove('opacity-0', 'pointer-events-none');
    content.classList.remove('scale-95');
    content.classList.add('scale-100');
}

function initSkillsModal() {
    const modal = document.getElementById('skills-modal');
    const content = document.getElementById('skills-modal-content');
    const closeBtn = document.getElementById('skills-modal-close');
    const overlay = modal.querySelector('.modal-overlay');

    const closeModal = () => {
        modal.classList.add('opacity-0', 'pointer-events-none');
        content.classList.remove('scale-100');
        content.classList.add('scale-95');
    };

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        const successMsg = document.getElementById('contact-success');

        btn.innerHTML = '<i data-lucide="loader" class="spin w-4 h-4"></i> Sending...';
        lucide.createIcons();

        // Simulate API call
        setTimeout(() => {
            btn.innerHTML = originalText;
            lucide.createIcons();
            form.reset();
            successMsg.classList.remove('hidden');
            successMsg.classList.add('flex');

            setTimeout(() => {
                successMsg.classList.add('hidden');
                successMsg.classList.remove('flex');
            }, 3000);
        }, 1500);
    });
}

// Loading Screen
const loader = document.getElementById('loader');
const loaderText = document.querySelector('.loader-text');
let count = 0;
const interval = setInterval(() => {
    count += Math.floor(Math.random() * 10) + 1;
    if (count >= 100) {
        count = 100;
        clearInterval(interval);
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                initHeroAnimations();
            }, 800);
        }, 500);
    }
    loaderText.textContent = count + '%';
}, 50);

function initMobileMenu() {
    const toggle = document.querySelector('.mobile-toggle');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-nav-links a');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }
}

function initCVDownload() {
    const downloadBtn = document.querySelector('a[download]');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            console.log('CV Download started...');
            const originalText = downloadBtn.innerHTML;
            downloadBtn.innerHTML = '<i data-lucide="check"></i> Downloading...';
            if (window.lucide) lucide.createIcons();

            setTimeout(() => {
                downloadBtn.innerHTML = originalText;
                if (window.lucide) lucide.createIcons();
            }, 3000);
        });
    }
}

