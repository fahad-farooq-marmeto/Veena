document.addEventListener('DOMContentLoaded', function () {
    var mainImage = document.getElementById('main-image');
    var slider = new Splide('#testimonial-slider', {
      type       : 'fade',
      heightRatio: 0.5,
      pagination : true,
      cover      : true,
      perPage    : 3,
      breakpoints: {
        640: {
          perPage: 1,
        },
      }
    }).mount();
  
    slider.on('active', function (slide) {
      var newImage = slide.slide.querySelector('.card img').src;
      mainImage.src = newImage;
    });
  });
  