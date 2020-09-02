export const obs = () => {
  const imgs = document.querySelectorAll("[data-src]");
  const obsOptions = {
    root: null, //viewport
    threshold: 0,
    rootMargin: "0px 0px 200px 0px",
  };
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const imgURL = entry.target.getAttribute("data-src");
      entry.target.setAttribute("src", imgURL);
      observer.unobserve(entry.target);
    });
  }, obsOptions);
  imgs.forEach((img) => {
    observer.observe(img);
  });
};
