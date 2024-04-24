document.querySelectorAll('.hotspot').forEach(hotspot => {
    hotspot.addEventListener('mouseover', function() {
      this.querySelector('.hotspot__product-card').style.display = 'block';
    });

  
    hotspot.addEventListener('mouseout', function() {
      this.querySelector('.hotspot__product-card').style.display = 'none';
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#product-slider', {
      type: 'loop',
      pagination: false,
      perPage: 1,
      perMove: 1,
      breakpoints: {
        640: {
          perPage: 1,
        },
      },
    }).mount();
  });
