const { BlogsRoutes } = require("./blog.routes");
const { IndicesRoutes } = require("./indices.routes");

const AllRoutes = require("express").Router();

AllRoutes.get("/", (req, res) => {
  return res.render("pages/index", {
    message: "Hello Aren",
  });
});

AllRoutes.use("/index", IndicesRoutes);
AllRoutes.use("/blogs", BlogsRoutes);

module.exports = {
  AllRoutes,
};
