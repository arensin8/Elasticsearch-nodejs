const { createIndex, getIndices } = require("../controller/indices.controller");

const IndicesRoutes = require("express").Router();

IndicesRoutes.post("/create", createIndex);
IndicesRoutes.get("/list", getIndices);

module.exports = {
  IndicesRoutes,
};
