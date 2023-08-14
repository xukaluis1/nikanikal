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
//
