var postsHtml = "";

for (var i = 0; i < 30; i++) {
  var post = posts[i];
  var html =
    '<div class="swiper-slide">' +
    '<div class="post-box">' +
    '<div class="post__wrapper">' +
    '<a href="news-detail.html?id=' +
    (i + 1) +
    '" class="post__link">' +
    '<div class="post__imagem">' +
    '<img src="' +
    post.imagem +
    '" alt="" class="img-responsiva">' +
    "</div>" +
    '<span class="post__title">' +
    post.titulo +
    "</span>" +
    '<p class="post__subtitle">Por <strong>' +
    post.autor +
    "</strong> |  " +
    post.data +
    "</p>" +
    "</a>" +
    "</div>" +
    "</div>" +
    "</div>";
  postsHtml += html;
}

document.getElementById("posts-slider").innerHTML = postsHtml;

var mySwiper = new Swiper(".swiper-container-testemunhas", {
  pagination: {
    el: ".swiper-pagination-testemunhas",
    clickable: true,
  },
});

var mySwiperPosts = new Swiper(".swiper-container-posts", {
  slidesPerView: 9,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-posts",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 980px
    980: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    // when window width is >= 480px
    768: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    // when window width is >= 980px
    980: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});
