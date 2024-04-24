const {
  createBlog,
  getALlBlogs,
  removeBlog,
  updateBlog,
  updateBlog2,
  searchByTitle,
  searchByMultiField,
  searchByRegexp,
  searchByRegexpMultiFields,
} = require("../controller/blog.controller");

const BlogsRoutes = require("express").Router();

BlogsRoutes.post("/create", createBlog);
BlogsRoutes.get("/list/:value?", getALlBlogs);
BlogsRoutes.delete("/delete/:id", removeBlog);
BlogsRoutes.put("/update-2/:id", updateBlog2);
BlogsRoutes.get("/searchByTitle", searchByTitle);
BlogsRoutes.get("/searchByFields", searchByMultiField);
BlogsRoutes.get("/searchByRegexp", searchByRegexp);
BlogsRoutes.get("/searchByRegexpMulti", searchByRegexpMultiFields);

module.exports = {
  BlogsRoutes,
};
