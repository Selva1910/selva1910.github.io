// Toggle Theme
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggleButton.textContent = document.body.classList.contains('light') ? '🌞' : '🌙';
});

// Navigation Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Tab Functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');

    // Update active tab button
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Remove active class from all content and apply fade-out effect
    tabContents.forEach(content => {
      content.classList.remove('active');
      content.classList.add('fade-out');
    });

    // Wait for fade-out to finish before showing the target tab
    setTimeout(() => {
      tabContents.forEach(content => {
        if (content.id === targetTab) {
          content.classList.remove('fade-out'); // Remove fade-out effect
          content.classList.add('active'); // Add fade-in effect
        }
      });
    }, 300); // Match this with the CSS transition duration (0.3s)
  });
});
