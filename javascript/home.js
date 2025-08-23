const observers = document.querySelectorAll('.animate-slide-left, .animate-slide-right');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, {
    threshold: 0.2
  });

  observers.forEach(el => observer.observe(el));