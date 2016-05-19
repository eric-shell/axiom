// Put this in a file somewhere and include it
function isElementInViewport(el) {
  el = $(el).get(0);
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}

// Add this functionality to any jQuery object
$.fn.addClassWhenInView = function (classname) {
  var $this = this;
  /**
   * you might find that `$(window).scroll` fires too often.
   * another technique is the use `setTimeout`
   * and fire every 50ms and check all your
   * elements are in view
   */
  $(window).scroll(function () {
    $this.each(function () {
      // this is probably better
      // $(this).toggleClass(classname, isElementInViewport(this));
      if (isElementInViewport(this)) {
        $(this).addClass(classname);
      }
    });
  });
}

$('#hero, #information, #features, #opportunity').addClassWhenInView('visible');