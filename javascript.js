// =========================================
// DATA & STATE
// =========================================
const projectsData = [
    {
        title: "Personal Portfolio Website",
        desc: "A fully responsive personal portfolio website to showcase my skills, projects, and blog.",
        tags: ["HTML", "CSS", "JavaScript"],
        image: "img/projects/project-1.jpg"
    },
    {
        title: "Quality Management Dashboard",
        desc: "A comprehensive dashboard for managing quality control processes and analytics.",
        tags: ["Firebase", "SEO", "Web App"],
        image: "img/projects/project-2.jpg"
    },
    {
        title: "Digital Marketing Projects",
        desc: "Successful SEO and Social Media Marketing campaigns for various clients.",
        tags: ["Social Media Marketing", "SEO"],
        image: "img/projects/project-3.jpg"
    }
];

const blogData = [
    {
        id: 1,
        title: "জীবনের ব্যস্ততায় একটু নিজের জন্য",
        category: "লাইফস্টাইল",
        date: "১৫ অক্টোবর, ২০২৩",
        desc: "প্রতিদিনের ব্যস্ততার মাঝে আমরা প্রায়ই নিজেদের সময় দিতে ভুলে যাই। নিজের জন্য সময় বের করা কেন জরুরি, তা নিয়ে কিছু কথা...",
        fullContent: `প্রতিদিনের ব্যস্ততার মাঝে আমরা প্রায়ই নিজেদের সময় দিতে ভুলে যাই। সকালে ঘুম থেকে উঠে অফিস, পড়াশোনা বা কাজের চাপে দিনশেষে আমরা ক্লান্ত হয়ে পড়ি। কিন্তু এই ব্যস্ততার মাঝেও নিজের জন্য একটু সময় বের করা অত্যন্ত জরুরি।

        নিজের জন্য সময় দেওয়ার মানে এই নয় যে আপনি সব কাজ ফেলে রেখে শুধু আরাম করবেন। বরং নিজের মনকে শান্ত রাখার জন্য, নিজের শখগুলো পূরণ করার জন্য কিছুটা সময় আলাদা করে রাখা। এটি হতে পারে একটি ভালো বই পড়া, পছন্দের গান শোনা, বা কেবল প্রকৃতির মাঝে কিছুক্ষণ হাঁটা।

        মনোবিজ্ঞানীরা বলছেন, যারা নিয়মিত নিজের জন্য সময় বের করেন, তারা মানসিকভাবে বেশি সুস্থ থাকেন এবং কাজেও বেশি উৎপাদনশীল হন। তাই আজ থেকেই প্রতিদিন অন্তত ৩০ মিনিট নিজের জন্য রাখার চেষ্টা করুন।`,
        image: "img/blogs/blog-1.jpg"
    },
    {
        id: 2,
        title: "বন্ধুত্ব ও জীবনের সুন্দর মুহূর্ত",
        category: "সম্পর্ক",
        date: "২০ অক্টোবর, ২০২৩",
        desc: "বন্ধুত্ব জীবনের এক অমূল্য সম্পদ। ভালো বন্ধুরা জীবনের কঠিন সময়ে পাশে দাঁড়ায় এবং সুন্দর মুহূর্তগুলোকে আরও রঙিন করে তোলে...",
        fullContent: `বন্ধুত্ব জীবনের এক অমূল্য সম্পদ। ভালো বন্ধুরা জীবনের কঠিন সময়ে পাশে দাঁড়ায় এবং সুন্দর মুহূর্তগুলোকে আরও রঙিন করে তোলে। সত্যিকারের বন্ধুত্বের কোনো বয়স বা সীমা নেই।

        আমাদের জীবনে এমন কিছু মানুষ থাকে যাদের সাথে আমরা সবকিছু শেয়ার করতে পারি, কোনো দ্বিধা ছাড়াই। তারা আমাদের সাফল্যে খুশি হয় এবং ব্যর্থতায় সাহস জোগায়। ফুটবল মাঠ থেকে শুরু করে জীবনের নানা পরীক্ষায়, বন্ধুদের ভূমিকা অসাধারণ।

        এই সুন্দর মুহূর্তগুলোই আমাদের জীবনের গল্প হয়ে থাকে। তাই বন্ধুদের সাথে কাটানো প্রতিটি মুহূর্তকে উপভোগ করুন এবং তাদের মূল্য দিন।`,
        image: "img/blogs/blog-2.jpg"
    },
    {
        id: 3,
        title: "হার-জিত নয়, চেষ্টা করাটাই বড়",
        category: "অনুপ্রেরণা",
        date: "২৫ অক্টোবর, ২০২৩",
        desc: "জীবনে সফলতা এবং ব্যর্থতা দুটোই আছে। কিন্তু আসল ব্যাপার হলো চেষ্টা করা। হার-জিতের চেয়ে চেষ্টা করাটাই বেশি গুরুত্বপূর্ণ...",
        fullContent: `জীবনে সফলতা এবং ব্যর্থতা দুটোই আছে। কিন্তু আসল ব্যাপার হলো চেষ্টা করা। হার-জিতের চেয়ে চেষ্টা করাটাই বেশি গুরুত্বপূর্ণ। অনেক সময় আমরা ব্যর্থতার ভয়ে চেষ্টা করাই বন্ধ করে দিই, যা মোটেও ঠিক নয়।

        প্রতিটি ব্যর্থতা আমাদের নতুন কিছু শেখায়। সফল ব্যক্তিদের জীবনী পড়লে দেখবেন, তারাও বহুবার ব্যর্থ হয়েছেন। কিন্তু তারা হাল ছাড়েননি। চেষ্টা চালিয়ে গেছেন বলেই আজ সফল।

        তাই নিজের ওপর বিশ্বাস রাখুন। ফলাফল নিয়ে চিন্তা না করে নিজের সর্বোচ্চটা দিয়ে চেষ্টা করুন। মনে রাখবেন, চেষ্টার কোনো বিকল্প নেই।`,
        image: "img/blogs/blog-3.jpg"
    }
];

