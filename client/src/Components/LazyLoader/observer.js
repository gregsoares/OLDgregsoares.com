export const obs = () => {
  const imgs = document.querySelectorAll("[data-src]");
  const obsOptions = {
    root: null, //viewport
    threshold: 0,
    rootMargin: "400px 0px 400px 0px",
  };
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      const imgURL = entry.target.getAttribute("data-src");
      entry.target.setAttribute("src", imgURL);
      console.log(
        `Loading next Img, random ID# ${Math.round(Math.random() * 1000)}`
      );
    });
  }, obsOptions);
  imgs.forEach((img) => {
    observer.observe(img);
  });
};
