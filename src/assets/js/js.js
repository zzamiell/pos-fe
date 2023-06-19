// (function ($) {
//     // "use strict";
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 10) {
//             $(".back-to-top").fadeIn("slow");
//             $("#header").addClass("scroll-on");
//         } else {
//             $(".back-to-top").fadeOut("slow");
//             $("#header").removeClass("scroll-on");
//         }
//     });
    //     $(".back-to-top").click(function () {
    //         $("html, body").animate(
    //             {
    //                 scrollTop: 0,
    //             },
    //             1500,
    //             "easeInOutExpo"
    //         );
    //         return false;
    //     });

//     // Init AOS


//     $("body").on("mouseenter mouseleave", ".nav-item", function (e) {
//         if ($(window).width() > 750) {
//             var _d = $(e.target).closest(".nav-item");
//             _d.addClass("show");
//             setTimeout(function () {
//                 _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
//             }, 1);
//         }
//     });

//     // Navigation active state on scroll
//     var nav_sections = $("section");
//     var main_nav = $(".navbar-nav");

//     $(window).on("scroll", function () {
//         var cur_pos = $(this).scrollTop() + 200;

//         nav_sections.each(function () {
//             var top = $(this).offset().top,
//                 bottom = top + $(this).outerHeight();

//             if (cur_pos >= top && cur_pos <= bottom) {
//                 if (cur_pos <= bottom) {
//                     main_nav.find("li").removeClass("active");
//                 }
//                 main_nav
//                     .find('a[href="#' + $(this).attr("id") + '"]')
//                     .parent("li")
//                     .addClass("active");
//             }
//             if (cur_pos < 300) {
//                 $(".navbar-nav li:first").addClass("active");
//             }
//         });
//     });

//     // Smooth scroll for the navigation menu and links with .scrollto classes
//     var scrolltoOffset = $("#header").outerHeight() - 51;
//     $(document).on("click", ".navbar-nav a, .scrollto", function () {
//         if (
//             location.pathname.replace(/^\//, "") ==
//                 this.pathname.replace(/^\//, "") &&
//             location.hostname == this.hostname
//         ) {
//             var target = $(this.hash);
//             if (target.length) {
//                 // e.preventDefault();

//                 var scrollto = target.offset().top - scrolltoOffset;

//                 $("html, body").animate(
//                     {
//                         scrollTop: scrollto,
//                     },
//                     1500,
//                     "easeInOutExpo"
//                 );

//                 if ($(this).parents(".navbar-nav").length) {
//                     $(".navbar-nav .active").removeClass("active");
//                     $(this).closest("li").addClass("active");
//                 }
//                 return false;
//             }
//         }
//     });


// })();

// // function copyToClipboard(element) {
// //     var x = document.getElementById("snackbar");
// //     var $temp = $("<input>");
// //     $("body").append($temp);
// //     $temp.val($(element).text()).select();
// //     document.execCommand("copy");
// //     $temp.remove();

// //     // Add the "show" class to DIV
// //     x.className = "show";

// //     // After 3 seconds, remove the show class from DIV
// //     setTimeout(function () {
// //         x.className = x.className.replace("show", "");
// //     }, 3000);
// // }