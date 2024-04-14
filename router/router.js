const { IndicesRoutes } = require("./indices.routes");

const AllRoutes = require("express").Router();

AllRoutes.get("/", (req, res) => {
  return res.render("pages/index", {
    message: "Hello Aren",
  });
});

AllRoutes.use("/index", IndicesRoutes);

module.exports = {
  AllRoutes,
};
