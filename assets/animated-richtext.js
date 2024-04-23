document.addEventListener('DOMContentLoaded', function() {
  const animateText = () => {
    const textContainer = document.querySelector('.animated-rich-text__text');
    const spans = textContainer.querySelectorAll('span');
    
    // Reset animation for all spans
    spans.forEach(span => span.style.animation = '');

    // Animate in each letter
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.style.animation = 'letterIn 0.5s forwards';
      }, index * 100);
    });

    // Calculate total duration for in animation plus pause
    const totalDuration = spans.length * 100 + 1000;

    // Animate out each letter after all have animated in plus a pause
    setTimeout(() => {
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.style.animation = 'letterOut 0.5s forwards';
        }, index * 100);
      });
    }, totalDuration);

    // Recursively schedule next animation cycle
    setTimeout(animateText, totalDuration + spans.length * 100 + 2000);
  };

  // Initialize the animation loop
  animateText();
});
