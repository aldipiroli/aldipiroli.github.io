// Footer configuration - update all footer content here
const footerConfig = {
    copyright: 'Aldi Piroli \u00A9',
    links: [
        { text: 'Email', href: 'mailto:aldipiroli@gmail.com' },
        { text: 'GitHub', href: 'https://github.com/aldipiroli', target: '_blank', rel: 'noopener noreferrer' },
        { text: 'Scholar', href: 'https://scholar.google.com/citations?user=EO1B95AAAAAJ', target: '_blank', rel: 'noopener noreferrer' }
    ]
};

// Initialize footer when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const copyrightContainer = document.getElementById('footer-copyright');
    if (copyrightContainer) {
        const year = new Date().getFullYear();
        copyrightContainer.textContent = `${footerConfig.copyright} ${year}`;
    }

    // Set footer links
    const footerLinksContainer = document.getElementById('footer-links');
    if (footerLinksContainer) {
        footerLinksContainer.innerHTML = '';
        footerConfig.links.forEach((link, index) => {
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.text;
            if (link.target) a.target = link.target;
            if (link.rel) a.rel = link.rel;
            footerLinksContainer.appendChild(a);

            // Add separator (except for last item)
            if (index < footerConfig.links.length - 1) {
                const separator = document.createTextNode(' / ');
                footerLinksContainer.appendChild(separator);
            }
        });
    }
});

