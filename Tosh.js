  const slider = document.querySelector('.slider');
    
  slider.innerHTML += slider.innerHTML;

  let position = 0;

  function slide() {
    slide.preventDefault();
    position -= 1; 
    if (position <= -slider.clientWidth / 2) {
      position = 0; 
    }
    slider.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(slide);
  }

  slide();