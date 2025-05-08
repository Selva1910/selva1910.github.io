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

function initImageSliders() {
  document.querySelectorAll('.image-slider').forEach(slider => {
    const images = slider.querySelectorAll('.slider-image');
    let index = 0;

    const showImage = (i) => {
      images.forEach(img => img.classList.remove('active'));
      images[i].classList.add('active');
    };

    slider.querySelector('.prev-btn')?.addEventListener('click', () => {
      index = (index - 1 + images.length) % images.length;
      showImage(index);
    });

    slider.querySelector('.next-btn')?.addEventListener('click', () => {
      index = (index + 1) % images.length;
      showImage(index);
    });

    showImage(index); // Initial display
  });
}

// Call initially for visible sliders
initImageSliders();

// Re-initialize sliders when tabs change
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');

    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    tabContents.forEach(content => {
      content.classList.remove('active');
      content.classList.add('fade-out');
    });

    setTimeout(() => {
      tabContents.forEach(content => {
        if (content.id === targetTab) {
          content.classList.remove('fade-out');
          content.classList.add('active');
        }
      });

      // Reinitialize sliders after showing the new tab
      initImageSliders();
    }, 300);
  });
});

