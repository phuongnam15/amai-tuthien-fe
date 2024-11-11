const smoothScroll = (targetId, time) => {
  const targetPosition = document.getElementById(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = time; // thời gian cuộn tính bằng ms
  let start = null;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percent = Math.min(progress / duration, 1);
    window.scrollTo(0, startPosition + distance * percent);
    if (progress < duration) window.requestAnimationFrame(step);
  });
};

export default smoothScroll;
