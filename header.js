document.addEventListener('DOMContentLoaded', () => {
  const slideGroup = document.querySelector('.slide_group');
  const slides = Array.from(slideGroup.querySelectorAll('.slide'));
  const slideButtons = document.querySelector('.slide_buttons');
  const prevButton = document.querySelector('.previous_btn');
  const nextButton = document.querySelector('.next_btn');
  let currentIndex = 0;
  const slideCount = slides.length;

  const createButtons = () => {
      slides.forEach((_, index) => {
          const button = document.createElement('button');
          button.classList.add('slide_btn');
          if (index === currentIndex) {
              button.classList.add('active');
          }
          button.addEventListener('click', () => goToSlide(index));
          slideButtons.appendChild(button);
      });
  };

  const updateButtons = () => {
      const buttons = slideButtons.querySelectorAll('.slide_btn');
      buttons.forEach((button, index) => {
          if (index === currentIndex) {
              button.classList.add('active');
          } else {
              button.classList.remove('active');
          }
      });
  };

  const goToSlide = (index) => {
      if (index < 0) {
          index = slideCount - 1;
      } else if (index >= slideCount) {
          index = 0;
      }
      slideGroup.style.left = `-${index * 100}%`;
      currentIndex = index;
      updateButtons();
  };

  const nextSlide = () => {
      goToSlide(currentIndex + 1);
  };

  const prevSlide = () => {
      goToSlide(currentIndex - 1);
  };

  createButtons();
  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  // Auto slide every 4 seconds
  setInterval(nextSlide, 4000);
});
