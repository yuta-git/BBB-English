$(function () {
  const $hamburger = $('#js-hamburger');
  const $nav = $('#js-nav');
  const $navClose = $('#js-nav-close');

  function openNav() {
    $hamburger.attr('aria-expanded', 'true');
    $nav.addClass('is-open').attr('aria-hidden', 'false');
    $('body').css('overflow', 'hidden');
  }

  function closeNav() {
    $hamburger.attr('aria-expanded', 'false');
    $nav.removeClass('is-open').attr('aria-hidden', 'true');
    $('body').css('overflow', '');
  }

  $hamburger.on('click', openNav);
  $navClose.on('click', closeNav);

  $('.p-nav__link, .p-nav__btn').on('click', closeNav);
});
