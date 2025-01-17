// const slideshow = document.querySelector('.slideshow');
// const nextButton = document.querySelector('#next');

// let isPlaying = false;

// nextButton.addEventListener('click', () => {
//   if (!isPlaying) {
//     slideshow.classList.add('playing');
//     isPlaying = true;
//   }
// });

// function updateParallax() {
//   const scrollTop = window.pageYOffset;
//   const slideHeight = slideshow.clientHeight;
//   const parallaxElements = document.querySelectorAll('.parallax');

//   parallaxElements.forEach((element) => {
//     const translateY = (scrollTop / slideHeight) * 100;
//     element.style.transform = `translateY(${-translateY}%)`;
//   });
// }

// window.addEventListener('scroll', () => {
//   updateParallax();
// });

// window.addEventListener('resize', () => {
//   updateParallax();
// });