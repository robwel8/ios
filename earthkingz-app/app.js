// Earth Kingz Mobile App JavaScript

// Navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

function navigateTo(pageId, button) {
    showPage(pageId);

    // Update active nav item
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    navItems.forEach(item => {
        if (item === button) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Pricing Calculator
const pricingTiers = [
    { max: 999, rate: 4.00 },
    { max: 4999, rate: 3.50 },
    { max: 9999, rate: 3.00 },
    { max: 19999, rate: 2.50 },
    { max: 29999, rate: 2.00 },
    { max: Infinity, rate: 1.00 }
];

function getPricePerYard(yards) {
    for (let tier of pricingTiers) {
        if (yards <= tier.max) {
            return tier.rate;
        }
    }
    return 1.00; // Default to lowest rate
}

function calculatePrice() {
    const yardsInput = document.getElementById('calc-yards');
    const yards = parseInt(yardsInput.value);

    if (!yards || yards <= 0) {
        document.getElementById('calc-result').style.display = 'none';
        return;
    }

    const rate = getPricePerYard(yards);
    const total = yards * rate;
    const share = total / 2;

    document.getElementById('calc-total').textContent = '$' + total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('calc-share').textContent = '$' + share.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('calc-result').style.display = 'block';
}

// Request Form - Update estimate on yards input
const yardsNeededInput = document.getElementById('yards-needed');
if (yardsNeededInput) {
    yardsNeededInput.addEventListener('input', function() {
        const yards = parseInt(this.value);

        if (!yards || yards <= 0) {
            document.getElementById('estimate-preview').style.display = 'none';
            return;
        }

        const rate = getPricePerYard(yards);
        const total = yards * rate;
        const share = total / 2;

        document.getElementById('estimate-yards').textContent = yards.toLocaleString();
        document.getElementById('estimate-rate').textContent = '$' + rate.toFixed(2) + '/yard';
        document.getElementById('estimate-total').textContent = '$' + total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById('estimate-preview').style.display = 'block';
    });
}

// Form Submissions
function handleRequestSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = {
        type: 'request',
        jobId: document.getElementById('job-id').value,
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        yards: document.getElementById('yards-needed').value,
        materialType: document.getElementById('material-type').value,
        timeline: document.getElementById('timeline').value,
        notes: document.getElementById('notes').value
    };

    console.log('Fill Request Submitted:', formData);

    // In a real app, this would send data to a backend
    // For this mock, we'll just show a success message
    showSuccessModal();

    // Reset form
    event.target.reset();
    document.getElementById('estimate-preview').style.display = 'none';
}

function handleProvideSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = {
        type: 'provide',
        location: document.getElementById('provide-job-id').value,
        firstName: document.getElementById('provide-first-name').value,
        lastName: document.getElementById('provide-last-name').value,
        email: document.getElementById('provide-email').value,
        phone: document.getElementById('provide-phone').value,
        yards: document.getElementById('yards-available').value,
        materialType: document.getElementById('provide-material-type').value,
        availability: document.getElementById('provide-timeline').value,
        notes: document.getElementById('provide-notes').value
    };

    console.log('Fill Listing Submitted:', formData);

    // In a real app, this would send data to a backend
    // For this mock, we'll just show a success message
    showSuccessModal();

    // Reset form
    event.target.reset();
}

// Modal Functions
function showSuccessModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.add('active');

    // Auto-close after 3 seconds
    setTimeout(() => {
        closeModal();
    }, 3000);
}

function closeModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.remove('active');

    // Return to home page
    setTimeout(() => {
        showPage('home-page');
        const homeNavBtn = document.querySelector('.bottom-nav .nav-item');
        navigateTo('home-page', homeNavBtn);
    }, 300);
}

// Map Filters
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.dataset.filter;
        console.log('Filter changed to:', filter);

        // In a real app, this would filter the map markers
        // For this mock, we'll just update the console
    });
});

// Phone number formatting
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');

    if (value.length > 0) {
        if (value.length <= 3) {
            value = `(${value}`;
        } else if (value.length <= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
    }

    input.value = value;
}

// Apply phone formatting to all phone inputs
const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
    input.addEventListener('input', function() {
        formatPhoneNumber(this);
    });
});

// Handle back button on mobile browsers
window.addEventListener('popstate', function(event) {
    // Handle browser back button
    const activePage = document.querySelector('.page.active');
    if (activePage && activePage.id !== 'home-page') {
        showPage('home-page');
    }
});

// Prevent body scroll when modal is open
const modal = document.getElementById('success-modal');
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'class') {
            if (modal.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    });
});

if (modal) {
    observer.observe(modal, { attributes: true });
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    console.log('Earth Kingz App Initialized');

    // Show home page by default
    showPage('home-page');

    // Check if running as PWA
    if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('Running as PWA');
    }

    // Add touch feedback for better mobile experience
    const buttons = document.querySelectorAll('button, .action-card, .menu-item');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.opacity = '0.7';
        });
        button.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
});

// Service Worker Registration (for PWA functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when you want to add offline support
        // navigator.serviceWorker.register('/sw.js').then(function(registration) {
        //     console.log('ServiceWorker registration successful');
        // }, function(err) {
        //     console.log('ServiceWorker registration failed: ', err);
        // });
    });
}

// Handle offline/online status
window.addEventListener('online', function() {
    console.log('App is online');
});

window.addEventListener('offline', function() {
    console.log('App is offline');
});

// Simulate real-time updates (in a real app, this would use WebSockets or polling)
function simulateRealTimeUpdates() {
    // This would fetch new requests and listings from the server
    console.log('Checking for new opportunities...');
}

// Check for updates every 30 seconds when map page is active
setInterval(function() {
    const mapPage = document.getElementById('map-page');
    if (mapPage && mapPage.classList.contains('active')) {
        simulateRealTimeUpdates();
    }
}, 30000);

// Export functions for use in HTML onclick handlers
window.showPage = showPage;
window.navigateTo = navigateTo;
window.calculatePrice = calculatePrice;
window.handleRequestSubmit = handleRequestSubmit;
window.handleProvideSubmit = handleProvideSubmit;
window.closeModal = closeModal;
