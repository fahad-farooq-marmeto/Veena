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
      type: 'slide',
      pagination: false,
      perPage: 1,
      perMove: 1,
      breakpoints: {
        640: {
          perPage: 1,
        },
      },
    }).mount();

    // Add an event listener to disable the "Previous" button at the first slide
    splide.on('mounted move', function () {
      var prevButton = splide.Components.Elements.arrows.prev;
      // Disable the prev button if the current index is 0
      if (splide.index === 0) {
        prevButton.disabled = true;
        prevButton.classList.add('is-disabled');
      } else {
        prevButton.disabled = false;
        prevButton.classList.remove('is-disabled');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Find all add to cart forms
    const addToCartForms = document.querySelectorAll('form[action$="/cart/add"]');

    addToCartForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Create a new FormData object to capture form data
            const formData = new FormData(this);

            fetch('/cart/add.js', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Product added to cart:', data);
                showToast('Product successfully added to your cart!'); // Show success toast
                updateCartCount(); // Update the cart count
            })
            .catch(error => {
                console.error('Error adding product to cart:', error);
                showToast('Failed to add the product to the cart. Please try again.'); // Show error toast
            });
        });
    });
});

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) {
        return;
    }
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(function() { 
        toast.className = toast.className.replace("show", ""); 
    }, 3000);
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (!cartCount) {
        return;
    }
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
}
