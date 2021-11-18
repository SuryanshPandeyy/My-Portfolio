const ServiceJson = [
  {
    id: 1,
    title: "Standard",
    price: 37.46,
    languages: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Php", "MySQL"],
    },
    page: 1,
    time: {
      frontend: {
        day: 2,
        hour: 1.5,
      },
      backend: {
        day: 1,
        hour: 3,
      },
    },

    seo: 37.46,
    singlePage: false,
    revision: 1,

  },
  {
    id: 2,
    title: "Premium",
    price: 89.88,
    languages: {
      frontend: ["ReactJS"],
      backend: ["NodeJS", "MongoDB"],
    },
    page: 1,
    time: {
      frontend: {
        day: 1,
        hour: 3,
      },
      backend: {
        day: 2,
        hour: 6,
      },
    },

    seo: 89.88,
    singlePage: true,
    revision: 2,

  },

  { 
    id: 3,
    title: "Pro",
    price: 104.86,
    languages: {
      frontend: ["NextJS"],
      backend: ["NodeJS", "MongoDB"],
    },
    page: 1,
    time: {
      frontend: {
        day: 1,
        hour: 3,
      },
      backend: {
        day: 2,
        hour: 6,
      },
    },

    seo: 104.86,

    singlePage: true,
    revision: 2,

  },
];

export default ServiceJson;
