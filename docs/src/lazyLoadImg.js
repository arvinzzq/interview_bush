function loadIfNeeded($img) {
  const bounding = $img.getBoundingClientRect();
  if (
    getComputedStyle($img).display !== 'none'
    && bounding.top <= window.innerHeight
    && bounding.bottom >= 0
  ) {
    $img.src = $img.dataset.src;
    $img.classList.remove('lazy');
  }
}

// 这里使用了 throttle，你可以实现自己的 throttle，也可以使用 lodash
const lazy = throttle(function () {
  const $imgList = document.querySelectorAll('.lazy');
  if ($imgList.length === 0) {
    document.removeEventListener('scroll', lazy);
    window.removeEventListener('resize', lazy);
    window.removeEventListener('orientationchange', lazy);
    return;
  }
  $imgList.forEach(loadIfNeeded);
}, 200);

document.addEventListener('scroll', lazy);
window.addEventListener('resize', lazy);
window.addEventListener('orientationchange', lazy);

// IntersectionObserver API 但是有兼容性问题
// https://developer.chrome.com/blog/intersectionobserver

var io = new IntersectionObserver(
  entries => {
  console.log(entries);
  },
  {
  /* Using default options. Details below */
  }
);
// Start observing an element
io.observe(element);
