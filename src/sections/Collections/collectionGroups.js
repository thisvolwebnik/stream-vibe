import categoryItems from "@/sections/Categories/categoriesItem";

const collectionGroups = [
  {
    isActive: true,
    title: "Movies",
    items: [
      { title: "Our Genres", categoryItems },
      {
        title: "Popular Top 10 In Genres",
        categoryItems: [
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/1.jpg",
              "/src/assets/images/categories/2.jpg",
              "/src/assets/images/categories/3.jpg",
              "/src/assets/images/categories/4.jpg",
            ],
          },
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/1.jpg",
              "/src/assets/images/categories/2.jpg",
              "/src/assets/images/categories/3.jpg",
              "/src/assets/images/categories/4.jpg",
            ],
          },
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/1.jpg",
              "/src/assets/images/categories/2.jpg",
              "/src/assets/images/categories/3.jpg",
              "/src/assets/images/categories/4.jpg",
            ],
          },
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/1.jpg",
              "/src/assets/images/categories/2.jpg",
              "/src/assets/images/categories/3.jpg",
              "/src/assets/images/categories/4.jpg",
            ],
          },
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/1.jpg",
              "/src/assets/images/categories/2.jpg",
              "/src/assets/images/categories/3.jpg",
              "/src/assets/images/categories/4.jpg",
            ],
          },
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/1.jpg",
              "/src/assets/images/categories/2.jpg",
              "/src/assets/images/categories/3.jpg",
              "/src/assets/images/categories/4.jpg",
            ],
          },
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/1.jpg",
              "/src/assets/images/categories/2.jpg",
              "/src/assets/images/categories/3.jpg",
              "/src/assets/images/categories/4.jpg",
            ],
          },
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/1.jpg",
              "/src/assets/images/categories/2.jpg",
              "/src/assets/images/categories/3.jpg",
              "/src/assets/images/categories/4.jpg",
            ],
          },
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/1.jpg",
              "/src/assets/images/categories/2.jpg",
              "/src/assets/images/categories/3.jpg",
              "/src/assets/images/categories/4.jpg",
            ],
          },
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/1.jpg",
              "/src/assets/images/categories/2.jpg",
              "/src/assets/images/categories/3.jpg",
              "/src/assets/images/categories/4.jpg",
            ],
          },
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/1.jpg",
              "/src/assets/images/categories/2.jpg",
              "/src/assets/images/categories/3.jpg",
              "/src/assets/images/categories/4.jpg",
            ],
          },
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/1.jpg",
              "/src/assets/images/categories/2.jpg",
              "/src/assets/images/categories/3.jpg",
              "/src/assets/images/categories/4.jpg",
            ],
          },
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/1.jpg",
              "/src/assets/images/categories/2.jpg",
              "/src/assets/images/categories/3.jpg",
              "/src/assets/images/categories/4.jpg",
            ],
          },
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/1.jpg",
              "/src/assets/images/categories/2.jpg",
              "/src/assets/images/categories/3.jpg",
              "/src/assets/images/categories/4.jpg",
            ],
          },
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/1.jpg",
              "/src/assets/images/categories/2.jpg",
              "/src/assets/images/categories/3.jpg",
              "/src/assets/images/categories/4.jpg",
            ],
          },
          {
            title: "Action",
            badge: "Top 10 In",
            images: [
              "/src/assets/images/categories/1.jpg",
              "/src/assets/images/categories/2.jpg",
              "/src/assets/images/categories/3.jpg",
              "/src/assets/images/categories/4.jpg",
            ],
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: { slidesPerGroup: 1, slidesPerView: 2, spaceBetween: 20 },
            481: { slidesPerGroup: 2, slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerGroup: 3, slidesPerView: 3, spaceBetween: 20 },
            1024: { spaceBetween: 20, allowTouchMove: false },
            1441: { spaceBetween: 30, allowTouchMove: false },
          },
        },
      },
      { title: "Trending Now", categoryItems },
      { title: "New Releases", categoryItems },
      { title: "Must - Watch Movies", categoryItems },
    ],
  },
  {
    isActive: false,
    title: "Shows",
    items: [
      { title: "Our Genres", categoryItems },
      { title: "Popular Top 10 In Genres", categoryItems },
      { title: "Trending Now", categoryItems },
      { title: "New Releases", categoryItems },
      { title: "Must - Watch Movies", categoryItems },
    ],
  },
];

export default collectionGroups;
