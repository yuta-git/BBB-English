$(function () {
  const $hamburger = $("#js-hamburger");
  const $nav = $("#js-nav");
  const $navClose = $("#js-nav-close");

  function openNav() {
    $hamburger.attr("aria-expanded", "true");
    $nav.addClass("is-open").attr("aria-hidden", "false");
    $("body").css("overflow", "hidden");
  }

  function closeNav() {
    $hamburger.attr("aria-expanded", "false");
    $nav.removeClass("is-open").attr("aria-hidden", "true");
    $("body").css("overflow", "");
  }

  $hamburger.on("click", openNav);
  $navClose.on("click", closeNav);

  $(".p-nav__link, .p-nav__btn").on("click", closeNav);

  // スライドインアニメーション
  const slideCards = document.querySelectorAll(
    ".p-reason__item--left, .p-reason__item--right",
  );
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-animated");
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );
  slideCards.forEach((card) => cardObserver.observe(card));
});