// =========================================
// NAVIGATION LOGIC (SPA)
// =========================================
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navLinks');

function navigateTo(targetId) {
    pages.forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(targetId.replace('#', ''));
    if (targetPage) targetPage.classList.add('active');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });

    navMenu.classList.remove('active');
    window.scrollTo(0, 0);
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        navigateTo(targetId);
    });
});

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// =========================================
// RENDER PROJECTS
// =========================================
function renderProjects() {
    const container = document.getElementById('projectsContainer');
    container.innerHTML = '';

    projectsData.forEach(project => {
        const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const imageHTML = project.image
            ? `<img src="${project.image}" alt="${project.title}" onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\\'fas fa-laptop-code fa-3x\\'></i>';">`
            : `<i class="fas fa-laptop-code fa-3x"></i>`;

        const card = `
            <div class="project-card">
                <div class="project-img">${imageHTML}</div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.desc}</p>
                    <div class="tags">${tagsHTML}</div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// =========================================
// RENDER BLOG
// =========================================
function renderBlog() {
    const container = document.getElementById('blogContainer');
    container.innerHTML = '';

    blogData.forEach(article => {
        const card = `
            <div class="blog-card">
                <div class="blog-img">
                    <img src="${article.image}" alt="${article.title}" onerror="this.src='https://via.placeholder.com/600x400/1e293b/3b82f6?text=Image+Not+Found'">
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span>${article.category}</span>
                        <span>${article.date}</span>
                    </div>
                    <h3>${article.title}</h3>
                    <p>${article.desc}</p>
                    <span class="read-more" onclick="openBlogModal(${article.id})">
                        Read More <i class="fas fa-arrow-right"></i>
                    </span>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// =========================================
// BLOG MODAL LOGIC
// =========================================
const modal = document.getElementById('blogModal');
const closeModalBtn = document.getElementById('closeModal');

window.openBlogModal = function (id) {
    const article = blogData.find(a => a.id === id);
    if (article) {
        document.getElementById('modalTitle').innerText = article.title;
        document.getElementById('modalCategory').innerText = article.category;
        document.getElementById('modalDate').innerText = article.date;
        document.getElementById('modalBody').innerText = article.fullContent;
        modal.style.display = 'flex';
    }
};

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// =========================================
// CONTACT FORM LOGIC (Firebase Integration)
// =========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    if (window.firebaseDB && window.firestoreFunctions) {
        try {
            const { collection, addDoc } = window.firestoreFunctions;
            await addDoc(collection(window.firebaseDB, "contactMessages"), {
                name: name,
                email: email,
                subject: subject,
                message: message,
                timestamp: new Date()
            });

            alert("✅ Message sent successfully via Firebase!");
            contactForm.reset();
        } catch (error) {
            console.error("Error sending message: ", error);
            alert("❌ Failed to send message. Please try again later.");
        }
    } else {
        console.log("Mock submission:", { name, email, subject, message });
        setTimeout(() => {
            alert("✅ Message sent successfully! (Demo Mode - Firebase not configured)");
            contactForm.reset();
        }, 1000);
    }

    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
});

// =========================================
// INITIALIZATION
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderBlog();
});
