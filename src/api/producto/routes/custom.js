module.exports = {
  routes: [
    {
      method: "GET",
      path: "/productos/:slug",
      handler: "producto.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
