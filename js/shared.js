var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open'; // This will actually overwrite the complete class list
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", function () {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function () {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
$(document).ready(function () {
  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
    /* Check the location of each desired element */
    $(".hideme").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 2;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      //bottom_of_object -= 40vh;
      console.log($(this), bottom_of_window, bottom_of_object);
      if ($(this).attr("id") == "proyectos") {
        bottom_of_object -= 900;
      }
      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1" }, 300);
      }
    });
  });
});

$(function () {
  $("#t").t({
    delay: 1, // start delay in seconds [default:0]

    speed: 60, // typing speed (ms) [default:50]
    speed_vary: false, // 'human like' speed variation [default:false]

    beep: false, // beep while typing (Web Audio API) [default:false]

    mistype: false, // mistype rate: 1:N per char [default:false]
    locale: "en", // keyboard layout (to fit mistype); supported: 'en' (english) or 'de' (german) [default:'en']

    caret: "", // caret content; can be html too [default:true (\u258e)]
    blink: true, // blink-interval in ms; if TRUE, speed*3  [default:true]
    blink_perm: false, // permanent blinking? if FALSE, caret blinks only on delay/pause/finish [default:false]
    repeat: true, // repeat typing: if TRUE, infinite or N times [default:0]
    tag: "span", // wrapper tag (.t-container, .t-caret) [default:'span']
    pause_on_click: false, // pauses/continues typing on click/tap (elm) [default:false]
    pause_on_tab_switch: false, // pauses typing if window is inactive (Page Visibility API) [default:false]

    // init callback (ready-to-type)
    init: function (elm) {
      console.log($(this));
    },
    // typing callback
    typing: function (elm, chr_or_elm, left, total) {},
    // finished callback
    fin: function (elm) {},
  });
});

$(document).ready(function () {
  $(".myImg").click(function () {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    console.log();
    modal.style.display = "block";
    modalImg.src = $(this).attr("src");
  });

  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
$(document).ready(function () {
  $("#product-overview").ripples({
    resolution: 200,
    perturbance: 0.004,
  });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementById("myModal");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
