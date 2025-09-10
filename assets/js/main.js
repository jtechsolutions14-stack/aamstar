/***************************************************
==================== JS INDEX ======================
****************************************************

// Data Js
// Preloader Js
// Scroll To Top Js
// Mobile Menu Js
// Mobile Menu Overlay Js
// Search Bar Js
// Sticky Js
// Hero Slider Js
// Project Slider Js
// Project Slider2 Js
// Project Slider3 Js
// Project Slider4 Js
// Project Slider5 Js
// Testimonial Slider Js
// Testimonial Slider2 Js
// Testimonial Slider3 Js
// Testimonial Thumb Js
// Brand Slider Js
// Blog Slider Js
// Veno Box Js
// Fun Fact Js
// Skillbar Js
// Nice Select Js
// Grid Js
// Accordion Js
// Rating Js
// Before After Js
// Contact Form Js

****************************************************/

(function ($) {
   "use strict";
   
   // Data Js
   $("[data-bg-image]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-bg-image") + ")"
      );
   });
  
   $("[data-bg-color]").each(function () {
      $(this).css("background-color", $(this).attr("data-bg-color"));
   });

   // Preloader Js
   function loading() {
      document.querySelectorAll(".bar").forEach(function (current) {
         let startWidth = 0;
         const endWidth = current.dataset.size;
         const interval = setInterval(frame, 20);
         function frame() {
            if (startWidth >= endWidth) {
               clearInterval(interval);
            } else {
               startWidth++;
               current.style.width = `${endWidth}%`;
               current.firstElementChild.innerText = `${startWidth}%`;
            }
         }
      });
   }
   setTimeout(loading, 1000);
   $(window).on("load", function () {
      const preloader = $(".preloader");
      preloader.delay(600).fadeOut();
   });
   $(".preloader .tj-cancel-btn").on("click", function () {
      $(".preloader").fadeOut();
   });

   // Scroll To Top Js
   $(window).on("scroll",function() {
      var pagescroll = $(window).scrollTop();
      if(pagescroll > 100){
         $(".scroll-to-top").addClass("scroll-to-top-visible");
      }else{
         $(".scroll-to-top").removeClass("scroll-to-top-visible");
      }
   });

   $(".scroll-to-top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
   });

   // Mobile Menu Js
	$("#main-menu").meanmenu({
		meanMenuContainer: "#mobile-navbar-menu",
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

   // Mobile Menu Overlay Js
   var canva_expander = $(".canva_expander");
      if (canva_expander.length) {
      $(".canva_expander, #canva_close, #tj-overlay-bg").on("click", function (e) {
         e.preventDefault();
         $("body").toggleClass("canvas_expanded");
      });
   }

   // Search Bar Js
   if($('.search').length) {
      $('.search').on('click', function() {
         $('body').addClass('search-active');
      });
      $('.close-search').on('click', function() {
         $('body').removeClass('search-active');
      });
   };

   // Sticky Js
   $(window).scroll(function () {
      var Width = $(document).width();
      if ($("body").scrollTop() > 200 || $("html").scrollTop() > 200) {
         $(".header-sticky").addClass("sticky");
      } else {
         $(".header-sticky").removeClass("sticky");
      }
   });

   // Hero Slider Js
   if ($(".hero-slider").length > 0) {
      var hero = new Swiper(".hero-slider", {
         slidesPerView: 1,
         speed: 1500,
         loop: true,
         effect: "fade",
         navigation: {
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
         },
      });
   }

   // Project Slider3 Js
   if ($(".tj-project-slider").length > 0) {
      var project = new Swiper(".tj-project-slider", {
         slidesPerView: 3,
         spaceBetween: 24,
         centeredSlides: true,
         loop: true,
         speed: 1500,
         autoplay: {
            delay: 8500,
         },
         navigation: {
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
         },
         pagination: {
            el: ".project-pagination",
            clickable: true,
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            576: {
               slidesPerView: 1,
            },
            640: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 1.5,
            },
            992: {
               slidesPerView: 2,
            },
            1024: {
               slidesPerView: 3,
            },
         },
      });
   }

   // Project Slider2 Js
   if ($(".tj-project-slider2").length > 0) {
      var project = new Swiper(".tj-project-slider2", {
         slidesPerView: 1,
         spaceBetween: 24,
         centeredSlides: true,
         loop: true,
         effect: "fade",
         speed: 2000,
         pagination: {
            el: ".swiper-pagination",
            type: "custom",
            renderCustom: function (project, current, total) {
            return "<span>"+'0'+ current +" </span> | " + '0'+total;
            },
         },
         navigation: {
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
         },
      });
   }

   // Project Slider3 Js
   if ($(".tj-project-slider3").length > 0) {
      var project = new Swiper(".tj-project-slider3", {
         slidesPerView: 3,
         spaceBetween: 24,
         centeredSlides: true,
         loop: true,
         speed: 1500,
         autoplay: {
            delay: 8500,
         },
         navigation: {
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
         },
         pagination: {
            el: ".project-pagination",
            clickable: true,
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            576: {
               slidesPerView: 1,
            },
            640: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 2,
            },
            992: {
               slidesPerView: 3,
            },
            1024: {
               slidesPerView: 3,
            },
         },
      });
   }

   // Project Slider4 Js
   if ($(".tj-project-slider4").length > 0) {
      var service = new Swiper(".tj-project-slider4", {
         slidesPerView: 4,
         spaceBetween: 30,
         loop: true,
         autoplay: {
            delay: 9000,
         },
         navigation: {
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            576: {
               slidesPerView: 1,
            },
            640: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 2,
            },
            992: {
               slidesPerView: 3,
            },
            1024: {
               slidesPerView: 4,
            },
         },
      });
   }

   // Project Slider5 Js
   if ($(".tj-project-slider5").length > 0) {
      var project = new Swiper(".tj-project-slider5", {
         slidesPerView: "auto",
         spaceBetween: 30,
         centeredSlides: true,
         loop: true,
         speed: 2000,
         autoplay: {
            delay: 3000,
        },
      });
   }

   // Testimonial Slider Js
   if ($(".tj-testimonial-slider").length > 0) {
      var service = new Swiper(".tj-testimonial-slider", {
         slidesPerView: 3,
         spaceBetween: 24,
         loop: true,
         autoplay: {
            delay: 9000,
         },
         speed: 2000,
         pagination: {
            el: ".testimonial-pagination",
            clickable: true,
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            576: {
               slidesPerView: 1,
            },
            640: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 2,
            },
            992: {
               slidesPerView: 3,
            },
            1024: {
               slidesPerView: 3,
            },
         },
      });
   }

   // Testimonial Slider2 Js
   if ($(".tj-testimonial-slider2").length > 0) {
      var service = new Swiper(".tj-testimonial-slider2", {
         slidesPerView: 2,
         spaceBetween: 24,
         loop: true,
         speed: 2000,
         autoplay: {
            delay: 9000,
         },
         pagination: {
            el: ".testimonial-pagination",
            clickable: true,
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            576: {
               slidesPerView: 1,
            },
            640: {
               slidesPerView: 1,
            },
            768: {
               slidesPerView: 1,
            },
            992: {
               slidesPerView: 2,
            },
            1024: {
               slidesPerView: 2,
            },
         },
      });
   }

   // Testimonial Slider3 Js
   if ($(".tj-testimonial-slider3").length > 0) {
      var service = new Swiper(".tj-testimonial-slider3", {
         slidesPerView: 1,
         spaceBetween: 24,
         loop: true,
         autoplay: {
            delay: 9000,
         },
         speed: 2000,
         pagination: {
            el: ".testimonial-pagination",
            clickable: true,
         },
      });
   }

   // Testimonial Thumb Js
	var testimonialSwiper = new Swiper(".testimonial-thumb-slider", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		speed: 1500,
		navigation: {
			nextEl: ".slider-next",
			prevEl: ".slider-prev",
		},
	});
	testimonialSwiper.on("slideChange", function () {
		var nxSlide = $(".testimonial-thumb-slider .swiper-wrapper")
			.children()
			.eq(testimonialSwiper.realIndex + 1)
			.next();
		var pvSlide = $(".testimonial-thumb-slider .swiper-wrapper")
			.children()
			.eq(testimonialSwiper.realIndex + 1)
			.prev();

		$(".slider-next img").fadeOut("slow", function () {
			$(this).animate({ opacity: 0 }, 100);
			$(this).attr("src", nxSlide.find("img").attr("data-src"));
			$(this).fadeIn("slow", function () {
				$(this).animate({ opacity: 1 }, 100);
			});
		});

		$(".slider-prev img").fadeOut("slow", function () {
			$(this).animate({ opacity: 0 }, 100);
			$(this).attr("src", pvSlide.find("img").attr("data-src"));
			$(this).fadeIn("slow", function () {
				$(this).animate({ opacity: 1 }, 100);
			});
		});
	});

   // Brand Slider Js
   if ($(".tj-brand-slider").length > 0) {
      var brand = new Swiper(".tj-brand-slider", {
         slidesPerView: 5,
         spaceBetween: 20,
         loop: true,
         freemode: true,
         autoplay: {
            delay: 4000,
         },
         speed: 2000,
         autoplay: {
            delay: 1,
            disableOnInteraction: true,
         },
         breakpoints: {
            320: {
               slidesPerView: 2,
            },
            576: {
               slidesPerView: 2,
            },
            640: {
               slidesPerView: 3,
            },
            768: {
               slidesPerView: 3,
            },
            992: {
               slidesPerView: 4,
            },
            1024: {
               slidesPerView: 5,
            },
         },
      });
   }

   // Blog Slider Js
   if ($(".blog-wrapper-slider").length > 0) {
      var blog = new Swiper(".blog-wrapper-slider", {
         slidesPerView: 1,
         spaceBetween: 24,
         loop: true,
         autoplay: {
            delay: 9000,
         },
         speed: 2000,
         navigation: {
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
         },
      });
   }

   // Veno Box Js
	if ($(".ig-gallery").length > 0) {
		new VenoBox({
			selector: ".ig-gallery",
			numeration: true,
			// infinigall: true,
			spinner: "pulse",
		});
	}

	if ($(".video-popup").length > 0) {
		new VenoBox({
			selector: ".video-popup",
			numeration: true,
			// infinigall: true,
			spinner: "pulse",
		});
	}

   // Fun Fact Js
   if ($(".odometer").length > 0) {
      $(".odometer").appear(function () {
         var odo = $(".odometer");
         odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
         });
      });
   }

   // Skillbar Js
   if ($(".progress_bar").length > 0) {
      $(document).ready(function(){
         progress_bar();
      });
      function progress_bar() {
         var speed = 30;
         var items = $('.progress_bar').find('.progress-item');
         items.appear(function() {
            var item = $(this).find('.progress');
            var itemValue = item.data('progress');
            var i = 0;
            var value = $(this);
            var count = setInterval(function(){
               if(i <= itemValue) {
                  var iStr = i.toString();
                  item.css({
                     'width': iStr+'%'
                  });
                     value.find('.item_value').html(iStr +'%');
                  }
                  else {
                  clearInterval(count);
               }
               i++;
            },speed);
         });
      }
   }

   // Nice Select Js
   if ($("select").length > 0) {
      $("select").niceSelect();
   }

   // Grid Js
   function masonryGridSetting() {
      if ($(".masonry-gallery").length) {
         var $grid = $(".masonry-gallery").masonry({
            itemSelector: ".grid-item",
            columnWidth: ".grid-item",
            percentPosition: true,
         });

         $grid.imagesLoaded().progress(function () {
            $grid.masonry("layout");
         });
      }
   }

   $(window).on("load resize", function() {
      masonryGridSetting();
   })

   // Accordion Js
   if ($(".accordion-item").length > 0) {
      $(".accordion-item .faq-title").on("click", function () {
         if ($(this).parent().hasClass("active")) {
            $(this).parent().removeClass("active");
         } else {
            $(this).parent().siblings().removeClass("active");
            $(this).parent().addClass("active");
         }
      });
   }

   // Rating Js
   if ($(".fill-ratings span").length > 0) {
      var star_rating_width = $(".fill-ratings span").width();
      $(".star-ratings").width(star_rating_width);
   }

   // Before After Js
   if ($(".tj-before-after-wrapper").length > 0) {
      $('.tj-before-after-wrapper').beforeAfter({
         movable: true,
         clickMove: true,
         position: 50,
         separatorColor: '#fafafa',
         bulletColor: '#fafafa',
         onMoveStart: function (e) {
         console.log(event.target);
         },
         onMoving: function () {
         console.log(event.target);
         },
         onMoveEnd: function () {
         console.log(event.target);
         },
      });
   }
// Contact Form Js
if ($("#contact-form").length > 0) {
   $("#contact-form").validate({
      rules: {
         conName: "required",
         conEmail: {
            required: true,
            email: true,
         },
      },
      messages: {
         conName: "Enter your name.",
         conEmail: "Enter a valid email.",
      },
      submitHandler: function (form) {
         // start ajax request
         $.ajax({
            type: "POST",
            url: "assets/mail/contact-form.php",
            data: $("#contact-form").serialize(),
            cache: false,
            success: function (data) {
           
               if (data == "Y") {
                  $("#message_sent").modal("show");
                  $("#contact-form").trigger("reset");
               } else {
                  $("#message_fail").modal("show");
                 
               }
            },
           
          
          
         });

     
      }
   });
}
})(jQuery);
