
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    initializePremiumFeatures();
    initializeTypingAnimation();
    initializeSkillsAnimation();
    initializeTechnologiesFilter();
    initializeMouseTrail();
    initializeAOS();
});

// ===== MOBILE MENU =====
function initializeMobileMenu() {
    const hamburgerBtn = document.getElementById('menu-btn');
    const mobileNav = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('#mobile-menu a');

    if (hamburgerBtn && mobileNav) {
        // Toggle mobile menu
        hamburgerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            mobileNav.classList.toggle('hidden');
            
            // Change icon from bars to X
            const icon = this.querySelector('i');
            if (mobileNav.classList.contains('hidden')) {
                icon.className = 'fas fa-bars text-xl';
            } else {
                icon.className = 'fas fa-times text-xl';
            }
            
            // Prevent body scroll when menu is open
            if (!mobileNav.classList.contains('hidden')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking on links
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerBtn.classList.remove('active');
                mobileNav.classList.add('hidden');
                const icon = hamburgerBtn.querySelector('i');
                icon.className = 'fas fa-bars text-xl';
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileNav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                hamburgerBtn.classList.remove('active');
                mobileNav.classList.add('hidden');
                const icon = hamburgerBtn.querySelector('i');
                icon.className = 'fas fa-bars text-xl';
                document.body.style.overflow = '';
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hamburgerBtn.classList.remove('active');
                mobileNav.classList.add('hidden');
                const icon = hamburgerBtn.querySelector('i');
                icon.className = 'fas fa-bars text-xl';
                document.body.style.overflow = '';
            }
        });
    }
}
// ===== STYLISH LOADING SCREEN =====

// ===== PREMIUM FEATURES =====
function initializePremiumFeatures() {
    setupThemeToggle();
    setupScrollProgress();
    setupFloatingNav();
    setupNavigation();
    createParticles();
    setupHeaderScroll();
}

function setupHeaderScroll() {
    const header = document.querySelector('.glass-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

function createParticles() {
    const particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) return;

    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = Math.random() * 3 + 3 + 's';
        particlesContainer.appendChild(particle);
    }
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            if (icon.classList.contains('fa-moon')) {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 400);
    });
}

function setupScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

function setupFloatingNav() {
    const floatingNav = document.getElementById('floating-nav');
    if (!floatingNav) return;

    const navItems = floatingNav.querySelectorAll('.nav-item');
    navItems.forEach((item) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            scrollToSection(section);
            navItems.forEach((nav) => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    window.addEventListener('scroll', updateFloatingNav);
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach((l) => l.classList.remove('active'));
            this.classList.add('active');
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    window.addEventListener('scroll', updateActiveNav);
}

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function updateFloatingNav() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    navItems.forEach((item) => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === current) {
            item.classList.add('active');
        }
    });
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

// ===== TYPING ANIMATION =====
function initializeTypingAnimation() {
    const typedRole = document.getElementById("typed-role");
    if (!typedRole) return;

    const roles = [
        "Web Developer",
        "Web Penetration tester",
        "Wordpress Developer",
        "WebFlow Expert",
        "Cyber Security Specialist",
        "Laravel Expert"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
        const current = roles[roleIndex];
        if (!deleting) {
            typedRole.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                deleting = true;
                setTimeout(type, 1500);
                return;
            }
        } else {
            if (charIndex > 0) {
                typedRole.textContent = current.substring(0, charIndex - 1);
            }
            charIndex--;
            if (charIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }
        setTimeout(type, deleting ? 60 : 120);
    }

    type();
}

// ===== SKILLS ANIMATION =====
function initializeSkillsAnimation() {
    const skillSection = document.getElementById('skills');
    const skillLines = document.querySelectorAll('.skill-line');
    let animated = false;

    function animateSkills() {
        if (animated) return;

        const sectionTop = skillSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {
            skillLines.forEach((line, index) => {
                setTimeout(() => {
                    const bar = line.querySelector('.skill-bar');
                    const width = line.getAttribute('data-width');
                    const color = line.getAttribute('data-color');

                    bar.className = `skill-bar h-3 w-0 rounded-full bg-gradient-to-r ${color}`;
                    bar.style.transition = 'width 2s ease-in-out';
                    bar.style.width = width;
                }, index * 500);
            });
            animated = true;
        }
    }

    window.addEventListener('scroll', animateSkills);
    animateSkills();
}

// ===== TECHNOLOGIES FILTER =====
function initializeTechnologiesFilter() {
    let currentFilter = 'all';
    let currentSearch = '';

    window.filterTechnologies = function(category) {
        currentFilter = category;
        const techItems = document.querySelectorAll('.tech-item');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const mobileFilter = document.getElementById('mobile-filter');

        // Update desktop buttons
        filterBtns.forEach(btn => {
            btn.classList.remove('active', 'text-white', 'border', 'border-gray-500/50');
            btn.classList.add('text-gray-300');
            
            // Reset gradient backgrounds
            btn.classList.remove('from-blue-600', 'to-blue-700', 'from-green-600', 'to-green-700', 'from-purple-600', 'to-purple-700', 'from-yellow-600', 'to-yellow-700', 'from-red-600', 'to-red-700');
            btn.classList.add('from-gray-700', 'to-gray-800');
        });

        // Update mobile dropdown
        if (mobileFilter) {
            mobileFilter.value = category;
        }

        // Highlight active button
        if (event && event.currentTarget.classList.contains('filter-btn')) {
            const clickedButton = event.currentTarget;
            clickedButton.classList.add('active', 'text-white', 'border', 'border-gray-500/50');
            clickedButton.classList.remove('text-gray-300');
            
            // Add specific gradient for active state
            if (category === 'frontend') {
                clickedButton.classList.add('from-blue-600', 'to-blue-700');
            } else if (category === 'backend') {
                clickedButton.classList.add('from-green-600', 'to-green-700');
            } else if (category === 'mobile') {
                clickedButton.classList.add('from-purple-600', 'to-purple-700');
            } else if (category === 'db') {
                clickedButton.classList.add('from-yellow-600', 'to-yellow-700');
            } else if (category === 'tools') {
                clickedButton.classList.add('from-red-600', 'to-red-700');
            }
        }

        // Apply both filter and search
        applyFilters();
    }

    window.searchTechnologies = function() {
        currentSearch = document.getElementById('tech-search').value.toLowerCase();
        applyFilters();
    }

    function applyFilters() {
        const techItems = document.querySelectorAll('.tech-item');

        techItems.forEach(item => {
            const techName = item.querySelector('h4').textContent.toLowerCase();
            const category = item.dataset.category;

            const matchesFilter = currentFilter === 'all' || category === currentFilter;
            const matchesSearch = currentSearch === '' || techName.includes(currentSearch);

            if (matchesFilter && matchesSearch) {
                item.style.display = 'block';
                // Add animation when showing
                item.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Add search event listener
    const searchInput = document.getElementById('tech-search');
    if (searchInput) {
        searchInput.addEventListener('input', window.searchTechnologies);
    }
    
    // Initialize with all technologies visible
    applyFilters();
}



// ===== AOS INITIALIZATION =====
function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false
        });
    }
}
