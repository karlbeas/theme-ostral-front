/* =====================================================
   ÖSTRAL PLAY — Static HTML5 Theme
   Assets/JS/main.js
   Stack: jQuery 3 + Bootstrap 5
   ===================================================== */

$(document).ready(function () {

  /* ── Header Scroll Effect ── */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 20) {
      $('#op-header').addClass('scrolled');
    } else {
      $('#op-header').removeClass('scrolled');
    }
  });
  $(window).trigger('scroll');

  /* ── Mobile Menu Toggle ── */
  $('#op-mobile-toggle').on('click', function () {
    const $menu = $('#op-mobile-menu');
    const $icon = $('#op-hamburger-icon');
    $menu.toggleClass('open');
    if ($menu.hasClass('open')) {
      $icon.removeClass('bi-list').addClass('bi-x-lg');
      $('body').css('overflow', 'hidden');
    } else {
      $icon.removeClass('bi-x-lg').addClass('bi-list');
      $('body').css('overflow', '');
    }
  });

  /* Close mobile menu on link click */
  $('#op-mobile-menu a').on('click', function () {
    $('#op-mobile-menu').removeClass('open');
    $('#op-hamburger-icon').removeClass('bi-x-lg').addClass('bi-list');
    $('body').css('overflow', '');
  });

  /* ── Hero Slider ── */
  let currentSlide = 0;
  const $slides = $('.op-hero-slide');
  const $dots   = $('.op-hero-dot');

  function goToSlide(index) {
    $slides.removeClass('active');
    $dots.removeClass('active');
    currentSlide = (index + $slides.length) % $slides.length;
    $($slides[currentSlide]).addClass('active');
    $($dots[currentSlide]).addClass('active');
  }

  if ($slides.length > 1) {
    $dots.on('click', function () {
      goToSlide($(this).index());
    });
    setInterval(function () {
      goToSlide(currentSlide + 1);
    }, 6000);
  }

  /* ── Like / Bookmark Toggle ── */
  $(document).on('click', '.op-card-like', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('liked');
    const $i = $(this).find('i');
    $i.toggleClass('bi-heart bi-heart-fill');
  });

  /* ── Filter Buttons ── */
  $(document).on('click', '.op-filter-btn', function () {
    $(this).closest('.op-filters').find('.op-filter-btn').removeClass('active');
    $(this).addClass('active');
  });

  $(document).on('click', '.op-faq-cat', function () {
    $(this).closest('.op-faq-cats').find('.op-faq-cat').removeClass('active');
    $(this).addClass('active');
  });

  /* ── View Toggle (Grid / List) ── */
  $(document).on('click', '.op-view-btn', function () {
    $(this).closest('.op-view-toggle').find('.op-view-btn').removeClass('active');
    $(this).addClass('active');
    const view = $(this).data('view');
    const $target = $($(this).data('target'));
    if (view === 'list') {
      $target.removeClass('op-grid').addClass('op-list-view');
    } else {
      $target.addClass('op-grid').removeClass('op-list-view');
    }
  });

  /* ── Accordion (FAQ) ── */
  $(document).on('click', '.op-accordion-header', function () {
    const $item = $(this).closest('.op-accordion-item');
    const wasOpen = $item.hasClass('open');
    // Close all
    $('.op-accordion-item').removeClass('open');
    // Open clicked if it was closed
    if (!wasOpen) $item.addClass('open');
  });

  /* ── Season Selector (Series Detail) ── */
  $(document).on('click', '.op-season-btn', function () {
    $(this).closest('.op-season-selector').find('.op-season-btn').removeClass('active');
    $(this).addClass('active');
    const season = $(this).data('season');
    $('.op-episodes-list').hide();
    $('#season-' + season).show();
  });

  /* ── Tab Buttons ── */
  $(document).on('click', '.op-tab-btn', function () {
    const group  = $(this).data('group');
    const target = $(this).data('target');
    $('[data-group="' + group + '"]').removeClass('active');
    $(this).addClass('active');
    $('[data-tab-group="' + group + '"]').hide();
    $('[data-tab="' + target + '"]').show();
  });

  /* ── Player Controls ── */
  $(document).on('click', '.op-player-progress', function (e) {
    const pct = (e.offsetX / $(this).width()) * 100;
    $(this).find('.op-player-progress-fill').css('width', pct + '%');
  });

  $(document).on('click', '.op-player-big-btn', function () {
    const $btn = $(this);
    const isPlaying = $btn.data('playing');
    if (isPlaying) {
      $btn.data('playing', false).find('i').removeClass('bi-pause-fill').addClass('bi-play-fill');
    } else {
      $btn.data('playing', true).find('i').removeClass('bi-play-fill').addClass('bi-pause-fill');
    }
  });

  /* ── Smooth horizontal scroll arrows ── */
  $(document).on('click', '.op-scroll-left', function () {
    $(this).closest('.op-row-wrapper').find('.op-cards-row').animate({ scrollLeft: '-=320' }, 300);
  });
  $(document).on('click', '.op-scroll-right', function () {
    $(this).closest('.op-row-wrapper').find('.op-cards-row').animate({ scrollLeft: '+=320' }, 300);
  });

  /* ── Search Input Highlight ── */
  $('.op-search-input').on('input', function () {
    const val = $(this).val();
    if (val.length > 0) {
      $('#op-search-results').show();
      $('#op-search-empty').hide();
    } else {
      $('#op-search-results').hide();
      $('#op-search-empty').show();
    }
  });

  /* ── Profile plan badge ── */
  $('.op-plan-toggle').on('click', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  /* ── Report Issue char counter ── */
  $('textarea[maxlength]').on('input', function () {
    const max = $(this).attr('maxlength');
    const len = $(this).val().length;
    $(this).siblings('.op-form-helper').text(len + ' / ' + max + ' caractères');
  });

});
