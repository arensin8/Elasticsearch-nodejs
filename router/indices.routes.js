const { createIndex } = require("../controller/indices.controller");

const IndicesRoutes = require("express").Router();

IndicesRoutes.post("/create", createIndex);

module.exports = {
  IndicesRoutes,
};
