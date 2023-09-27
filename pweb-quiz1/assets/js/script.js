let header = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    header.classList.toggle("scrolled", window.scrollY > 1);
});

// $(function () {
//     $(document).scroll(function () {
//         var $nav = $(".navbar-sticky-top");
//         $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//     });
// });
