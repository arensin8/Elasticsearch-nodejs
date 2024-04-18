const { createBlog, getALlBlogs } = require("../controller/blog.controller");

  
  const BlogsRoutes = require("express").Router();
  
  BlogsRoutes.post("/create", createBlog);
  BlogsRoutes.get("/list/:value?", getALlBlogs);
  
  module.exports = {
    BlogsRoutes,
  };
  