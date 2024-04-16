const { createBlog } = require("../controller/blog.controller");

  
  const BlogsRoutes = require("express").Router();
  
  BlogsRoutes.post("/create", createBlog);
  
  module.exports = {
    BlogsRoutes,
  };
  