import re

html_content = open('d:/SLIIT/SLIIT (Y2_S2)/asadhhasan-portfolio/index.html', 'r', encoding='utf-8').read()

projects = [
    {
        'title': 'Voice Assist Home Automation System With IoT Module',
        'img': 'https://images.pexels.com/photos/13360670/pexels-photo-13360670.jpeg?auto=compress&cs=tinysrgb&w=600',
        'desc': 'An intelligent home automation system featuring IoT integration and voice assistance for seamless control of smart devices.',
        'tech': ['React', 'Node.js', 'IoT', 'Python']
    },
    {
        'title': 'AL - FARU Megamall',
        'img': 'https://images.pexels.com/photos/3584991/pexels-photo-3584991.jpeg?auto=compress&cs=tinysrgb&w=600',
        'desc': 'A comprehensive e-commerce platform for a megamall featuring product catalogs, shopping cart, and seamless user experience.',
        'tech': ['React', 'Node.js', 'MongoDB', 'CSS']
    },
    {
        'title': 'Kid Toys',
        'img': 'https://images.pexels.com/photos/163036/mother-daughter-happy-family-portrait-163036.jpeg?auto=compress&cs=tinysrgb&w=600',
        'desc': 'Playful and colorful e-commerce site for children\'s toys with age-based filtering and interactive product showcase.',
        'tech': ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
        'title': 'Event Ticket Booking',
        'img': 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
        'desc': 'Full-stack ticket booking platform with real-time seat selection, payment integration, and event management dashboard.',
        'tech': ['Java', 'Spring Boot', 'MySQL', 'React']
    },
    {
        'title': 'Online Book Management System',
        'img': 'https://images.pexels.com/photos/137024/pexels-photo-137024.jpeg?auto=compress&cs=tinysrgb&w=600',
        'desc': 'A digital library platform allowing users to browse, borrow, and manage book collections with an intuitive admin dashboard.',
        'tech': ['React', 'Java', 'Spring Boot', 'MySQL']
    },
    {
        'title': 'IT Service Management System',
        'img': 'https://images.pexels.com/photos/3252298/pexels-photo-3252298.jpeg?auto=compress&cs=tinysrgb&w=600',
        'desc': 'Enterprise IT service management platform with ticketing, asset tracking, and SLA monitoring capabilities.',
        'tech': ['React', 'Java', 'MySQL', 'CSS']
    },
    {
        'title': 'Blood Bank Management System',
        'img': 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=600',
        'desc': 'Life-saving blood bank management system with donor registration, inventory tracking, and hospital coordination.',
        'tech': ['Java', 'Spring Boot', 'MySQL', 'React']
    }
]

grid_inner = ''
for i, proj in enumerate(projects):
    tech_spans = ''.join([f'<span class=\"text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5\">{t}</span>' for t in proj['tech']])
    card = f'''<div class=\"reveal-scale glass rounded-2xl overflow-hidden card-hover group active\" style=\"transition-delay: {i*100}ms;\"><div class=\"relative h-48 overflow-hidden\"><img src=\"{proj['img']}\" alt=\"{proj['title']}\" class=\"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110\" loading=\"lazy\"><div class=\"absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent\"></div><div class=\"absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300\"><a href=\"#\" class=\"flex items-center gap-1.5 bg-cyan-500/90 hover:bg-cyan-500 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-external-link w-3 h-3\"><path d=\"M15 3h6v6\"></path><path d=\"M10 14 21 3\"></path><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path></svg>Live</a><a href=\"#\" class=\"flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-github w-3 h-3\"><path d=\"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4\"></path><path d=\"M9 18c-4.51 2-5-2-7-2\"></path></svg>Code</a></div></div><div class=\"p-5\"><h3 class=\"font-display font-bold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors\">{proj['title']}</h3><p class=\"text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2\">{proj['desc']}</p><div class=\"flex flex-wrap gap-2\">{tech_spans}</div></div></div>'''
    grid_inner += card

new_line = f'<div class=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"><div class=\"text-center mb-16 reveal active\"><p class=\"text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4\">My work</p><h2 class=\"section-title text-white\">Featured Projects</h2></div><div class=\"grid md:grid-cols-2 lg:grid-cols-3 gap-6\">{grid_inner}</div></div></div>'

pattern = r'<div class=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"><div class=\"text-center mb-16 reveal active\"><p class=\"text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4\">My work</p><h2 class=\"section-title text-white\">Featured Projects</h2></div><div class=\"grid md:grid-cols-2 lg:grid-cols-3 gap-6\">.*?</div></div></div>'

new_html = re.sub(pattern, new_line, html_content)
open('d:/SLIIT/SLIIT (Y2_S2)/asadhhasan-portfolio/index.html', 'w', encoding='utf-8').write(new_html)
