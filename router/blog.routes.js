const {
  createBlog,
  getALlBlogs,
  removeBlog,
  updateBlog,
} = require("../controller/blog.controller");

const BlogsRoutes = require("express").Router();

BlogsRoutes.post("/create", createBlog);
BlogsRoutes.get("/list/:value?", getALlBlogs);
BlogsRoutes.delete("/delete/:id", removeBlog);
BlogsRoutes.put("/update/:id", updateBlog);

module.exports = {
  BlogsRoutes,
};
