// Google Analytics Configuration
const GOOGLE_ANALYTICS_ID = 'G-107HFGTW23';
function loadGoogleAnalytics(trackingId) {
    if (!trackingId || trackingId === 'G-XXXXXXXXXX') {
        console.warn('Google Analytics ID not set. Please update GOOGLE_ANALYTICS_ID in header.js');
        return;
    }

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);
    const script2 = document.createElement('script');
    script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${trackingId}');
    `;
    document.head.appendChild(script2);
}
loadGoogleAnalytics(GOOGLE_ANALYTICS_ID);

// Header navigation configuration
const navConfig = {
    items: [
        { text: 'about', href: 'index.html' },
        { text: 'projects', href: 'projects/index.html' },
        { text: 'research', href: 'research/index.html' },
        { text: 'patents', href: 'patents/index.html' },
        { text: 'cv', href: 'cv/cv.html' }
    ]
};

// Get the base URL from the script tag itself (assuming header.js is in the root)
// This is more robust than analyzing window.location for local files
const scriptTag = document.currentScript;
const scriptSrc = scriptTag.src;
const baseUrl = scriptSrc.substring(0, scriptSrc.lastIndexOf('/') + 1);

// Determine which nav item should be active based on relative path
function getActiveItem() {
    let currentUrl = window.location.href;
    // Strip query params and hash
    currentUrl = currentUrl.split('?')[0].split('#')[0];

    // If we can't determine relation to base URL, default to about
    if (!currentUrl.startsWith(baseUrl)) {
        return 'about';
    }

    const relativePath = currentUrl.substring(baseUrl.length);
    const segments = relativePath.split('/').filter(s => s.length > 0);

    // Handle root
    if (segments.length === 0 || (segments.length === 1 && segments[0] === 'index.html')) {
        return 'about';
    }

    // Handle specific files
    if (segments.length > 0 && segments[segments.length - 1] === 'cv.html') {
        return 'cv';
    }

    // Handle directories
    // The first segment should match the directory of the nav item
    const firstSegment = segments[0];
    for (const item of navConfig.items) {
        if (item.href.startsWith(firstSegment + '/')) {
            return item.text;
        }
    }

    return 'about';
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const navContainer = document.getElementById('top-nav');
    if (!navContainer) return;

    const activeItem = getActiveItem();

    // Build navigation HTML
    navContainer.innerHTML = '';
    navConfig.items.forEach((item, index) => {
        const a = document.createElement('a');

        // Use absolute URL based on the script location for internal links
        if (item.href.startsWith('http')) {
            a.href = item.href;
        } else {
            a.href = baseUrl + item.href;
        }

        a.textContent = item.text;

        if (item.text === activeItem) {
            a.classList.add('active');
        }

        navContainer.appendChild(a);

        // Add separator (except for last item)
        if (index < navConfig.items.length - 1) {
            const separator = document.createTextNode(' / ');
            navContainer.appendChild(separator);
        }
    });
});

