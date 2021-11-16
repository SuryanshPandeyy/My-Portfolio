const ServiceJson = [
  {
    id: 1,
    title: "Standard",
    price: 2788.5,
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

    seo: 2788.5,
    singlePage: false,
    revision: 1,
  },
  {
    id: 2,
    title: "Premium",
    price: 6691.05,
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

    seo: 6691.05,
    singlePage: true,
    revision: 2,
  },

  {
    id: 3,
    title: "Pro",
    price: 7806.24,
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

    seo: 7806.24,

    singlePage: true,
    revision: 2,
  },
];

export default ServiceJson;
