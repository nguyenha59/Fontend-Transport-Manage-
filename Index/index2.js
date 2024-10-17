let currentIndex = 0;
        const slides = document.querySelectorAll('.banner-slide');
        const dots = document.querySelectorAll('.dot');
    
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                dots[i].classList.remove('active');
            });
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentIndex = index;
        }
    
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }
    
        function currentSlide(index) {
            showSlide(index);
        }
    
        setInterval(nextSlide, 3500); // Change slide every 3,5 seconds