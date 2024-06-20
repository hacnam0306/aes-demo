!(function () {
  "use strict";
  var e = {
    init: function () {
      this.Basic.init();
    },
    Basic: {
      init: function () {
        this.ylpreloader(),
          this.BackgroundImage(),
          this.Animation(),
          this.ylStickymenu(),
          this.ylMobileMenu(),
          this.YlVideoBox(),
          this.ylSliderMain(),
          this.YlDepartment(),
          this.YlTestimonial1(),
          this.CourseGrid(),
          this.CourseGridFilter(),
          this.countDown(),
          this.Ylblog(),
          this.YLcategory(),
          this.YlTestimonial12(),
          this.YlTeamInstructor(),
          this.YlBlog2(),
          this.GoogleMap();
      },
      ylpreloader: function () {
        jQuery(window).on("load", function () {
          jQuery("#yl-preloader").fadeOut("slow", function () {
            jQuery(this).remove();
          });
        }),
          $(window).on("scroll", function () {
            $(this).scrollTop() > 200
              ? $(".scrollup").fadeIn()
              : $(".scrollup").fadeOut();
          }),
          $(".scrollup").on("click", function () {
            return (
              $("html, body").animate(
                {
                  scrollTop: 0,
                },
                800,
              ),
              !1
            );
          });
      },
      BackgroundImage: function () {
        $("[data-background]").each(function () {
          $(this).css(
            "background-image",
            "url(" + $(this).attr("data-background") + ")",
          );
        }),
          $(".odometer").length &&
            ($(".odometer").appear(),
            $(document.body).on("appear", ".odometer", function (e) {
              $(".odometer").each(function () {
                var e = $(this).attr("data-count");
                $(this).html(e);
              });
            })),
          $(".search-box-outer").length &&
            ($(".search-box-outer").on("click", function () {
              $("body").addClass("search-active");
            }),
            $(".close-search").on("click", function () {
              $("body").removeClass("search-active");
            })),
          $("#yl-main-slider-3").length &&
            (jQuery("#yl-main-slider-3").owlCarousel({
              items: 1,
              loop: !0,
              nav: !0,
              dots: !1,
              autoplay: !0,
              navSpeed: 1e3,
              smartSpeed: 2e3,
              navText: [
                "<i class='fas fa-arrow-left'></i>",
                "<i class='fas fa-arrow-right'></i>",
              ],
            }),
            $(window).on("load", function () {
              $(".yl-top-category-slider").length &&
                $(".yl-top-category-slider").owlCarousel({
                  margin: 30,
                  responsiveClass: !0,
                  nav: !0,
                  dots: !1,
                  navText: [
                    "<i class='fas fa-chevron-left'></i>",
                    "<i class='fas fa-chevron-right'></i>",
                  ],
                  loop: !0,
                  responsive: {
                    0: {
                      items: 1,
                    },
                    400: {
                      items: 1,
                    },
                    600: {
                      items: 2,
                    },
                    700: {
                      items: 2,
                    },
                    1e3: {
                      items: 3,
                    },
                    1300: {
                      items: 4,
                    },
                    1900: {
                      items: 4,
                    },
                  },
                });
            })),
          $(".odometer").length &&
            ($(".odometer").appear(),
            $(document.body).on("appear", ".odometer", function (e) {
              $(".odometer").each(function () {
                var e = $(this).attr("data-count");
                $(this).html(e);
              });
            })),
          $(window).on("load", function () {
            $(".testimonial-slider-3").length &&
              $(".testimonial-slider-3").owlCarousel({
                margin: 30,
                responsiveClass: !0,
                nav: !1,
                dots: !0,
                loop: !0,
                responsive: {
                  0: {
                    items: 1,
                  },
                  400: {
                    items: 1,
                  },
                  600: {
                    items: 1,
                  },
                  700: {
                    items: 2,
                  },
                  1e3: {
                    items: 2,
                  },
                  1300: {
                    items: 3,
                  },
                  1900: {
                    items: 3,
                  },
                },
              });
          });
      },
      Animation: function () {
        $(".wow").length &&
          new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
          }).init();
      },
      YlVideoBox: function () {
        $(".video_box").length &&
          $(".video_box").fancybox({
            openEffect: "fade",
            closeEffect: "fade",
            helpers: {
              media: {},
            },
          });
      },
      ylStickymenu: function () {
        jQuery(window).on("scroll", function () {
          jQuery(window).scrollTop() > 100
            ? jQuery(".yl-header-main").addClass("yl-sticky-menu")
            : jQuery(".yl-header-main").removeClass("yl-sticky-menu");
        });
      },
      ylMobileMenu: function () {
        $(".yl-open_mobile_menu").on("click", function () {
          $(".yl-mobile_menu_wrap").toggleClass("mobile_menu_on");
        }),
          $(".yl-open_mobile_menu").on("click", function () {
            $("body").toggleClass("mobile_menu_overlay_on");
          }),
          $(".yl-mobile_menu li.dropdown ul").length &&
            ($(".yl-mobile_menu li.dropdown").append(
              '<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>',
            ),
            $(".yl-mobile_menu li.dropdown .dropdown-btn").on(
              "click",
              function () {
                $(this).prev("ul").slideToggle(500);
              },
            ));
      },
      ylSliderMain: function () {
        $("#yl-main-slider").length &&
          jQuery("#yl-main-slider").owlCarousel({
            items: 1,
            loop: !0,
            nav: !1,
            dots: !0,
            autoplay: !0,
            navSpeed: 1e3,
            smartSpeed: 2e3,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
          }),
          $("#yl-main-slider-2").length &&
            jQuery("#yl-main-slider-2").owlCarousel({
              items: 1,
              loop: !0,
              nav: !0,
              dots: !1,
              autoplay: !0,
              navSpeed: 1e3,
              smartSpeed: 2e3,
              navText: [
                "<i class='fas fa-arrow-left'></i>",
                "<i class='fas fa-arrow-right'></i>",
              ],
            });
      },
      YlDepartment: function () {
        $("#yl-department-slider-id").length &&
          $(window).on("load", function () {
            $("#yl-department-slider-id").owlCarousel({
              margin: 30,
              responsiveClass: !0,
              nav: !0,
              dots: !1,
              navText: [
                "<i class='fas fa-arrow-left'></i>",
                "<i class='fas fa-arrow-right'></i>",
              ],
              loop: !0,
              responsive: {
                0: {
                  items: 1,
                },
                400: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
                700: {
                  items: 2,
                },
                1e3: {
                  items: 3,
                },
                1300: {
                  items: 3,
                },
                1900: {
                  items: 3,
                },
              },
            });
          });
      },
      YlTestimonial1: function () {
        $("#yl-testimonial-slide").length &&
          $(window).on("load", function () {
            $("#yl-testimonial-slide").owlCarousel({
              margin: 0,
              items: 1,
              nav: !1,
              dots: !0,
              loop: !0,
            });
          });
      },
      CourseGrid: function () {
        if ($(".grid").length)
          var e = $(".grid").imagesLoaded(function () {
            e.masonry({
              percentPosition: !0,
              itemSelector: ".grid-item",
              columnWidth: ".grid-sizer",
            });
          });
      },
      CourseGridFilter: function () {
        if ($(".grid").length)
          var e = $(".grid").imagesLoaded(function () {
              e.masonry({
                percentPosition: !0,
                itemSelector: ".grid-item",
                columnWidth: ".grid-sizer",
              });
            }),
            o =
              ((e = $(".grid").isotope({
                itemSelector: ".grid-item",
                layoutMode: "fitRows",
              })),
              {
                numberGreaterThan50: function () {
                  var e = $(this).find(".number").text();
                  return parseInt(e, 10) > 50;
                },
                ium: function () {
                  return $(this).find(".name").text().match(/ium$/);
                },
              });
        $(".button-group").on("click", "button", function () {
          var i = $(this).attr("data-filter");
          (i = o[i] || i),
            e.isotope({
              filter: i,
            });
        }),
          $(".button-group").each(function (e, o) {
            var i = $(o);
            i.on("click", "button", function () {
              i.find(".is-checked").removeClass("is-checked"),
                $(this).addClass("is-checked");
            });
          });
      },
      countDown: function () {
        if ($(".coming-countdown").length > 0) {
          var e = new Date("march 26, 2021 23:59:59").getTime(),
            o = document.querySelector(".days .arch-count-down-number"),
            i = document.querySelector(".hours .arch-count-down-number"),
            t = document.querySelector(".minutes .arch-count-down-number"),
            n = document.querySelector(".seconds .arch-count-down-number");
          setInterval(function () {
            var s = new Date().getTime(),
              a = e - s,
              l = Math.floor(a / 864e5),
              r = Math.floor((a % 864e5) / 36e5),
              c = Math.floor((a % 36e5) / 6e4),
              d = Math.floor((a % 6e4) / 1e3);
            (o.innerHTML = l),
              (i.innerHTML = r),
              (t.innerHTML = c),
              (n.innerHTML = d);
          }, 1e3);
        }
      },
      Ylblog: function () {
        $("#yl-blog-slider-id").length &&
          $(window).on("load", function () {
            $("#yl-blog-slider-id").owlCarousel({
              margin: 30,
              responsiveClass: !0,
              nav: !0,
              dots: !1,
              navText: [
                "<i class='fas fa-arrow-left'></i>",
                "<i class='fas fa-arrow-right'></i>",
              ],
              loop: !0,
              responsive: {
                0: {
                  items: 1,
                },
                400: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
                700: {
                  items: 2,
                },
                1e3: {
                  items: 3,
                },
                1300: {
                  items: 3,
                },
                1900: {
                  items: 3,
                },
              },
            });
          });
      },
      YLcategory: function () {
        $("#yl-category-slide").length &&
          $(window).on("load", function () {
            $("#yl-category-slide").owlCarousel({
              margin: 30,
              responsiveClass: !0,
              nav: !1,
              dots: !0,
              loop: !0,
              responsive: {
                0: {
                  items: 1,
                },
                400: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
                700: {
                  items: 2,
                },
                1e3: {
                  items: 3,
                },
                1300: {
                  items: 3,
                },
                1900: {
                  items: 3,
                },
              },
            });
          });
      },
      YlTestimonial12: function () {
        $("#yl-testimonial-slide-2").length &&
          $(window).on("load", function () {
            $("#yl-testimonial-slide-2").owlCarousel({
              margin: 30,
              responsiveClass: !0,
              nav: !1,
              dots: !0,
              loop: !0,
              responsive: {
                0: {
                  items: 1,
                },
                400: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
                700: {
                  items: 2,
                },
                1e3: {
                  items: 3,
                },
                1300: {
                  items: 4,
                },
                1900: {
                  items: 4,
                },
              },
            });
          });
      },
      YlBlog2: function () {
        $("#yl-blog-slider-2").length &&
          $(window).on("load", function () {
            $("#yl-blog-slider-2").owlCarousel({
              margin: 30,
              responsiveClass: !0,
              nav: !1,
              dots: !0,
              loop: !0,
              responsive: {
                0: {
                  items: 1,
                },
                400: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
                700: {
                  items: 2,
                },
                1e3: {
                  items: 3,
                },
                1300: {
                  items: 3,
                },
                1900: {
                  items: 3,
                },
              },
            });
          });
      },
      YlTeamInstructor: function () {
        $("#yl-instructor-slider").length &&
          $(window).on("load", function () {
            $("#yl-instructor-slider").owlCarousel({
              margin: 30,
              responsiveClass: !0,
              nav: !0,
              dots: !1,
              navText: [
                "<i class='fas fa-arrow-left'></i>",
                "<i class='fas fa-arrow-right'></i>",
              ],
              loop: !0,
              responsive: {
                0: {
                  items: 1,
                },
                400: {
                  items: 1,
                },
                600: {
                  items: 1,
                },
                700: {
                  items: 2,
                },
                1e3: {
                  items: 3,
                },
                1300: {
                  items: 4,
                },
                1900: {
                  items: 4,
                },
              },
            });
          });
      },
      GoogleMap: function () {
        if ($("#yl_map").length) {
          var e = $("#yl_map").data("lat"),
            o = $("#yl_map").data("lon"),
            i = $("#yl_map").data("zoom"),
            t = $("#yl_map").data("marker"),
            n = $("#yl_map").data("info"),
            s = $("#yl_map").data("mlat"),
            a = $("#yl_map").data("mlon");
          new GMaps({
            el: "#yl_map",
            lat: e,
            lng: o,
            scrollwheel: !1,
            scaleControl: !0,
            streetViewControl: !1,
            panControl: !0,
            disableDoubleClickZoom: !0,
            mapTypeControl: !1,
            zoom: i,
          }).addMarker({
            lat: s,
            lng: a,
            icon: t,
            infoWindow: {
              content: n,
            },
          });
        }
      },
    },
  };
  jQuery(document).ready(function () {
    e.init();
  });
})(),
  $(document).ready(function () {
    if (
      ($(".reset").on("click", function () {
        $("input[name='fav_type_of_course']:checked").prop("checked", !1),
          $("input[name='Beginner']:checked").prop("checked", !1),
          $("input[name='Hand Written']:checked").prop("checked", !1);
      }),
      $(".share").on("click", function () {
        $(this).children(".shared-icon").toggleClass("display-icon");
      }),
      $(".close-btn").click(function () {
        $(".notice-section").animate(
          {
            height: "0px",
          },
          500,
        ),
          $(".notice-section").css("padding", "0px"),
          $(".black-font").css("display", "none"),
          $(".close-btn").css("display", "none");
      }),
      $(".google_ad").offset())
    ) {
      var e = $("#yl-breadcrumb").height() ? $("#yl-breadcrumb").height() : 0,
        o = $("#yl-header").height() + e + 8,
        i = $(".google_ad").offset().top;
      $(window).scroll(function () {
        $(window).scrollTop() >= i
          ? $(".google_ad").css({
              position: "fixed",
              width: "auto",
              top: o,
            })
          : $(".google_ad").css({
              position: "static",
            });
      });
    }
  });
