// =========================
// PORTFOLIO SCRIPT 2026
// Bilal Al Rahbi
// =========================

// =========================
// TRANSLATIONS
// =========================
const translations = {
    en: {
        "nav-about": "About",
        "nav-education": "Education",
        "nav-experience": "Internship",
        "nav-project": "Project",
        "nav-skills": "Skills",
        "nav-certs": "Certifications",
        "nav-resume": "Documents",
        "nav-contact": "Contact",
        "hero-badge": "Communications & Signal Processing Engineer",
        "hero-title": "Bilal Muslem Al Rahbi",
        "hero-subtitle": "Communications & Signal Processing Engineering Graduate",
        "hero-description": "Passionate about Artificial Intelligence, Digital Signal Processing, Wireless Communications, Embedded Systems, and solving real-world engineering challenges through innovative technologies.",
        "contact-btn": "Contact Me",
        "resume-btn": "Download CV",
        "about-title": "About Me",
        "about-text": "Communications & Signal Processing Engineer with strong academic and practical experience in Digital Signal Processing, Wireless Communications, Optical Networks, Artificial Intelligence and Embedded Systems. Passionate about innovation, technology and continuous learning.",
        "education-title": "Education",
        "edu-university": "Sultan Qaboos University",
        "edu-degree": "Bachelor of Communications & Signal Processing Engineering",
        "experience-title": "Professional Internship",
        "intern-role": "Communications & Signal Processing Intern",
        "intern-company": "Ibra Hospital",
        "intern-1": "Maintenance and troubleshooting of UPS systems.",
        "intern-2": "Structured cabling installation and testing.",
        "intern-3": "Support of DECT and nurse call systems.",
        "intern-4": "Access control systems maintenance and configuration.",
        "project-title": "Final Year Project",
        "project-name": "Speaker Identification System",
        "project-desc": "Developed an intelligent speaker identification system using ANN, GMM, MFCC and MATLAB GUI for real-time speaker recognition.",
        "gallery-title": "System GUI & Signals Interface",
        "skills-title": "Skills",
        "certifications-title": "Professional Certifications",
        "cert1-title": "Introduction to Electrical Distribution System",
        "cert2-title": "PLC Basics Workshop",
        "cert-view": "Download Certificate",
        "btn-preview": "Preview",
        "btn-download": "Download",
        "documents-title": "Documents",
        "resume-card-title": "Download My Professional CV",
        "transcript-card-title": "Download Academic Transcript",
        "download-cv-btn": "Download PDF",
        "download-transcript-btn": "Download PDF",
        "preview-cv-btn": "Preview 👁️",
        "preview-transcript-btn": "Preview 👁️",
        "contact-title": "Let's Build Something Great Together"
    },
    ar: {
        "nav-about": "من أنا",
        "nav-education": "التعليم",
        "nav-experience": "التدريب",
        "nav-project": "المشروع",
        "nav-skills": "المهارات",
        "nav-certs": "الشهادات",
        "nav-resume": "الوثائق",
        "nav-contact": "تواصل",
        "hero-badge": "مهندس اتصالات ومعالجة إشارات",
        "hero-title": "بلال بن مسلم الرحبي",
        "hero-subtitle": "خريج هندسة الإلكترونيات والاتصالات",
        "hero-description": "شغوف بالذكاء الاصطناعي ومعالجة الإشارات الرقمية والاتصالات اللاسلكية والأنظمة المدمجة وتطوير حلول هندسية مبتكرة للمشكلات الواقعية.",
        "contact-btn": "تواصل معي",
        "resume-btn": "تحميل السيرة الذاتية",
        "about-title": "من أنا",
        "about-text": "مهندس اتصالات ومعالجة إشارات يمتلك خلفية أكاديمية وعملية في معالجة الإشارات الرقمية والاتصالات اللاسلكية والشبكات الضوئية والذكاء الاصطناعي والأنظمة المدمجة. شغوف بالابتكار والتقنيات الحديثة والتعلم المستمر.",
        "education-title": "التعليم",
        "edu-university": "جامعة السلطان قابوس",
        "edu-degree": "بكالوريوس هندسة الإلكترونيات والاتصالات",
        "experience-title": "التدريب المهني",
        "intern-role": "متدرب هندسة اتصالات ومعالجة إشارات",
        "intern-company": "مستشفى إبراء",
        "intern-1": "فحص وصيانة أنظمة UPS.",
        "intern-2": "تركيب واختبار شبكات الكابلات المنظمة.",
        "intern-3": "دعم أنظمة DECT ونداء الممرضات.",
        "intern-4": "صيانة وإعداد أنظمة التحكم بالدخول.",
        "project-title": "مشروع التخرج",
        "project-name": "نظام التعرف على هوية المتحدث",
        "project-desc": "تطوير نظام ذكي للتعرف على هوية المتحدث باستخدام ANN و GMM و MFCC وواجهة MATLAB GUI.",
        "gallery-title": "واجهة النظام الرسومية وتحليل الإشارات",
        "skills-title": "المهارات",
        "certifications-title": "الشهادات المهنية",
        "cert1-title": "مقدمة في منظومة توزيع الكهرباء",
        "cert2-title": "ورشة أساسيات التحكم المنطقي المبرمج (PLC)",
        "btn-preview": "معاينة",
        "btn-download": "تحميل",
        "documents-title": "الوثائق والأوراق",
        "resume-card-title": "تحميل السيرة الذاتية الاحترافية",
        "transcript-card-title": "تحميل كشف الدرجات الأكاديمي",
        "download-cv-btn": "تحميل PDF",
        "download-transcript-btn": "تحميل PDF",
        "preview-cv-btn": "معاينة 👁️",
        "preview-transcript-btn": "معاينة 👁️",
        "contact-title": "لنصنع شيئاً رائعاً معاً"
    }
};

// =========================
// LANGUAGE SYSTEM
// =========================
const langBtn = document.getElementById("lang-btn");
let currentLang = localStorage.getItem("language") || "en";

function setLanguage(lang){
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        if(translations[lang][key]){
            element.innerHTML = translations[lang][key];
        }
    });

    langBtn.textContent = lang === "en" ? "العربية" : "English";
    localStorage.setItem("language", lang);
}

setLanguage(currentLang);

langBtn.addEventListener("click", () => {
    setLanguage(currentLang === "en" ? "ar" : "en");
});

// =========================
// DARK MODE
// =========================
const modeBtn = document.getElementById("mode-btn");
const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.body.classList.add("dark-mode");
    modeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    modeBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// =========================
// BACK TO TOP & SCROLL PROGRESS 📈
// =========================
const topBtn = document.getElementById("topBtn");
const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
    // 1. Back to top button logic
    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

    // 2. Scroll Progress Bar calculation
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top:0, behavior:"smooth" });
});

// =========================
// SCROLL REVEAL
// =========================
const revealElements = document.querySelectorAll(
".section, .card, .skill-card, .project-card, .project-gallery-card, .resume-card, .cert-card"
);

const observer = new IntersectionObserver(
    (entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.style.opacity="1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    { threshold:0.15 }
);

revealElements.forEach(element=>{
    element.style.opacity="0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";
    observer.observe(element);
});

// =========================
// ACTIVE NAV LINK
// =========================
const sections = document.querySelectorAll("section, footer");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});

// =========================
// FOOTER YEAR AUTO UPDATE
// =========================
const copyright = document.querySelector(".copyright");
if(copyright){
    copyright.innerHTML = `© ${new Date().getFullYear()} Bilal Al Rahbi. All Rights Reserved.`;
}

console.log("Bilal Portfolio Loaded Successfully with 2026 UI/UX Enhancements!");