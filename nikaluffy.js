//menu
const menu = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");

  menu.addEventListener("click", () => {
    menu.classList.toggle("active")
    navigation.classList.toggle("active")
});
//scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 200);
});

// content image
const imageBoxes = document.querySelectorAll('.image-box');
const aboutInfo = document.querySelector('.about-info');
const defaultContent = aboutInfo.querySelector('p').textContent;

imageBoxes.forEach(imageBox => {
  imageBox.addEventListener('mouseenter', () => {
    const newContent = imageBox.getAttribute('data-content');
    aboutInfo.querySelector('p').textContent = newContent;
  });

  imageBox.addEventListener('mouseleave', () => {
    aboutInfo.querySelector('p').textContent = defaultContent;
  });
});



const leftPerspectives = [
  { x: -10, z: -4 },
  { x: -20, z: -8 },
  { x: -30, z: -12 },
  { x: -40, z: -16 },
  { x: -50, z: -20 },
  { x: 10, z: -4 }
];

const rightPerspectives = [
  { x: 10, z: -4 },
  { x: 20, z: -8 },
  { x: 30, z: -12 },
  { x: 40, z: -16 },
  { x: 50, z: -20 },
  { x: -10, z: -4 }
];

const leftCards = document.querySelectorAll(".left .item");
const rightCards = document.querySelectorAll(".right .item");

const translateImage = (target, p) => {
  target.style.transform = `translate3d(${p.x}rem, 0, ${p.z}rem)`;
};

const animateCards = (c, perspectives) => {
  const count = parseInt(c.dataset.counter);
  translateImage(c, perspectives[count - 1]);
  c.dataset.counter = (count === 6 ? 1 : count + 1).toString();
};

const loop = () => {
  setInterval(() => {
    leftCards.forEach((c) => {
      animateCards(c, leftPerspectives);
    });

    rightCards.forEach((c) => {
      animateCards(c, rightPerspectives);
    });
  }, 1000);
};

loop();
