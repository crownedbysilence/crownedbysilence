// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        navLinks.classList.remove('active');
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Fixed navigation on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '0.5rem 0';
        nav.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
    } else {
        nav.style.padding = '1rem 0';
        nav.style.backgroundColor = 'rgba(18, 18, 18, 0.8)';
    }
});

// Modal Functionality for Gumroad Integration
const modal = document.getElementById('purchaseModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const gumroadContainer = document.getElementById('gumroad-container');
const closeModalBtn = document.querySelector('.close-modal');
const buyButtons = document.querySelectorAll('.buy-btn');

// Sample product data - Replace with your actual Gumroad product data
const products = [
    {
        id: 1,
        title: "Artwork Title",
        description: "This stunning piece combines vibrant colors and abstract forms to create a unique visual experience. Created using digital painting techniques.<br><br>Available as a limited edition print.",
        image: "images/portfolio-1.jpg",
        gumroadId: "YOUR_GUMROAD_PRODUCT_ID_1"
    },
    {
        id: 2,
        title: "Ethereal Dreams",
        description: "A dreamy landscape that evokes a sense of calm and wonder. This piece features soft pastel colors and flowing forms.<br><br>Available as a limited edition print.",
        image: "images/portfolio-2.jpg",
        gumroadId: "YOUR_GUMROAD_PRODUCT_ID_2"
    },
    {
        id: 3,
        title: "Urban Reflections",
        description: "An exploration of city life through abstract forms and reflective surfaces. This digital art piece captures the energy of urban environments.<br><br>Available as a limited edition print.",
        image: "images/portfolio-3.jpg",
        gumroadId: "YOUR_GUMROAD_PRODUCT_ID_3"
    },
    {
        id: 4,
        title: "Cosmic Journey",
        description: "An illustration depicting the vast wonders of space exploration. Features a rich color palette and intricate details.<br><br>Available as a limited edition print.",
        image: "images/portfolio-4.jpg",
        gumroadId: "YOUR_GUMROAD_PRODUCT_ID_4"
    },
    {
        id: 5,
        title: "Natural Harmony",
        description: "A digital painting celebrating the beauty of nature. Features organic shapes and a harmonious color palette.<br><br>Available as a limited edition print.",
        image: "images/portfolio-5.jpg",
        gumroadId: "YOUR_GUMROAD_PRODUCT_ID_5"
    },
    {
        id: 6,
        title: "Abstract Emotions",
        description: "A mixed media piece exploring human emotions through abstract forms and vibrant colors.<br><br>Available as a limited edition print.",
        image: "images/portfolio-6.jpg",
        gumroadId: "YOUR_GUMROAD_PRODUCT_ID_6"
    }
];

// Open modal with product details and load Gumroad embed
buyButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const productItem = btn.closest('.portfolio-item');
        const productId = productItem.dataset.id;
        const product = products.find(p => p.id == productId);
        
        modalImage.src = product.image;
        modalTitle.textContent = product.title;
        modalDescription.innerHTML = product.description;
        
        // Load Gumroad embed
        loadGumroadEmbed(product.gumroadId);
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

// Function to load Gumroad embed
function loadGumroadEmbed(gumroadId) {
    // Clear previous embed
    gumroadContainer.innerHTML = '';
    
    // Create Gumroad embed
    const gumroadScript = document.createElement('script');
    gumroadScript.src = 'https://gumroad.com/js/gumroad.js';
    gumroadScript.async = true;
    
    const gumroadLink = document.createElement('a');
    gumroadLink.href = `https://gumroad.com/l/${gumroadId}`;
    gumroadLink.className = 'gumroad-button';
    gumroadLink.textContent = 'Buy Now';
    
    gumroadContainer.appendChild(gumroadScript);
    gumroadContainer.appendChild(gumroadLink);
}

// Close modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Contact form submission (Zoho Mail integration)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Set up the data to send to your server for email forwarding
    const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };
    
    // Replace with the URL of your email handling script
    const emailHandlerUrl = 'YOUR_EMAIL_HANDLER_URL';
    
    // Send the data to your server
    fetch(emailHandlerUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your message. We will get back to you soon!');
            this.reset();
        } else {
            alert('There was an error sending your message. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
    });
});