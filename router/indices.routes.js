const {
  createIndex,
  getIndices,
  removeIndex,
} = require("../controller/indices.controller");

const IndicesRoutes = require("express").Router();

IndicesRoutes.post("/create", createIndex);
IndicesRoutes.get("/list", getIndices);
IndicesRoutes.get("/delete/:indexName", removeIndex);

module.exports = {
  IndicesRoutes,
};
