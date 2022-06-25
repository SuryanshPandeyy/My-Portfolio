const ServiceJson = [
  {
    id: 1,
    title: "Standard",
    price: 500,
    languages: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Php", "MySQL"],
    },
    page: 1,
    time: {
      frontend: {
        day: 1,
        hour: 1.5,
      },
      backend: {
        day: 2,
        hour: 3,
      },
    },

    seo: 450,
    singlePage: false,
    revision: 10,
    freeSslHosting: false,
  },
  {
    id: 2,
    title: "Premium",
    price: 800,
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

    seo: 100,
    singlePage: true,
    revision: 15,
    freeSslHosting: true,
    inc: 1.1,
  },

  {
    id: 3,
    title: "Pro",
    price: 1200,
    languages: {
      frontend: ["NextJS"],
      backend: ["NodeJS", "MongoDB"],
    },
    page: 1,
    time: {
      frontend: {
        day: 2,
        hour: 3,
      },
      backend: {
        day: 4,
        hour: 6,
      },
    },

    seo: 600,

    singlePage: true,
    revision: 15,
    freeSslHosting: true,
    inc: 1.2,
  },
  {
    id: 4,
    title: "App",
    price: 1800,
    languages: {
      frontend: ["React Native"],
      backend: ["NodeJS", "MongoDB"],
    },
    page: 1,
    time: {
      frontend: {
        day: 2,
        hour: 0,
      },
      backend: {
        day: 4,
        hour: 6,
      },
    },

    seo: 0,

    singlePage: true,
    revision: 25,
    freeSslHosting: false,
    inc: 1.2,
  },
];

export default ServiceJson;
