document.addEventListener("DOMContentLoaded", function() {
    var marquee = document.querySelector('.custome-marquee div');

    marquee.addEventListener("mouseenter", function() {
        marquee.style.animationPlayState = "paused";
    });

    marquee.addEventListener("mouseleave", function() {
        marquee.style.animationPlayState = "running";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var marquee = document.querySelector('.custom-marquee div');
    var contentWidth = marquee.offsetWidth;

    function startAnimation() {
        var animationDuration = contentWidth / 50; // Adjust the speed of animation
        marquee.style.animation = `marquee ${animationDuration}s linear infinite`;
    }

    startAnimation();

    marquee.addEventListener("animationiteration", function() {
        startAnimation();
        // Move the first child (Women's Clothing Collection) to the end
        var firstChild = marquee.querySelector('span:first-child');
        marquee.appendChild(firstChild);
    });
});



