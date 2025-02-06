$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Website Developer", "Freelancer", "Section Officer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Website Developer", "Freelancer", "Section Officer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });


});

// document.addEventListener("DOMContentLoaded", function() {
//     const bars = document.querySelectorAll(".bars");
//
//     bars.forEach(bar => {
//         const percentText = bar.querySelector(".percent").textContent.trim();
//         const percentValue = parseInt(percentText); // Extract number
//         const fill = bar.querySelector(".fill");
//
//         console.log(percentText);
//
//         fill.style.width = percentValue + "%"; // Animate width dynamically
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll(".bars");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // let percent = entry.target.getAttribute("data-percent");
                // entry.target.style.width = percent + "%"; // Start animation
                const percentText = entry.target.querySelector(".percent").textContent.trim();
                const percentValue = parseInt(percentText); // Extract number
                const fill = entry.target.querySelector(".fill");

                console.log(percentText);

                fill.style.width = percentValue + "%"; // Animate width dynamically
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    alert("Cannot Submit at the Moment. Please Contact by E-Mail. Thank you.");
});