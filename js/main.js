$(function () {
  const $hamburger = $("#js-hamburger");
  const $nav = $("#js-nav");
  const $navMenu = $nav.find(".js-nav-menu");
  const $navClose = $("#js-nav-close");

  function openNav() {
    $hamburger.attr("aria-expanded", "true");
    $nav.addClass("is-open");
    $navMenu.attr("aria-hidden", "false");
    $nav.find(".js-nav-btn").attr("aria-hidden", "false");
    $("body").css("overflow", "hidden");
  }

  function closeNav() {
    $hamburger.attr("aria-expanded", "false");
    $nav.removeClass("is-open");
    $navMenu.attr("aria-hidden", "true");
    $nav.find(".js-nav-btn").attr("aria-hidden", "true");
    $("body").css("overflow", "");
  }

  $hamburger.on("click", openNav);
  $navClose.on("click", closeNav);

  $(".js-nav-link, .js-nav-btn").on("click", closeNav);

  // 画面内進入検知
  function initInView() {
    const inViewElements = document.querySelectorAll(".js-inView");
    if (!inViewElements.length) return;

    const DEFAULT_ROOT_MARGIN = "0px 0px -80px 0px";
    const observerMap = {};

    inViewElements.forEach((el) => {
      const rootMargin = el.dataset.rmargin ?? DEFAULT_ROOT_MARGIN;

      if (!observerMap[rootMargin]) {
        observerMap[rootMargin] = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-animated");
                observerMap[rootMargin].unobserve(entry.target);
              }
            });
          },
          { rootMargin },
        );
      }

      observerMap[rootMargin].observe(el);
    });
  }

  initInView();
});
