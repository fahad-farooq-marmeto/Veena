class CustomerTestimonialSlider extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  connectedCallback() {
    this.initializeSlider();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="splide.min.css">
      <link rel="stylesheet" href="assignment-week6.css">
      <section class="slider-section" style="background-color: #FFFFFF; padding: 20px;">
        <div class="main-image-container">
          <img src="" alt="Main Image" id="main-image" width="300" height="300">
        </div>
        <div class="container">
          <div class="testi-heading">Our Customers' Stories</div>
          <div class="testi-subheading">Hear what our customers have to say about their experiences.</div>
          <div class="splide" id="testimonial-slider">
            <div class="splide__track">
              <ul class="splide__list">
                <!-- Slides will be populated here -->
              </ul>
            </div>
          </div>
        </div>
      </section>
      <script src="splide.min.js" defer></script>
    `;
  }

  initializeSlider() {
    const splide = new Splide(this.shadowRoot.querySelector('#testimonial-slider'), {
      type: 'loop',
      pagination: true,
      perPage: 1.5,
      perMove: 1,
      breakpoints: {
        640: {
          perPage: 1,
        },
      },
    }).mount();

    splide.on('moved', () => {
      const activeSlide = splide.Components.Elements.list.children[splide.index];
      const newImageUrl = activeSlide.dataset.mainImage;
      this.shadowRoot.querySelector('#main-image').src = newImageUrl;
    });

    // Initialize the main image with the first slide's image
    this.updateMainImage(splide);
  }

  updateMainImage(splide) {
    const activeSlide = splide.Components.Elements.list.children[0];
    const newImageUrl = activeSlide.dataset.mainImage;
    this.shadowRoot.querySelector('#main-image').src = newImageUrl;
  }
}
