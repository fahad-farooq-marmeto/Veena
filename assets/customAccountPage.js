document.addEventListener('DOMContentLoaded', function () {
    // Select all menu toggles and the sections
    var menuToggles = document.querySelectorAll('.menu-toggle');
    var sections = document.querySelectorAll('.section-content');
    var menuItems = document.querySelectorAll('.menu-item');
  
    // Hide all sections except the default one (e.g., 'profile')
    sections.forEach(function (section) {
      section.style.display = 'none';
    });
    var defaultSection = document.getElementById('profile'); // Or any default section
    if (defaultSection) {
      defaultSection.style.display = 'block';
    }
  
    // Add click event listeners to each menu toggle
    menuToggles.forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        var targetId = toggle.getAttribute('data-target');
  
        // Hide all sections
        sections.forEach(function (section) {
          section.style.display = 'none';
        });
  
        // Show only the targeted section
        var targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.style.display = 'block';
        }
  
        // Remove 'active' class from all menu items
        menuItems.forEach(function (item) {
          item.classList.remove('active');
        });
  
        // Add 'active' class to the clicked menu item
        var parentItem = toggle.closest('.menu-item');
        if (parentItem) {
          parentItem.classList.add('active');
        }
      });
    });
  });
  